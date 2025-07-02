// {
//     adult: false,
//     backdrop_path: '/kyBOGOBUMdGWOhzECuosPSzoMpi.jpg',
//     id: 1071585,
//     title: 'M3GAN 2.0',
//     original_title: 'M3GAN 2.0',
//     overview: "After the underlying tech for M3GAN is stolen and misused by a powerful defense contractor to create a military-grade weapon known as Amelia, M3GAN's creator Gemma realizes that the only option is to resurrect M3GAN and give her a few upgrades, making her faster, stronger, and more lethal.",
//     poster_path: '/fBgyUqyu3ioTSQjJJE5RFs2EG3B.jpg',
//     media_type: 'movie',
//     original_language: 'en',
//     genre_ids: [ 28, 27, 878, 53 ],
//     popularity: 124.258,
//     release_date: '2025-06-25',
//     video: false,
//     vote_average: 7.1,
//     vote_count: 85
//   },
export interface TrendingMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}