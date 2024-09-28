import axiosManager from "./apiManager";

const getIllness = async (jwt) => {
  try {
    const res = await axiosManager.get("/api/catalog/illness/", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error) {
      console.log({ error: "error getill" });
    }

    return [{ ok: false }];
  }
};

const postIllness = async (jwt, name) => {
  try {
    const res = await axiosManager.post(
      "/api/catalog/illness/",
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
      console.log({ error: "error posIlln" });
    }

    return { ok: false };
  }
};

export const IllnessApi = {
  getIllness,
  postIllness,
};
