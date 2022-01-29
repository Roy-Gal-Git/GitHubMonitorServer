import http from "./httpService";

export function getPulls() {
  return http.get("http://localhost:8080/api/pull-requests");
}
