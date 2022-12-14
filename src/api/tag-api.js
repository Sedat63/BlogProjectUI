import { request } from "../../src/api/api";

export async function getList() {
  return await request(`tag/getList`, "GET");
}
export async function update(tag) {
  return await request(`tag/updateTag`, "POST", tag);
}
export async function add(tag) {
  return await request(`tag/addTag`, "POST", tag);
}
export async function deleteTag(id) {
  return await request(`tag/deleteTag/${id}`, "DELETE");
}
