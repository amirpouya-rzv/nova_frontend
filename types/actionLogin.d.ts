export type ActionTypeLogin = {
  errors: {
    email?: string[];
    password?: string[];
    general?: string[];
  };
  success: boolean;
};