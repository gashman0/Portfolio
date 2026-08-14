import api from "../api/axios";
import routes from "./routes";
import { createContactPayload } from "./types";

export const contact = async (formData) => {
    const payload = createContactPayload(formData);
    const response = await api.post(
        routes.portfolio.contact, payload,
    );

    return response?.data;
};
