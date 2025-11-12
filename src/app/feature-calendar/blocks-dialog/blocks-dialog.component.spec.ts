import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksDialogComponent } from './blocks-dialog.component';

describe('BlocksDialogComponent', () => {
  let component: BlocksDialogComponent;
  let fixture: ComponentFixture<BlocksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocksDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
