document.addEventListener("DOMContentLoaded", ()) => {
    // Sample data for tools and categories
    const tools = [
        { id: 1, name: "Tool 1", description: "A great tool for productivity", image: "/placeholder.svg?height=150&width=150", type: "free", categories: ["Analytics", "Schedulers"], date: "2025-06-01" },
        { id: 2, name: "Tool 2", description: "Enhance your workflow", image: "/placeholder.svg?height=150&width=150", type: "paid", categories: ["Directories", "Chrome Extensions"], date: "2025-06-01" },
        { id: 3, name: "Tool 3", description: "Streamline your processes", image: "/placeholder.svg?height=150&width=150", type: "free", categories: ["Analytics", "Chrome Extensions"], date: "2025-06-01" },
        { id: 4, name: "Tool 4", description: "Boost your efficiency", image: "/placeholder.svg?height=150&width=150", type: "paid", categories ["Schedulers", "Directories"], date: "2025-06-01" },
        { id: 5, name: "Tool 5", description: "You can make it", image: "/placeholder.svg?height=150&width=150", type: "paid", categories ["Schedulers", "Directories"], date: "2025-06-01" },
        // Add more tools as needed
    ];

    const categories = [ "Analytics", "Schedulers", "Directories", "Chrome Extensions"];

    // DOM Elements
    const toolDirectory = document.getElementById("tool-directory");
    const filterButtons = document.querySelector(".filter-btn");
    const sortSelect = document.getElementById("sort-select");
    const categoryPills = document.getElementById("category-pills");
    const searchBar = document.getElementById("search-bar");
    const paginationContainer = document.getElementById("pagination");
    const toolSubmissionForm = document.getElementById ("tool-submission-form");
    const sponsorButtons = document.querySelectorAll ("sponsor-btn");

    // Variables for pagination
    let currentPage = 1;
    const toolsPerPage = 12;
}