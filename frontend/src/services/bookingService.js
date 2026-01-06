import api from "./api";

export const submitBookingRequest = async (payload) => {
  const res = await api.post("/booking-request", payload);
  return res.data;
};
