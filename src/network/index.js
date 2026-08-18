import api from "../api/axios";
import routes from "./routes";
import { createContactPayload, createHirePayload } from "./types";

export const contact = async (formData) => {
    const payload = createContactPayload(formData);
    const response = await api.post(
        routes.portfolio.contact, payload,
    );

    return response?.data;
};

export const hire = async (formData) => {
    const payload = createHirePayload(formData);
    const response = await api.post(
        routes.portfolio.hire, payload,
    );

    return response?.data;
}
