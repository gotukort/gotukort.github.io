import beachwalk2 from './beachwalk2.json';
import markers from '../markers';

export const beachWalkTwoMarkers = markers
  .filter((marker) => marker.paths.includes('beach2'))
  .map((marker) => marker.id);

export default beachwalk2;
