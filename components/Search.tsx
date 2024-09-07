"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className="relative w-full max-w-sm ml-4"> {/* Added ml-4 to move container slightly right */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for albums or songs..."
        className="w-full py-2 px-10 pl-12 pr-20 border border-gray-300 rounded-full bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <FaSearch
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={16}
      />
      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
