import markers from '../markers';
import artWalk1 from './artwalk1.json';

export const artWalkOneMarkers = markers
  .filter((marker) => marker.paths.includes('artwalk1'))
  .map((marker) => marker.id);

export default artWalk1;
