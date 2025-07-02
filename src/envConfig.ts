// traemos la info de las variables de entorno
const {
  TMDB_API_TOKEN,
  PUBLIC_TMDB_API_KEY,
  PUBLIC_TMDB_API_BASE_URL,
  PUBLIC_TMDB_IMAGE_API
} = import.meta.env;

export const envConfig = {
  // Solo exportar esto si se usa del lado servidor
  apiToken: TMDB_API_TOKEN,
  // Estas pueden ser públicas si son necesarias en el cliente
  publicApiKey: PUBLIC_TMDB_API_KEY,
  publicApiBaseUrl: PUBLIC_TMDB_API_BASE_URL,
  publicImageApi: PUBLIC_TMDB_IMAGE_API,
};