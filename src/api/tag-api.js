import { request } from "../../../Logistic_UI-main/src/api/api";


export async function getList() {
    return await request(`clients/getList`, 'GET');
}
export async function update(client) {
    return await request(`clients/update`, 'POST',client);
}
export async function add(client) {
    return await request(`clients/add`, 'POST',client);
}
export async function deleteClient(id) {
    return await request(`clients/delete/${id}`, 'GET');
}
