import { Injectable } from '@angular/core';
import { EntityStore, QueryEntity, StoreConfig } from '@datorama/akita';
import { Observable } from 'rxjs';
import { EntityState } from '@datorama/akita';
import { TrackedBlock } from '../models/block';

export interface TrackedBlocksState extends EntityState<TrackedBlock, number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'trackedBlocks' })
export class TrackedBlocksStore extends EntityStore<TrackedBlocksState> {
  constructor() {
    super();
  }
}

@Injectable({ providedIn: 'root' })
export class TrackedBlocksQuery extends QueryEntity<
  TrackedBlocksState,
  TrackedBlock
> {
  trackedBlocks$: Observable<TrackedBlock[]>;

  constructor(protected override store: TrackedBlocksStore) {
    super(store);
    this.trackedBlocks$ = this.selectAll();
  }
}
