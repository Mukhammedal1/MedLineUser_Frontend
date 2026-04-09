export interface SignInData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  surname: string;
  email: string;
  password: string;
  phone_number: string;
  image: number | null;
}
