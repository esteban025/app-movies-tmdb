// {
//   adult: false,
//   backdrop_path: '/g62G6aBcAcJv3ClCKmJgmHarHvq.jpg',
//   belongs_to_collection: null,
//   budget: 225000000,
//   genres: [
//     { id: 28, name: 'Action' },
//     { id: 12, name: 'Adventure' },
//     { id: 878, name: 'Science Fiction' }
//   ],
//   homepage: 'https://www.superman.com',
//   id: 1061474,
//   imdb_id: 'tt5950044',
//   origin_country: [ 'US' ],
//   original_language: 'en',
//   original_title: 'Superman',
//   overview: 'Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.',
//   popularity: 54.3012,
//   poster_path: '/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg',
//   production_companies: [
//     {
//       id: 184898,
//       logo_path: '/2Z2hiM1ERqFOWRxNxWoJZ8lTxhb.png',
//       name: 'DC Studios',
//       origin_country: 'US'
//     },
//     {
//       id: 94218,
//       logo_path: '/zjIyeqPOPmKa8eubquKLiy2y2rR.png',
//       name: 'Troll Court Entertainment',
//       origin_country: 'US'
//     },
//     {
//       id: 11565,
//       logo_path: '/S74cHHbIrdmb5M51Pft72Uo9Gz.png',
//       name: 'The Safran Company',
//       origin_country: 'US'
//     }
//   ],
//   production_countries: [ { iso_3166_1: 'US', name: 'United States of America' } ],
//   release_date: '2025-07-09',
//   revenue: 0,
//   runtime: 130,
//   spoken_languages: [ { english_name: 'English', iso_639_1: 'en', name: 'English' } ],
//   status: 'Post Production',
//   tagline: 'Look up.',
//   title: 'Superman',
//   video: false,
//   vote_average: 0,
//   vote_count: 0
// }

export interface DetailsMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: Array<{ id: number; name: string }>;
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{ english_name: string; iso_639_1: string; name: string }>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}