// {
//   "id": 1119878,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "K6lJh9ADfbQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-06-23T17:00:05.000Z",
//       "id": "685998c3067f87cc9ee6496e"
//     }
//   ]
// }
export interface VideoMovieType {
  id: number;
  results: Array<{
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }>;
}