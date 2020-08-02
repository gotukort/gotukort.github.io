import beachwalk3 from './beachwalk3.json';
import markers from '../markers';

export const beachWalkThreeMarkers = markers
  .filter((marker) => marker.paths.includes('beach3'))
  .map((marker) => marker.id);

export default beachwalk3;
