export type ActionTypeLogin = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  success: boolean;
};