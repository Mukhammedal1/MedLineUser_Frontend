export interface Doctor {
  fullname: string;
  spec_description: string;
  email: string;
  phone_number: string;
  image: string;
  working_start_time: string;
  working_end_time: string;
  appointment_duration: number;
  consultation_fee: number;
  room_number: number;
  experience: number;
}

export interface UpdateDoctor {
  id: number;
  data: any;
}
