import { request } from "../../src/api/api";

export async function getList() {
  return await request(`tag/getList`, "GET");
}
export async function update(tag) {
  return await request(`tag/update`, "POST", tag);
}
export async function add(client) {
  return await request(`tag/add`, "POST", client);
}
export async function deleteClient(id) {
  return await request(`tag/delete/${id}`, "GET");
}
