export const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === "production" ? "/disc-website" : "";
  return `${basePath}${path}`;
};
