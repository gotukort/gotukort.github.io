import beachwalk1 from './beachwalk1.json';
import markers from '../markers';

export const beachWalkOneMarkers = markers
  .filter((marker) => marker.paths.includes('beach1'))
  .map((marker) => marker.id);

export default beachwalk1;
