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
      return '#fdf273ff';
    case BlockType.FOCUS:
      return '#5ce793ff';
    case BlockType.ORGANISATION:
      return '#076edeff';
    case BlockType.SELFCARE:
      return '#7a0ae4ff';
    case BlockType.SOCIAL:
      return '#f45d94ff';
    case BlockType.SPORT:
      return '#fe845bff';
  }

  return '';
}
