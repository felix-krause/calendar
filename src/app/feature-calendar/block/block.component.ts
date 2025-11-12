import { Component, computed, HostBinding, input, signal } from '@angular/core';
import { BlockType, getBlockColor } from '../../core/models/block';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss',
})
export class BlockComponent {
  block = input<BlockType | undefined>(undefined);
  color = computed(() => getBlockColor(this.block()));

  @HostBinding('style.background-color') get backgroundColor() {
    return this.color();
  }

  @HostBinding('style.box-shadow') get boxShadow() {
    return `${this.color()} 0px -4px 32px, ${this.color()} 0px -32px 48px`;
  }
}
