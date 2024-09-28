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

//url, datos
const createPatient = async (jwt, data) => {
  try {
    const res = await axiosManager.post(
      "/api/login",
      { data }, // se supone que son los datos del paciente, poner individual
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    console.log(res); //me devuelve??

    return { ok: true };
  } catch (error) {
    if (error) {
      console.log("error createPatient");
    }
    return { ok: false };
  }
};

//url, datos, devuelve
const createDonor = async (jwt, data) => {
  try {
    const res = await axiosManager.post(
      "/api/login",
      { data }, // se supone que son los datos del donor, poner individual
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    console.log(res); //me devuelve??

    return { ok: true };
  } catch (error) {
    if (error) {
      console.log("error createDonor");
    }
    return { ok: false };
  }
};

//url, datos, devuelve
const createAdmin = async (jwt, data) => {
  try {
    const res = await axiosManager.post(
      "/api/login",
      { data }, // se supone que son los datos del admin, poner individual
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    console.log(res); //me devuelve??

    return { ok: true };
  } catch (error) {
    if (error) {
      console.log("error createAdmin");
    }
    return { ok: false };
  }
};

export const AdminApi = {
  login,
  getUser,
  createPatient,
  createDonor,
  createAdmin,
};
