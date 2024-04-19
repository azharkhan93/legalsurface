export const shortenEmail = (email: string) => {
  return email.slice(0, 12).concat("...");
};
