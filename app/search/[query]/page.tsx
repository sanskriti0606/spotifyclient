// // // "use client";

// // // import Card from "@/components/Card";
// // // import { useGetSearchAlbumQuery } from "../../../redux/services/rapidapiCore";
// // // import React, { use, useState } from "react";
// // // import Loader from "@/components/Preloader";
// // // const Page = ({ params }: any) => {
// // //   const searchterm = params.query.replace(/-/g, " ");
// // //   console.log(searchterm);
// // //   const { data, isFetching, error } = useGetSearchAlbumQuery(searchterm);

// // //   if (isFetching)
// // //     return (
// // //       <>
// // //         <Loader />
// // //       </>
// // //     );
// // //   if (error) return <div>Error Occured</div>;

// // //   const Top20Search = data?.albums.items;
// // //   console.log(Top20Search);

// // //   return (
// // //     <>
// // //       <div className="bg-dark">
// // //         <div className="container mx-auto py-8">
// // //           <h1 className="text-xl font-bold mb-4">
// // //             Search Result for: {searchterm}
// // //           </h1>
// // //           <div className="flex justify-center">
// // //             <div className="w-full max-w-lg"></div>
// // //           </div>
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
// // //             {Top20Search?.map((item: any, index: any) => (
// // //               <Card item={item} key={index} />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Page;
// // import { useRouter } from 'next/router';
// // import React from 'react';
// // import Card from '../../../components/Card';
// // import { useGetSearchAlbumQuery } from '../../../redux/services/rapidapiCore';
// // import Loader from '../../../components/Preloader';

// // export default function SearchPage() {
// //   const router = useRouter();
// //   const { query } = router.query;

// //   const { data, isFetching, error } = useGetSearchAlbumQuery(query as string);
// //   const albums = data?.albums.items;

// //   if (isFetching) return <Loader />;
// //   if (error) return <div>Error occurred</div>;

// //   return (
// //     <div className="bg-black p-6">
// //       <h1 className="text-white text-3xl mb-6">Search Results</h1>
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //         {albums?.map((album: any, index: number) => (
// //           <Card key={index} item={album} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';

// import { useRouter } from 'next/router';
// import React from 'react';
// import Card from '../../../components/Card';
// import { useGetSearchAlbumQuery } from '../../../redux/services/rapidapiCore';
// import Loader from '../../../components/Preloader';

// export default function SearchPage() {
//   const router = useRouter();
//   const { query } = router.query;

//   const { data, isFetching, error } = useGetSearchAlbumQuery(query as string);
//   const albums = data?.albums.items;

//   if (isFetching) return <Loader />;
//   if (error) return <div>Error occurred</div>;

//   return (
//     <div className="bg-black p-6">
//       <h1 className="text-white text-3xl mb-6">Search Results</h1>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {albums?.map((album: any, index: number) => (
//           <Card key={index} item={album} />
//         ))}
//       </div>
//     </div>
//   );
// }
