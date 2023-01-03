export function formatDate(currentDate: string) {
  const format = new Date(currentDate).toDateString();

  const formattedDate = format.split(" ");

  return formattedDate[1] + " " + formattedDate[2] + ", " + formattedDate[3];
}
