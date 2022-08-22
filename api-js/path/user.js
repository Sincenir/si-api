import { Get } from "../server";

export function getUserInfo(id) {
  return Get("/user/info", { id });
}

export const userApi = {
  getUserInfo,
};
