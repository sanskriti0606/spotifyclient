"use client";

import React, { useState } from "react";
import Loader from "../../../components/Preloader";
import Playlist from "../../../components/Playlist";
import Search from "../../../components/Search"; // Ensure this path is correct
import Image from "next/image";
import { useGetAlbumQuery } from "../../../redux/services/rapidapiCore";

const Page = ({ params }: any) => {
  const ids = params.id;
  const { data, isFetching, error } = useGetAlbumQuery(ids);
  const [query, setQuery] = useState('');

  if (isFetching) return <Loader />;
  if (error) return <div>Error Occurred</div>;

  const album = data?.albums[0];
  const {
    album_type,
    artists,
    copyrights,
    images,
    label,
    name,
    popularity,
    release_date,
    total_tracks,
    tracks,
  } = album;

  // Filter tracks based on search query
  const filteredTracks = tracks.items?.filter((track: any) =>
    track.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-spotify-dark py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white">{name}</h2>
          <Image
            src={images[0].url}
            alt="Album Cover"
            width={300}
            height={300}
            className="rounded-md mx-auto mt-6"
          />
          <h1 className="text-2xl font-bold text-gray-400 mt-4">{label}</h1>
          <p className="text-lg text-gray-500 mt-2">Release Date: {release_date}</p>

          <div className="mt-4">
            {artists?.map((item: any, index: any) => (
              <p className="text-lg text-gray-300" key={index}>
                {item.name}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <button className="bg-spotify-green text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600">
              Play
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-white font-bold mb-4">Playlist</h2>
          {/* Search Bar */}
          <Search onSearch={setQuery} />

          <ul>
            {filteredTracks?.length ? (
              filteredTracks.map((item: any, index: any) => (
                <Playlist item={item} key={index} />
              ))
            ) : (
              <p className="text-gray-400">No results found for "{query}"</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
