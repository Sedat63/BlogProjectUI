import { request } from "../../src/api/api";

export async function getList() {
  return await request(`Subscribe/getList`, "GET");
}
export async function update(tag) {
  return await request(`tag/updateTag`, "POST", tag);
}
export async function add(subscribe) {
  return await request(`subscribe/addSubscibe`, "POST", subscribe);
}
export async function deleteSubscriber(id) {
  return await request(`tag/deleteTag/${id}`, "DELETE");
}
