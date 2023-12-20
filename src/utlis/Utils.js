export const dateFormat = (value) => {
  let date = new Date(value);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: "UTC",
  };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
};
