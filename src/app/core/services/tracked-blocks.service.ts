import { Injectable } from '@angular/core';
import { first, map, Observable, take } from 'rxjs';
import { TrackedBlock } from '../models/block';
import {
  TrackedBlocksStore,
  TrackedBlocksQuery,
} from '../state/tracked-blocks.state';
import { TrackedBlocksDbService } from './tracked-blocks-db.service';

@Injectable({
  providedIn: 'root',
})
export class TrackedBlocksService {
  trackedBlocks$: Observable<TrackedBlock[]>;

  constructor(
    private trackedBlocksStore: TrackedBlocksStore,
    private trackedBlocksDbService: TrackedBlocksDbService,
    private trackedBlocksQuery: TrackedBlocksQuery,
  ) {
    this.trackedBlocks$ = this.trackedBlocksQuery.trackedBlocks$;
    this.load();
  }

  async addOrUpdate(block: TrackedBlock) {
    const updatedBlocks =
      await this.trackedBlocksDbService.createOrPutTrackedBlock(block);
    this.trackedBlocksStore.set(updatedBlocks);
  }

  async load() {
    const trackedBlocks = await this.trackedBlocksDbService.getTrackedBlocks();
    this.trackedBlocksStore.set(trackedBlocks);
  }

  getTrackedBlockByDate(date: string): Observable<TrackedBlock> {
    return this.trackedBlocksQuery
      .selectAll({
        filterBy: (entity) => entity.date === date,
      })
      .pipe(map((x) => x[0]));
  }
}
