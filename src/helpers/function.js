export const capitalizeFirstLetter= (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const csv = (data) => {
  const array = data.split(",");
  return array;
};