'use client'



            let filteredTools = tools.filter(tool => {
                const matchesFilter = activeFilter === "all" || tool.type === activeFilter;
                const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || tool.description.toLowerCase().includes(searchTerm);
                const matchesCategories = activeCategories.length === 0 || activeCategories.some(category => tool.categories.includes(category));
                return matchesFilter && matchesSearch && matchesCategories;
            });

            filteredTools.sort((a,b) => {
                if (a.featured && !b.featured) return - 1
                if (!a.featured && b.featured) return 1

                switch (sortBy) {
                    case "default":
                        return 0 // No sorting

                    case "newest":
                        return new Date(b.date).getTime() - new Date(a.date).getTime();
                    case "oldest":
                        return new Date(a.date).getTime() - new Date(b.date).getTime();
                    case "a-z":
                        return a.name.localeCompare(b.name);
                    case "z-a":
                        return b.name.localeCompare(a.name);
                    case "free":
                        return a.type === "free" ? -1 : 1
                    case "paid":
                        return a.type === "paid" ? -1 : 1
                    default:
                        return 0;
                
                }
            })
            
            return filteredTools

        }

       //
         }
        )