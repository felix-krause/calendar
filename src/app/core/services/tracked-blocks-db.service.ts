import { inject, Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { TrackedBlock } from '../models/block';

@Injectable({
  providedIn: 'root',
})
export class TrackedBlocksDbService {
  private db = inject(DatabaseService);

  async createOrPutTrackedBlock(block: TrackedBlock) {
    if (!block.id) {
      block.id = await this.db.trackedBlocks.add(block);
    } else {
      await this.db.trackedBlocks.put(block);
    }

    return await this.db.trackedBlocks.toArray();
  }

  async getTrackedBlocks() {
    return await this.db.trackedBlocks.toArray();
  }
}
