document.addEventListener('DOMContentLoaded', () => {
    // Sample data for tools and categories
    const tools = [
        { id: 1, name: "Tool 1", description: "A great tool for productivity", image: "/placeholder.svg?height=150&width=150", type: "free", categories: ["Analytics", "Schedulers"], date: "2023-06-01" },
        { id: 2, name: "Tool 2", description: "Enhance your workflow", image: "/placeholder.svg?height=150&width=150", type: "paid", categories: ["Directories", "Chrome Extensions"], date: "2023-05-15" },
        { id: 3, name: "Tool 3", description: "Streamline your processes", image: "/placeholder.svg?height=150&width=150", type: "free", categories: ["Analytics", "Chrome Extensions"], date: "2023-06-10" },
        { id: 4, name: "Tool 4", description: "Boost your efficiency", image: "/placeholder.svg?height=150&width=150", type: "paid", categories: ["Schedulers", "Directories"], date: "2023-05-01" },
        // Add more tools as needed
    ];

    const categories = ["Analytics", "Schedulers", "Directories", "Chrome Extensions"];

    // DOM elements
    const toolDirectory = document.getElementById('tool-directory');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-select');
    const categoryPills = document.getElementById('category-pills');
    const searchBar = document.getElementById('search-bar');
    const paginationContainer = document.getElementById('pagination');
    const toolSubmissionForm = document.getElementById('tool-submission-form');
    const sponsorButtons = document.querySelectorAll('.sponsor-btn');

    // Variables for pagination
    let currentPage = 1;
    const toolsPerPage = 12;

    // Function to render tools
    function renderTools(toolsToRender) {
        if (!toolDirectory) return;
        toolDirectory.innerHTML = '';
        toolsToRender.forEach(tool => {
            const toolElement = document.createElement('div');
            toolElement.className = 'tool';
            toolElement.innerHTML = `
                <img src="${tool.image}" alt="${tool.name} Logo">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <span class="badge badge-${tool.type}">${tool.type}</span>
                <div class="tool-categories">
                    ${tool.categories.map(category => `<span class="category-pill">${category}</span>`).join('')}
                </div>
            `;
            toolDirectory.appendChild(toolElement);
        });
    }
         // Function to filter and sort tools
         function filterAndSortTools() {
            const activeFilter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
            const sortBy = sortSelect ? sortSelect.value : "orderby";
            const searchTerm = searchBar ? searchBar.value.toLowerCase() : '';
            const activeCategories = Array.from(document.querySelectorAll(".category-pill.active")).map(pill => pill.textContent);

            let filteredTools = tools.filter(tool => {
                const matchesFilter = activeFilter === "all" || tool.type === activeFilter;
                const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || tool.description.toLowerCase().includes(searchTerm);
                const matchesCategories = activeCategories.length === 0 || activeCategories.some(category => tool.categories.includes(category));
                return matchesFilter && matchesSearch && matchesCategories;
            });

            filteredTools.sort((a,b) => {
                switch (sortBy) {
                    case "newest":
                        return new Date(b.date) - new Date(a.date);
                    case "oldest":
                        return new Date(a.date) - new Date(b.date);
                    case "a-z":
                        return a.name.localeCompare(b.name);
                    case "z-a":
                        return b.name.localeCompare(a.name);
                    default:
                        return 0;
                
                }
            });
         }
         }