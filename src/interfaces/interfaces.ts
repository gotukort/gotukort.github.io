export interface IPosition {
  lat: number;
  lng: number;
}

interface IInfo {
  title: string;
  desc: string;
  cardImg: string;
  share?: string;
  more?: string;
}

export interface IMarker {
  id: string;
  position: IPosition;
  info: IInfo;
  img: string;
  paths: string[];
}
