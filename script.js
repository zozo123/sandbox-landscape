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
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      applyFilters();
    });
  });

  searchInput.addEventListener("input", applyFilters);
}
