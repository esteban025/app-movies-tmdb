export const getYearMovie = (release_date: string): number => {
  // Extract the year from the release_date string
  const year = release_date.split('-')[0];

  // Convert the year to a number and return it
  return parseInt(year, 10);
}