import markers from './markers';
import { running3, running2, running1 } from './paths/runningPath';
import { ALL_MARKERS } from './markers';
import artWalk1, { artWalkOneMarkers } from './paths/artWalk1';
import artWalk2, { artWalkTwoMarkers } from './paths/artWalk2';
import artWalk3, { artWalkThreeMarkers } from './paths/artWalk3';
import artWalk4, { artWalkFourMarkers } from './paths/artWalk4';
import beachwalk1, { beachWalkOneMarkers } from './paths/beachwalk1';
import beachwalk2, { beachWalkTwoMarkers } from './paths/beachwalk2';
import beachwalk3, { beachWalkThreeMarkers } from './paths/beachwalk3';
import { bike3k, bike10k, bike3KMarkers, bike10KMarkers } from './paths/bikes';

const options = {
  strokeColor: '#BAA390',
  strokeOpacity: 1,
  strokeWeight: 4,
  fillColor: '#BAA390',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

function getPathInfoById(pathID: string) {
  let title = '',
    desc = '',
    cardImg = '',
    position;
  switch (pathID) {
    case 'art_one':
      cardImg = '/akranes/large/listganga1_optimized.png';
      position = { lat: 64.308762, lng: -22.094601 };
      break;
    case 'art_two':
      cardImg = '/akranes/large/listganga2_optimized.png';
      position = { lat: 64.320822, lng: -22.076756 };
      break;
    case 'art_three':
      cardImg = '/akranes/large/listganga3_optimized.png';
      position = { lat: 64.322397, lng: -22.066692 };
      break;
    case 'art_four':
      cardImg = '/akranes/large/listganga4_optimized.png';
      position = { lat: 64.319392, lng: -22.046 };
      break;
    case 'running_three':
      cardImg = '/akranes/large/hlaup_optimized.png';
      position = { lat: 64.317597, lng: -22.054151 };
      break;
    case 'beach_one':
      cardImg = '/akranes/large/beachwalk1_optimized.png';
      position = { lat: 64.326161, lng: -22.070155 };
      break;
    case 'beach_two':
      cardImg = '/akranes/large/beachwalk2_optimized.png';
      position = { lat: 64.32114, lng: -22.084875 };
      break;
    case 'beach_three':
      cardImg = '/akranes/large/beachwalk3_optimized.png';
      position = { lat: 64.316961, lng: -22.060202 };
      break;
    case 'running_one':
      cardImg = '/akranes/large/beachwalk3_optimized.png';
      position = { lat: 64.319626, lng: -22.08087 };
      break;
    case 'running_two':
      cardImg = '/akranes/large/beachwalk3_optimized.png';
      position = { lat: 64.318615, lng: -22.052767 };
      break;
    case 'bike_one':
      cardImg = '/akranes/large/bike1_optimized.png';
      position = { lat: 64.3152673, lng: -22.0618914 };
      break;
    case 'bike_two':
      cardImg = '/akranes/large/bike2_optimized.png';
      position = { lat: 64.319856, lng: -22.043744 };
      break;
    default:
      cardImg = '/akranes/large/akranes_optimized.png';
      position = { lat: 64.3152673, lng: -22.0618914 };
      break;
  }
  return {
    id: pathID,
    position: position,
    info: {
      title: title,
      desc: desc,
      cardImg: cardImg,
      more: '',
    },
    img: '',
    paths: [],
  };
}

export function getPathInfo(pathId: string) {
  return getPathInfoById(pathId);
}

const allMarkers = markers
  .filter((marker) => ALL_MARKERS.includes(marker.id))
  .map((marker) => marker.id);

function getMarkersByPath(pathId: string) {
  switch (pathId) {
    case 'running_one':
      return {
        markers: [],
        path: {
          color: '#005a9c',
          polylines: [running1],
        },
      };
    case 'running_two':
      return {
        markers: [],
        path: {
          color: '#005a9c',
          polylines: [running2],
        },
      };
    case 'running_three':
      return {
        markers: [],
        path: {
          color: '#005a9c',
          polylines: [running3],
        },
      };
    case 'art_one':
      return {
        markers: artWalkOneMarkers,
        path: {
          color: '#005a9c',
          polylines: [artWalk1],
        },
      };
    case 'art_two':
      return {
        markers: artWalkTwoMarkers,
        path: {
          color: '#005a9c',
          polylines: [artWalk2],
        },
      };

    case 'art_three':
      return {
        markers: artWalkThreeMarkers,
        path: {
          color: '#005a9c',
          polylines: [artWalk3],
        },
      };
    case 'art_four':
      return {
        markers: artWalkFourMarkers,
        path: {
          color: '#005a9c',
          polylines: [artWalk4],
        },
      };
    case 'beach_one':
      return {
        markers: beachWalkOneMarkers,
        path: {
          color: '#005a9c',
          polylines: [beachwalk1],
        },
      };
    case 'beach_two':
      return {
        markers: beachWalkTwoMarkers,
        path: {
          color: '#005a9c',
          polylines: [beachwalk2],
        },
      };

    case 'beach_three':
      return {
        markers: beachWalkThreeMarkers,
        path: {
          color: '#005a9c',
          polylines: [beachwalk3],
        },
      };
    case 'bike_one':
      return {
        markers: bike3KMarkers,
        path: {
          color: '#005a9c',
          polylines: [bike3k],
        },
      };
    case 'bike_two':
      return {
        markers: bike10KMarkers,
        path: {
          color: '#005a9c',
          polylines: [bike10k],
        },
      };
    default:
      return {
        markers: allMarkers,
        path: {
          color: 'white',
          polylines: [],
        },
      };
  }
}

export { options, getMarkersByPath };
