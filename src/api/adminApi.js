import { LocalStorage } from "../utils/LocalStorage";
import axiosManager from "./apiManager";

const login = async (email, password) => {
  try {
    const res = await axiosManager.post("/api/login", {
      email,
      password,
    });

    LocalStorage.Post("token", res.data.access);

    console.log(res);

    return { ok: true, token: res.data.access };
  } catch (error) {
    if (error) {
      console.log("error al iniciar sesion");
    }
    return { ok: false, msg: "Credenciales incorrectas" };
  }
};

const getUser = async (jwt) => {
  try {
    const res = await axiosManager.get("/api/user", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Authorization");
    return { ok: res.data[0].is_admin };
  } catch (error) {
    if (error) {
      console.log({ error: "error getUser" });
    }

    return { ok: false };
  }
};

export const AdminApi = {
  login,
  getUser,
};
