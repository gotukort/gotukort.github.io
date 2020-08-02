import bike3k from './bike3k.json';
import bike10k from './bike10k.json';
import markers from '../markers';

export const bike3KMarkers = markers
  .filter((marker) => marker.paths.includes('bike1'))
  .map((marker) => marker.id);

export const bike10KMarkers = markers
  .filter((marker) => marker.paths.includes('bike2'))
  .map((marker) => marker.id);

export { bike3k, bike10k };
