import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import markers from '../Map/markers';
import { getMarkersByPath, getPathInfo } from '../Map/paths';
import { IMarker } from '../interfaces/interfaces';
import './ListView.css';
import { IPosition } from '../interfaces/interfaces';

function ListView({
  googleMap,
  pathId,
  selectedMarker,
}: {
  googleMap: any;
  pathId: string;
  selectedMarker: null | IMarker;
}) {
  const panToPos = (pos: IPosition) => {
    if (googleMap) {
      googleMap.panTo(pos);
    }
  };

  const myRef: any = useRef(null);

  let allRefs: any = useRef([]);

  useEffect(() => {
    if (myRef === null || myRef.current == null) return;
    myRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathId]);

  useEffect(() => {
    const markerIds = getMarkersByPath(pathId);
    markers
      .filter((marker, index) => {
        if (!marker || !markerIds.markers.includes(marker.id)) return false;
        return true;
      })
      .forEach((marker, index) => {
        if (marker && selectedMarker && marker.id === selectedMarker.id) {
          allRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        }
      });
  }, [selectedMarker, pathId]);

  const renderListCard = (marker: any, index: number) => {
    return (
      <div key={index} ref={(el) => (allRefs.current[index] = el)}>
        <Card className="ListView__drawer">
          <CardActionArea
            onClick={() => {
              panToPos(marker.position);
            }}
          >
            <CardMedia
              className="Drawer__image"
              image={marker.info.cardImg}
              title={marker.info.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t(`${marker.id}_title`)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {t(`${marker.id}_desc`)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {marker.info.more && (
              <Link target="_blank" href={marker.info.more}>
                {t('more')}
              </Link>
            )}
          </CardActions>
        </Card>
      </div>
    );
  };

  const renderListCardTwo = (marker: any) => {
    return (
      <div>
        <Card className="ListView__drawer">
          <CardActionArea
            onClick={() => {
              panToPos(marker.position);
            }}
          >
            <CardMedia
              className="Drawer__image"
              image={marker.info.cardImg}
              title={marker.info.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t(`${marker.id}_title`)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {t(`${marker.id}_desc`)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {marker.info.more && (
              <Link target="_blank" href={marker.info.more}>
                {t('more')}
              </Link>
            )}
          </CardActions>
        </Card>
      </div>
    );
  };

  const markerIds = getMarkersByPath(pathId);
  const { t } = useTranslation();
  return (
    <div className="ListView" ref={myRef}>
      {renderListCardTwo(getPathInfo(pathId))}
      {markers
        .filter((marker, index) => {
          if (!marker || !markerIds.markers.includes(marker.id)) return false;
          return true;
        })
        .map((marker, index) => renderListCard(marker, index))}
    </div>
  );
}

export default ListView;
