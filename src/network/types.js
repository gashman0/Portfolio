export function createContactPayload({
  name,
  email,
  subject,
  message,
}) {
  return {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  };
}