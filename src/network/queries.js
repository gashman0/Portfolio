import { contact } from ".";
import { useMutation } from "@tanstack/react-query";
// import { createContactPayload } from "./types";

export const useContact = () => {
    return useMutation({
        mutationFn: (payload) => contact(payload),
        onSuccess: () => {
            console.log("Form submitted")
        },
        onError: () => {
            console.log("A problem occured");
        }
    })
}