document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filters input[type="checkbox"], .filters input[type="radio"]');
    const products = document.querySelectorAll('.product-card');

    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            applyFilters();
        });
    });

    function applyFilters() {
        // Example simple filter logic - extend as needed
        products.forEach(product => {
            product.style.display = "block";
        });

        // Add filtering logic here based on selected filters
    }
});
