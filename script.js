const searchInput = document.querySelector("#matrix-search");
const rows = Array.from(document.querySelectorAll("#matrix-body tr"));
const filterButtons = Array.from(document.querySelectorAll(".filter"));

let activeFilter = "all";

function rowMatches(row, query, filter) {
  const text = row.textContent.toLowerCase();
  const tags = row.dataset.tags || "";
  const matchesQuery = !query || text.includes(query) || tags.includes(query);
  const matchesFilter = filter === "all" || tags.includes(filter);

  return matchesQuery && matchesFilter;
}

function applyFilters() {
  if (!searchInput) {
    return;
  }

  const query = searchInput.value.trim().toLowerCase();

  rows.forEach((row) => {
    row.classList.toggle("is-hidden", !rowMatches(row, query, activeFilter));
  });
}

if (searchInput && rows.length > 0 && filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
      applyFilters();
    });
  });

  searchInput.addEventListener("input", applyFilters);
}

const atlasCanvas = document.querySelector("#execution-atlas");
const atlasButtons = Array.from(document.querySelectorAll(".atlas-route"));
const atlasSummary = document.querySelector("#atlas-summary");

const routeSummaries = {
  eval:
    "Eval benchmark route: task definition, agent disclosure, clean environment, logs, artifacts, and a reproducible score.",
  rl:
    "RL rollout route: fan out many resettable episodes, capture reward traces, and keep the environment deterministic enough to compare runs.",
  pr:
    "Generated PR route: isolate the runner, avoid shared host Docker, collect test output, build logs, diffs, and reviewer-visible evidence.",
  long:
    "Long agent route: preserve repo state, services, snapshots, partial work, and recovery points so the task can sleep, resume, and roll back.",
  prod:
    "Production generated-code route: policy gate, credential proxy, network egress rules, microVM or VM isolation, audit logs, timeout, and kill switch."
};

const atlasRoutes = {
  eval: {
    seed: 1103,
    color: "#58f2c9",
    points: [
      [0.08, 0.58],
      [0.31, 0.34],
      [0.58, 0.64],
      [0.9, 0.36]
    ]
  },
  rl: {
    seed: 2207,
    color: "#89f0ff",
    points: [
      [0.08, 0.36],
      [0.34, 0.22],
      [0.62, 0.42],
      [0.9, 0.66]
    ]
  },
  pr: {
    seed: 3301,
    color: "#f1c47b",
    points: [
      [0.08, 0.74],
      [0.39, 0.52],
      [0.65, 0.58],
      [0.9, 0.48]
    ]
  },
  long: {
    seed: 4409,
    color: "#c6f28a",
    points: [
      [0.08, 0.22],
      [0.34, 0.52],
      [0.61, 0.28],
      [0.9, 0.22]
    ]
  },
  prod: {
    seed: 5519,
    color: "#ff8fb8",
    points: [
      [0.08, 0.48],
      [0.32, 0.66],
      [0.58, 0.3],
      [0.9, 0.56]
    ]
  }
};

let activeAtlasRoute = "eval";
let atlasFrame = 0;
let atlasAnimation;

function seededRandom(seed) {
  let value = seed;
  return () => {
    value += 0x6d2b79f5;
    let mixed = value;
    mixed = Math.imul(mixed ^ (mixed >>> 15), mixed | 1);
    mixed ^= mixed + Math.imul(mixed ^ (mixed >>> 7), mixed | 61);
    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  };
}

function getAtlasSize(canvas) {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(320, Math.floor(rect.width));
  const height = Math.max(300, Math.floor(rect.height));

  if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
  }

  return { width, height, dpr };
}

function scalePoint(point, width, height) {
  return [point[0] * width, point[1] * height];
}

function drawCurve(ctx, points, color, alpha, width) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.globalAlpha = alpha;
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);

  for (let index = 1; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const midX = (current[0] + next[0]) / 2;
    const midY = (current[1] + next[1]) / 2;
    ctx.quadraticCurveTo(current[0], current[1], midX, midY);
  }

  const last = points[points.length - 1];
  ctx.lineTo(last[0], last[1]);
  ctx.stroke();
  ctx.restore();
}

function pointOnRoute(points, progress) {
  const segments = points.length - 1;
  const scaled = Math.min(0.999, Math.max(0, progress)) * segments;
  const index = Math.floor(scaled);
  const local = scaled - index;
  const start = points[index];
  const end = points[index + 1];
  const ease = local * local * (3 - 2 * local);

  return [
    start[0] + (end[0] - start[0]) * ease,
    start[1] + (end[1] - start[1]) * ease
  ];
}

function drawAtlas() {
  if (!atlasCanvas) {
    return;
  }

  const ctx = atlasCanvas.getContext("2d");
  const { width, height, dpr } = getAtlasSize(atlasCanvas);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = "#050705";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(88, 242, 201, 0.075)";
  ctx.lineWidth = 1;
  for (let x = 24; x < width; x += 48) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 22; y < height; y += 44) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  Object.entries(atlasRoutes).forEach(([key, route]) => {
    const points = route.points.map((point) => scalePoint(point, width, height));
    drawCurve(ctx, points, route.color, key === activeAtlasRoute ? 0.74 : 0.15, key === activeAtlasRoute ? 2.4 : 1.1);
  });

  const route = atlasRoutes[activeAtlasRoute];
  const points = route.points.map((point) => scalePoint(point, width, height));
  const rand = seededRandom(route.seed);
  const particleCount = reducedMotion ? 18 : 42;

  points.forEach((point, index) => {
    ctx.save();
    ctx.fillStyle = index === 0 || index === points.length - 1 ? route.color : "#0b120d";
    ctx.strokeStyle = route.color;
    ctx.globalAlpha = 0.95;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(point[0], point[1], index === 0 || index === points.length - 1 ? 5.2 : 4.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  });

  for (let index = 0; index < particleCount; index += 1) {
    const base = reducedMotion ? rand() : (atlasFrame / 320 + index / particleCount) % 1;
    const point = pointOnRoute(points, base);
    const jitter = (rand() - 0.5) * 14;
    const radius = 1.4 + rand() * 2.6;

    ctx.save();
    ctx.globalAlpha = 0.38 + rand() * 0.48;
    ctx.fillStyle = route.color;
    ctx.beginPath();
    ctx.arc(point[0], point[1] + jitter, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  ctx.save();
  ctx.fillStyle = "rgba(238, 238, 234, 0.78)";
  ctx.font = "12px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace";
  ctx.fillText(`seed:${route.seed} route:${activeAtlasRoute}`, 18, height - 18);
  ctx.restore();

  atlasFrame += 1;
  if (!reducedMotion) {
    atlasAnimation = requestAnimationFrame(drawAtlas);
  }
}

function setAtlasRoute(routeName) {
  if (!atlasRoutes[routeName]) {
    return;
  }

  activeAtlasRoute = routeName;
  atlasFrame = 0;
  atlasButtons.forEach((button) => {
    const isActive = button.dataset.route === routeName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (atlasSummary) {
    atlasSummary.textContent = routeSummaries[routeName];
  }

  if (atlasAnimation) {
    cancelAnimationFrame(atlasAnimation);
  }
  drawAtlas();
}

if (atlasCanvas && atlasButtons.length > 0) {
  atlasButtons.forEach((button) => {
    button.addEventListener("click", () => setAtlasRoute(button.dataset.route));
  });

  window.addEventListener("resize", () => {
    if (atlasAnimation) {
      cancelAnimationFrame(atlasAnimation);
    }
    drawAtlas();
  });

  drawAtlas();
}
