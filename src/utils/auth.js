export const NIRMA_EMAIL_DOMAIN = "@nirmauni.ac.in";

export const NIRMA_ONLY_MESSAGE =
  "Only Nirma University email addresses (@nirmauni.ac.in) are allowed. Please sign in with your Nirma ID.";

export const isNirmaEmail = (email) => {
  if (!email) return false;
  return email.toLowerCase().endsWith(NIRMA_EMAIL_DOMAIN);
};
