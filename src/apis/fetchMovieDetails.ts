import { envConfig } from "@src/envConfig";
import type { DetailsMovie } from "../types/DetailsMovie";
const { publicApiBaseUrl, publicApiKey } = envConfig;

export const fetchMovieDetails = async (id: string): Promise<DetailsMovie> => {
  const response = await fetch(
    `${publicApiBaseUrl}/movie/${id}?api_key=${publicApiKey}`
  );

  if (!response.ok) {
    throw new Error(`Error fetching movie details: ${response.statusText}`);
  }

  const movieDetails: DetailsMovie = await response.json();
  return movieDetails;
}