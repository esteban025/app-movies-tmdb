import { envConfig } from "@src/envConfig";
import type { VideoMovieType } from "../types/VideoMovie";

const { publicApiBaseUrl, publicApiKey } = envConfig;

export const fetchVideoMovie = async (id: string): Promise<VideoMovieType> => {
  const response = await fetch(
    `${publicApiBaseUrl}/movie/${id}/videos?api_key=${publicApiKey}`
  );

  if (!response.ok) {
    throw new Error(`Error fetching video movie: ${response.statusText}`);
  }

  const videoMovie: VideoMovieType = await response.json();
  return videoMovie;
}
