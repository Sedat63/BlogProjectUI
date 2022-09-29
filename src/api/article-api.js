import { request, uploadFile } from "../../src/api/api";

export async function getListForAdmin(filter) {
  return await request(`article/getList`, "POST",filter);
}
export async function update(article) {
  return await request(`article/addUpdate`, "POST", article);
}
export async function add(article) {
  return await uploadFile(`article/addArticle`, "POST", article);
}
export async function deleteArticle(id) {
  return await request(`article/deleteArticle/${id}`, "DELETE");
}


export async function getListForWeb(filter) {
  const urlParams = new URLSearchParams(filter).toString()
  return await request(`article/getListForWeb?${urlParams}`, "GET");
}
