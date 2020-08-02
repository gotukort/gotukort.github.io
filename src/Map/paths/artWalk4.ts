import markers from '../markers';
import artWalk4 from './artwalk4.json';

export const artWalkFourMarkers = markers
  .filter((marker) => marker.paths.includes('artwalk4'))
  .map((marker) => marker.id);

export default artWalk4;
