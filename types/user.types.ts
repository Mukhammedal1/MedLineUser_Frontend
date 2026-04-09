export interface User {
  fullname: string;
  email: string;
  phone_number: string;
  image: string;
}

export interface UpdateUser {
  id: number;
  data: any;
}
