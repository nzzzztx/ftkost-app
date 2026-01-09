import api from "./api";

export const getKosList = async () => {
  const res = await api.get("/kos");
  return res.data;
};

export const getKosDetail = async (id) => {
  const res = await api.get(`/kos/${id}`);
  return res.data;
};

export const getKosBySlug = async (slug) => {
  const res = await api.get(`/kos/${slug}`);
  return res.data;
};
