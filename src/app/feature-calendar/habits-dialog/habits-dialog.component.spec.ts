import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsDialogComponent } from './habits-dialog.component';

describe('HabitsDialogComponent', () => {
  let component: HabitsDialogComponent;
  let fixture: ComponentFixture<HabitsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
