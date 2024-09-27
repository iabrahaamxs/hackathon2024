import axiosManager from "./apiManager";

const consulta = async (id) => {
  try {
    const res = await axiosManager.post("/apiurlllll", {
      document: id,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return { msg: "error consulta" };
  }
};

export const PatientApi = {
  consulta,
};
