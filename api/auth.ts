import { RegisterData, SignInData } from "@/types/auth.types";
import instance from "./instance";

interface RefreshTokenData {
  adminId: string;
}

export const signIn = async (data: SignInData) => {
  try {
    const res = await instance.post("/auth/signin", data);
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("user_id", res.data.user_id);
    return res.data;
  } catch (e: any) {
    throw e;
  }
};

export const register = async (data: RegisterData) => {
  try {
    const res = await instance.post("/auth/register", data);
    return res.data;
  } catch (e: any) {
    throw e;
  }
};

// export const signOut = async () => {
//   try {
//     const adminId = localStorage.getItem("adminId");
//     await instance.post("/admin_auth/signout", { adminId });
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("adminId");
//     // toast.success("Logged out");
//   } catch (e) {
//     toast.error("Logout xato");
//   }
// };

// export const refreshToken = async () => {
//   try {
//     const adminId = localStorage.getItem("adminId");
//     const res = await instance.post("/admin_auth/refresh", { adminId });
//     localStorage.setItem("access_token", res.data.access_token);
//     return res.data;
//   } catch (e) {
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("adminId");
//     toast.error("Session expired. Qayta login qiling.");
//     throw e;
//   }
// };
