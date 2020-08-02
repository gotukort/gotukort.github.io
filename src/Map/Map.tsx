import React, { useState, useEffect, Fragment, useRef } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';
import Drawer from '@material-ui/core/Drawer';
import { options, getMarkersByPath, getPathInfo } from './paths';
import markers from './markers';
import { IMarker } from '../interfaces/interfaces';
import DrawerContent from '../Drawer';
import ListView from '../ListView';
import { IPosition } from '../interfaces/interfaces';
import CurrentPositionImage from './images/currentPos.png';
import styles from './styles';
import './Map.css';

function Map({
  pathId = 'All',
  infoClick,
  userPosition,
}: {
  pathId: string;
  infoClick: boolean;
  userPosition: IPosition;
}) {
  const onClick = (marker: IMarker) => {
    setMarker(marker);
  };
  const mapRef: any = useRef(null);
  const isInitialRender = useRef(true);
  const [position] = useState({
    lat: 64.3152673,
    lng: -22.0618914,
  });
  const [selectedMarker, setMarker] = useState<null | IMarker>(null);
  const [googleMap, setMap] = useState<any>(null);
  const { t } = useTranslation();
  const zoom = 14;
  const containerStyle = {
    height: 'calc(100vh - 70px)',
    width: '100%',
  };

  useEffect(() => {
    if (window.location.hash) {
      // Remove the hash
      const id = window.location.hash.substring(1);
      const foundMarker = markers.find((marker) => {
        if (marker && marker.id) {
          return marker.id === id;
        }
        return false;
      });
      if (foundMarker) {
        setMarker(foundMarker);
      }
    }
  }, []);

  useEffect(() => {
    const pathInfo = getPathInfo(pathId);
    if (googleMap) {
      googleMap.panTo(pathInfo.position);
    }
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    setMarker(pathInfo);
  }, [infoClick, pathId, googleMap]);

  function handleLoad(map: any) {
    mapRef.current = map;
  }

  function closeMap() {
    setMarker(null);
  }
  const markerAndPathInfo = getMarkersByPath(pathId);
  const alternativeTitles = ['thorgeir', 'bowie', 'vinaminni', 'hb'];
  return (
    <Fragment>
      <div className="Map">
        <LoadScript googleMapsApiKey="AIzaSyBQfmIUDAO68X06yf2IX6M_sjQV5J-VFUE">
          <GoogleMap
            onLoad={(map: any) => {
              handleLoad(map);
              setMap(map);
            }}
            mapContainerStyle={containerStyle}
            center={position}
            zoom={zoom}
            options={{
              styles: styles as google.maps.MapTypeStyle[],
              streetViewControl: false,
              disableDefaultUI: true,
              gestureHandling: 'greedy',
            }}
          >
            {markerAndPathInfo.path.polylines.map(
              (polyline: IPosition[], i) => {
                return (
                  <Polyline
                    key={i}
                    path={polyline}
                    options={{
                      ...options,
                      strokeColor: markerAndPathInfo.path.color,
                    }}
                  />
                );
              }
            )}
            {userPosition.lat !== 0 && userPosition.lng !== 0 && (
              <Marker icon={CurrentPositionImage} position={userPosition} />
            )}
            {googleMap &&
              markers.map((marker: IMarker | undefined, index) => {
                if (marker && markerAndPathInfo.markers.includes(marker.id)) {
                  return (
                    <Marker
                      key={index}
                      onClick={() => onClick(marker)}
                      position={marker.position}
                      icon={{
                        url: marker.img,
                        scaledSize: new window.google.maps.Size(32, 32),
                        labelOrigin: new google.maps.Point(16, 40),
                      }}
                      label={{
                        fontSize: '12px',
                        color: '#616161',
                        text: alternativeTitles.includes(marker.id)
                          ? t(`${marker.id}_alternativeTitle`)
                          : t(`${marker.id}_title`),
                      }}
                    />
                  );
                }
                return null;
              })}
          </GoogleMap>
        </LoadScript>
        <Drawer
          className="Map__drawer"
          anchor="left"
          open={selectedMarker !== null}
          onClose={closeMap}
        >
          {selectedMarker && (
            <DrawerContent onClose={closeMap} marker={selectedMarker} />
          )}
        </Drawer>
      </div>
      <ListView
        googleMap={googleMap}
        selectedMarker={selectedMarker}
        pathId={pathId}
      />
    </Fragment>
  );
}

export default Map;
