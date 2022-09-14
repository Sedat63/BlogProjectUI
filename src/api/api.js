import { Alert, message } from "antd";
import { HttpStatusCode } from "../helper/enums";

/**
 * @param uri {string} `/api/`den sonraki istek adresi
 * @param method {'GET' | 'POST' | 'PATCH' | 'DELETE'} request metot tipi
 */

export async function request(uri, method, body) {
  debugger;
  let token = localStorage.getItem("token");
  return await fetch(`https://localhost:44363/${uri}`, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Bearer " + (token || ""),
    },
    body: body ? JSON.stringify(body) : undefined,
  })
    .then((response) => handleResponse(response))
    .catch((error) => {
      message.error(error);
      console.error("Bir hata oluştu");
      throw error;
    });
}

//Excel vs gibi dosyaları export eder.
export async function downloadFile(uri, method, body, fileName = "") {
  let token = localStorage.getItem("token");

  return await fetch(`https://localhost:44366/${uri}`, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Bearer " + (token || ""),
    },
    body: body ? JSON.stringify(body) : undefined,
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a); // we need to append the element to the dom -> firefox fallback
      a.click();
      a.remove();
    })
    .catch((error) => {
      message.error(error);
      console.error("Bir hata oluştu");
      throw error;
    });
}

const handleResponse = (response) => {
  switch (response.status) {
    case HttpStatusCode.Ok:
      return response.json();
    case HttpStatusCode.Unauthorized:
      Alert("Yetkisiz Giriş");
      break;
    case HttpStatusCode.NotFound:
      Alert("SAYFA BULUNAMADİ");
      break;
    case HttpStatusCode.BadRequest:
      Alert("BAD REQUEST");
      break;
  }
};
