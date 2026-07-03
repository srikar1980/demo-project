export const sayHello = (name = "Guest") => {
  return `Hello ${name}`;
};

export const getTodayDate = () => {
  return new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
