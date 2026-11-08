import config from "@/services/config";

export const getImageUrl = (path: string | null) => {
  if (!path) return "";
  return path.startsWith("http") ? path : `${config.onlinePath}${path}`;
};