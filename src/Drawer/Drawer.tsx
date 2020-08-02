import React from 'react';
import { useTranslation } from 'react-i18next';
import ClipBoard from 'clipboard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { IMarker } from '../interfaces/interfaces';
import './Drawer.css';

export default function Drawer({
  marker,
  onClose,
}: {
  marker: IMarker;
  onClose: Function;
}) {
  const { t } = useTranslation();

  new ClipBoard('.MuiButton-label');
  return (
    <Card className="Drawer">
      <CardActionArea>
        <div className="Drawer__closeButton" onClick={() => onClose()}>
          <CloseIcon
            className="Drawer__closeButton"
            onClick={() => onClose()}
            fontSize="inherit"
          />
        </div>
        <CardMedia
          className="Drawer__image"
          image={marker.info.cardImg}
          title="Contemplative Reptile"
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
            {t('learn_more')}
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
