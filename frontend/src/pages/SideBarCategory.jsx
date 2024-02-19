import React from "react";

// Define categories with title, article count, and color properties
const categories = [
  { title: "Layoffs", articles: 2000, color: "bg-blue-300" },
  { title: "Startups", articles: 85, color: "bg-green-300" },
  { title: "Economy", articles: 60, color: "bg-red-300" },
  { title: "Innovation", articles: 120, color: "bg-yellow-300" },
  { title: "Market Trends", articles: 90, color: "bg-purple-300" },
  { title: "Google", articles: 100, color: "bg-orange-300" },
  { title: "Facebook", articles: 91, color: "bg-gray-300" },
  { title: "X", articles: 86, color: "bg-indigo-300" },

  // ... add more categories as needed
];

const SideBarCategory = () => {
  return (
    <div className="mb-4">
      <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
        Popular Topics
      </h5>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300"
            style={{ backgroundColor: "white" }}
          >
            <a className="flex items-center text-gray-600 cursor-pointer">
              <span
                className={`inline-block h-4 w-4 ${category.color} mr-3`}
              ></span>
              {category.title}
              <span className="text-gray-500 ml-auto">
                {category.articles} articles
              </span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarCategory;
