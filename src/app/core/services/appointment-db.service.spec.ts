import { TestBed } from '@angular/core/testing';
import { AppointmentDbService } from './appointment-db.service';

describe('AppointmentDbService', () => {
  let service: AppointmentDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
