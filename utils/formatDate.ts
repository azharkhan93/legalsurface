export function formatDate(dateTimeString: string) {
  const dateTime = new Date(dateTimeString);
  const formattedDateTime = dateTime.toLocaleString("en-US", {
    // hour: "numeric",
    // minute: "2-digit",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });
  return formattedDateTime;
}
