import markers from '../markers';
import artwalk2 from './artwalk2.json';

export const artWalkTwoMarkers = markers
  .filter((marker) => marker.paths.includes('artwalk2'))
  .map((marker) => marker.id);

export default artwalk2;
