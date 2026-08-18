import { contact, hire } from ".";
import { useMutation } from "@tanstack/react-query";
// import { createContactPayload } from "./types";

export const useContact = () => {
  return useMutation({
    mutationFn: (payload) => contact(payload),
    onSuccess: () => {
      console.log("Form submitted");
    },
    onError: () => {
      console.log("A problem occured");
    },
  });
};

export const useHire = () => {
  return useMutation({
    mutationFn: (payload) => hire(payload),
    onSuccess: () => {
      console.log("Form submitted");
    },
    onError: (error) => {
      console.log("🔥 HIRE MUTATION FAILED");
      console.log("Error value:", error);
      console.log("Error type:", typeof error);
      console.log("Error JSON:", JSON.stringify(error, null, 2));
    },
  });
};
