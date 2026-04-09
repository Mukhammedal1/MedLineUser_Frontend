export interface Appointment {
  user: number;
  doctor: number;
  appointment_time: string;
  complaint: string;
}

export interface UpdateAppointment {
  id: number;
  data: any;
}
