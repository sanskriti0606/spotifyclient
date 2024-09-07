
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  item?: any;
  index?: any;
}

const Card = ({ item, index }: CardProps) => {
  const { artists, coverArt, name, uri } = item.data;
  const ids = uri.replace("spotify:album:", "");

  return (
    <div 
      key={index} 
      className="bg-[#181818] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
      
      <Image
        priority={index === 0}
        className="object-cover w-full h-64"
        src={coverArt.sources[0].url}
        alt="Album Cover"
        width={500}
        height={200}
      />
      
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white truncate">{name}</h2>
        <p className="text-gray-400 truncate">
          {artists.items[0].profile.name}
        </p>
        <Link 
          href={`/albums/${ids}`} 
          className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
          Play
        </Link>
      </div>
    </div>
  );
}

export default Card;
