// Add "use client" at the very top
"use client";

import React, { useState } from "react";
import Card from "../components/Card";
import { useGetLatestAlbumQuery } from "../redux/services/rapidapiCore";
import Loader from "../components/Preloader";
import Search from "../components/Search";

export default function Home() {
  const [query, setQuery] = useState<string>("");

  // Adjust API query based on search query
  const { data, isFetching, error } = useGetLatestAlbumQuery(query || "Bollywood Top 10");
  const Top10Latest = data?.albums.items;

  if (isFetching) return <Loader />;
  if (error) return <div>Error Occurred</div>;

  // Filter albums based on query if search query is provided
  const filteredAlbums = Top10Latest?.filter((item: any) =>
    item.data.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-black py-16 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-white font-bold mb-4">Trending Albums</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <Search onSearch={setQuery} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredAlbums?.length ? (
            filteredAlbums.map((item: any, index: any) => (
              <Card item={item} key={index} />
            ))
          ) : (
            <p className="text-gray-400">No albums found for "{query}"</p>
          )}
        </div>
      </div>
    </div>
  );
}
