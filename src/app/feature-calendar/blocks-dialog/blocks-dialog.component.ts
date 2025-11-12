import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  BlockType,
  getBlockColor,
  TrackedBlock,
} from '../../core/models/block';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-blocks-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    TranslateModule,
    MatCheckboxModule,
    CommonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './blocks-dialog.component.html',
  styleUrl: './blocks-dialog.component.scss',
})
export class BlocksDialogComponent {
  blockTypes = Object.keys(BlockType).filter((k) => !isNaN(Number(k)));
  schedule: string[];

  constructor(
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TrackedBlock,
  ) {
    this.schedule = data.schedule.map((s) => s.toString());

    while (this.schedule.length < 1) {
      this.schedule.push('-1');
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const newSchedule = this.schedule
      .map((s) => this.blockToBlockType(s))
      .filter((k) => k !== undefined);
    this.dialogRef.close({ ...this.data, schedule: newSchedule });
  }

  private blockToBlockType(block: string): BlockType | undefined {
    if (block === '0') return BlockType.FOCUS;
    if (block === '1') return BlockType.SELFCARE;
    if (block === '2') return BlockType.SPORT;
    if (block === '3') return BlockType.ORGANISATION;
    if (block === '4') return BlockType.SOCIAL;
    if (block === '5') return BlockType.DEVELOPMENT;
    return undefined;
  }

  public getBlockColorInternal(type: string) {
    return getBlockColor(this.blockToBlockType(type));
  }

  public addBlock() {
    this.schedule.push('-1');
  }
}
