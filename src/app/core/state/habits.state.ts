import { EntityState } from '@datorama/akita';
import { Habit } from '../models/habit';

export interface HabitsState extends EntityState<Habit, number> {}
