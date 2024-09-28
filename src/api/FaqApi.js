import axiosManager from "./apiManager";

const getFaq = async (jwt) => {
  try {
    const res = await axiosManager.get("/api/catalog/faq/", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error) {
      console.log({ error: "error getFaq" });
    }

    return [{ ok: false }];
  }
};

export const FaqApi = {
  getFaq,
};
