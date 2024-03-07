import myAPI from "../config/myAPI";

export const getProfileInfo = () => myAPI.get("/profile");

export const updateProfileInfo = (formData) =>
  myAPI.patch("/profile", formData);
