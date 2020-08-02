import { getCircleImage, getLargeImage } from './imageUtils';
import { IMarker } from '../interfaces/interfaces';
import rawJson from './rawJson.json';

export const ALL_MARKERS = [
  'gudlaug',
  'breidin',
  'elinarsaeti',
  'gardar',
  'akrafjall',
  'sementsstrompur',
  'langisandur',
  'akratorg',
  'gardalundur',
];

const markers = rawJson.map((marker) => {
  if (marker.lat) {
    const markerInfo = {
      id: marker.id,
      position: { lat: Number(marker.lat), lng: Number(marker.lng) },
      info: {
        cardImg: getLargeImage(marker.id),
        more: '',
      },
      img: getCircleImage(marker.id),
      paths: marker.paths.split(',').map((marker) => marker.trim()),
    };
    if (marker.more) {
      markerInfo.info.more = marker.more;
    }
    return markerInfo as IMarker;
  }
  return {
    id: '',
    position: { lat: 0, lng: 0 },
    info: {
      title: '',
      desc: '',
      cardImg: '',
      more: '',
    },
    img: '',
    paths: [],
  };
});

export default markers;
