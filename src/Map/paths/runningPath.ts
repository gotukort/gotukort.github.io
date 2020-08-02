import markers from '../markers';
import running3 from './running3.json';
import running1 from './running1.json';
import running2 from './running2.json';

export const runningMarkersOne = markers
  .filter((marker) => marker.paths.includes('running1'))
  .map((marker) => marker.id);

export const runningMarkersTwo = markers
  .filter((marker) => marker.paths.includes('running2'))
  .map((marker) => marker.id);

export const runningMarkersThree = markers
  .filter((marker) => marker.paths.includes('running3'))
  .map((marker) => marker.id);

export { running1, running2, running3 };
