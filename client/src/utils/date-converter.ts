export const dateConverter = (date: number | string) => {
  const parsedDate: Date = new Date(date);
  const formattedDate = `${parsedDate.getDate()}/${
    parsedDate.getMonth() + 1
  }/${parsedDate.getFullYear()}`;
  return formattedDate;
};
