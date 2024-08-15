export const capitalizeFirstLetter= (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const csv = (data) => {
  const array = data.split(",");
  return array;
};

export const readableDate = (date) => {
  const date_setter = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date_setter.toLocaleDateString('en-US', options);
  return formattedDate;
}