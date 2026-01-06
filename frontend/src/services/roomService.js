import api from "./api";

export const getRoomDetail = async (id) => {
  const res = await api.get(`/rooms/${id}`);
  return res.data;
};
