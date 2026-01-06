import api from "./api";

export const getKosList = async () => {
  const response = await api.get("/kos");
  return response.data; // ⬅️ INI WAJIB
};


export const getKosDetail = async (id) => {
  const res = await api.get(`/kos/${id}`);
  return res.data;
};
