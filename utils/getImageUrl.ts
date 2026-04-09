export const getImageUrl = (url?: string): string => {
  if (!url) return "";
  const fixedPath = url.replace(/\\/g, "/");
  return `${process.env.NEXT_PUBLIC_BASE_URL}/${fixedPath}`;
};
