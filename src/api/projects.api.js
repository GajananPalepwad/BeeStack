import { apiFetch } from "./client.api";

export const getProjects = () => {
  return apiFetch("/beestack/get_projects.php", {
    method: "GET",
  });
};