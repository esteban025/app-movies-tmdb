export const roundedRating = (rating: number): string => {
  // Round the rating to the nearest half
  const rounded = Math.round(rating * 2) / 2;

  // Format the rating to one decimal place
  return rounded.toFixed(2);
}