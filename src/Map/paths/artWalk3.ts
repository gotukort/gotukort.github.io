import markers from '../markers';
import artWalk3 from './artwalk3.json';

export const artWalkThreeMarkers = markers
  .filter((marker) => marker.paths.includes('artwalk3'))
  .map((marker) => marker.id);

export default artWalk3;
