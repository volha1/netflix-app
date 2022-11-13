const getYear = (date: string): string => {
  return date.substring(0, 4);
};

const padToTwoDigits = (number: number): string => {
  return number.toString().padStart(2, '0');
};

const getMovieDuration = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${padToTwoDigits(minutes)}m`;
};

export { getYear, getMovieDuration };