import { request } from "../../src/api/api";

export async function getList() {
    return await request(`category/getList`, "GET");
  }
  export async function updateCategory(category) {
    return await request(`category/updateCategory`, "POST", category);
  }
  export async function addCategory(category) {
    return await request(`category/addCategory`, "POST", category);
  }
  export async function deleteSocialMedia(id) {
    return await request(`category/deleteCategory/${id}`, "DELETE");
  }
  