import React, { Suspense, useState, useEffect } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { initGA, GApageView } from './index';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Drawer from '@material-ui/core/Drawer';
import Header from './Header';
import Map from './Map';
import PathSelection from './PathSelection';
import IntroScreen from './IntroScreen';
import './App.css';

const MAX_STEPS = 3;

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

interface GeoLocation {
  coords: {
    latitude: number;
    longitude: number;
  };
}

function App() {
  const [isOpen, changeOnOpen] = useState(false);
  const [infoClick, onInfoClick] = useState(false);
  const [userPosition, setUserPosition] = useState({ lat: 0, lng: 0 });
  const [subSelection, setSubSelection] = useState<string | undefined>();
  const [introScreenStep, onChangeStep] = useState(0);
  const [pathId, changePathId] = useState('all');
  const { t } = useTranslation();

  function errorUserPos() {
    console.log('Sorry, no position available.');
  }

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
    };
    initGA();
    GApageView();
    function successUserPos(position: GeoLocation) {
      const { latitude, longitude } = position.coords;
      // position is the same, no need to update
      setUserPosition({ lat: latitude, lng: longitude });
    }
    navigator.geolocation.watchPosition(successUserPos, errorUserPos, options);
  }, []);

  const setSelectedPath = (selectedPathId: string) => {
    GApageView(pathId);
    changePathId(selectedPathId);
    changeOnOpen(false);
    setTimeout(() => {
      setSubSelection(undefined);
    }, 500);
  };
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        {introScreenStep <= MAX_STEPS && (
          <IntroScreen
            step={introScreenStep}
            onChangeStep={(close: boolean) => {
              if (close) {
                onChangeStep(MAX_STEPS + 1);
              } else {
                onChangeStep(introScreenStep + 1);
              }
            }}
          />
        )}
        <Header />
        <Map
          userPosition={userPosition}
          pathId={pathId}
          infoClick={infoClick}
        />
        <div
          className={classNames('App__pathInfo', {
            'App__pathInfo--highlight': introScreenStep === 2,
          })}
        >
          <IconButton color="inherit" onClick={() => onInfoClick(!infoClick)}>
            <InfoIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div
          className={classNames('App__icon', {
            'App__icon--highlight': introScreenStep === 1,
          })}
          onClick={() => {
            if (!isOpen) {
              changeOnOpen(true);
            }
          }}
        >
          <IconButton color="inherit">
            <AddCircleIcon fontSize="inherit" />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={isOpen}
            onClose={() => {
              changeOnOpen(false);
              setSubSelection(undefined);
            }}
          >
            <PathSelection
              subSelection={subSelection}
              setSelectedPath={setSelectedPath}
              t={t}
              setSubSelection={setSubSelection}
            />
          </Drawer>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
