import { EntityState } from '@datorama/akita';
import { Appointment } from '../models/appointment';

export interface AppointmentState extends EntityState<Appointment, number> {}
