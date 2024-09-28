import axiosManager from "./apiManager";

const getMedicines = async (jwt) => {
  try {
    const res = await axiosManager.get("/api/catalog/medicine/", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res;
  } catch (error) {
    if (error) {
      console.log({ error: "error getUser" });
    }

    return { ok: false };
  }
};

const createMedicine = async (jwt, name) => {
  try {
    const res = await axiosManager.post(
      "/api/catalog/medicine/",
      { name },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return res;
  } catch (error) {
    if (error) {
      console.log({ error: "error createMedi" });
    }

    return { ok: false };
  }
};

export const MedicineApi = {
  getMedicines,
  createMedicine,
};
