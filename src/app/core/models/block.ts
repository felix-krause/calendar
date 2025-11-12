export interface TrackedBlock {
  id?: number;
  schedule: BlockType[];
  date: string;
}

export enum BlockType {
  FOCUS,
  SELFCARE,
  SPORT,
  ORGANISATION,
  SOCIAL,
  DEVELOPMENT,
}

export function getBlockColor(type: BlockType | undefined): string {
  switch (type) {
    case BlockType.DEVELOPMENT:
      return 'deepskyblue';
    case BlockType.FOCUS:
      return 'aquamarine';
    case BlockType.ORGANISATION:
      return 'gold';
    case BlockType.SELFCARE:
      return 'orangered';
    case BlockType.SOCIAL:
      return 'fuchsia';
    case BlockType.SPORT:
      return 'blueviolet';
  }

  return '';
}
