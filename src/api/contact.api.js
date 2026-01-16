// src/api/contact.api.js

import { apiFetch } from "./client.api";

export const sendGetInTouch = ({ name, email, subject, message }) => {
  return apiFetch("/beestack/get_in_touch.php", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  });
};