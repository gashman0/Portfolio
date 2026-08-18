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

export function createHirePayload({
  name,
  email,
  phone,
  plan,
  projectType,
  projectDescription,
  budget
}){
  return{
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    plan: plan.trim(),
    projectType: projectType.trim(),
    projectDescription: projectDescription.trim(),
    budget: budget.trim(),
  }
}