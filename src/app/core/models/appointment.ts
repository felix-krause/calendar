export interface AppointmentDialogData {
  title: string;
  description?: string;
}

export interface Appointment extends AppointmentDialogData {
  id?: number;
  date: string;
}
