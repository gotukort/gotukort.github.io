import React from 'react';
import List from '@material-ui/core/List';
import BrushIcon from '@material-ui/icons/Brush';
import ListItem from '@material-ui/core/ListItem';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

interface IPathSelection {
  subSelection?: string;
  setSelectedPath: Function;
  setSubSelection: Function;
  t: Function;
}

function PathSelection({
  subSelection,
  setSelectedPath,
  t,
  setSubSelection,
}: IPathSelection) {
  if (subSelection === 'art') {
    return (
      <div>
        <List>
          <ListItem button onClick={() => setSelectedPath('art_one')}>
            <ListItemIcon>
              <BrushIcon />
            </ListItemIcon>
            <ListItemText primary={t('art_one_title')} />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('art_two')}>
            <ListItemIcon>
              <BrushIcon />
            </ListItemIcon>
            <ListItemText primary={t('art_two_title')} />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('art_three')}>
            <ListItemIcon>
              <BrushIcon />
            </ListItemIcon>
            <ListItemText primary={t('art_three_title')} />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('art_four')}>
            <ListItemIcon>
              <BrushIcon />
            </ListItemIcon>
            <ListItemText primary={t('art_four_title')} />
          </ListItem>
        </List>
      </div>
    );
  }
  if (subSelection === 'beach') {
    return (
      <div>
        <List>
          <ListItem button onClick={() => setSelectedPath('beach_one')}>
            <ListItemIcon>
              <BeachAccessIcon />
            </ListItemIcon>
            <ListItemText primary={t('beach_one_title')} />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('beach_two')}>
            <ListItemIcon>
              <BeachAccessIcon />
            </ListItemIcon>
            <ListItemText primary={t('beach_two_title')} />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('beach_three')}>
            <ListItemIcon>
              <BeachAccessIcon />
            </ListItemIcon>
            <ListItemText primary={t('beach_three_title')} />
          </ListItem>
        </List>
      </div>
    );
  }
  if (subSelection === 'running') {
    return (
      <div>
        <List>
          <ListItem button onClick={() => setSelectedPath('running_one')}>
            <ListItemIcon>
              <DirectionsRunIcon />
            </ListItemIcon>
            <ListItemText primary={t('running_one_title')} />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('running_two')}>
            <ListItemIcon>
              <DirectionsRunIcon />
            </ListItemIcon>
            <ListItemText primary={t('running_two_title')} />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('running_three')}>
            <ListItemIcon>
              <DirectionsRunIcon />
            </ListItemIcon>
            <ListItemText primary={t('running_three_title')} />
          </ListItem>
        </List>
      </div>
    );
  }
  if (subSelection === 'bike') {
    return (
      <div>
        <List>
          <ListItem button onClick={() => setSelectedPath('bike_one')}>
            <ListItemIcon>
              <DirectionsBikeIcon />
            </ListItemIcon>
            <ListItemText primary={t('bike_one_title')} />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('bike_two')}>
            <ListItemIcon>
              <DirectionsBikeIcon />
            </ListItemIcon>
            <ListItemText primary={t('bike_two_title')} />
          </ListItem>
        </List>
      </div>
    );
  }
  return (
    <div>
      <List>
        <ListItem button onClick={() => setSelectedPath('all')}>
          <ListItemIcon>
            <PhotoCameraIcon />
          </ListItemIcon>
          <ListItemText primary={t('all_title')} />
        </ListItem>
        <ListItem button onClick={() => setSubSelection('art')}>
          <ListItemIcon>
            <BrushIcon />
          </ListItemIcon>
          <ListItemText primary={t('art_title')} />
        </ListItem>
        <ListItem button onClick={() => setSubSelection('running')}>
          <ListItemIcon>
            <DirectionsRunIcon />
          </ListItemIcon>
          <ListItemText primary={t('running_title')} />
        </ListItem>
        <ListItem button onClick={() => setSubSelection('beach')}>
          <ListItemIcon>
            <BeachAccessIcon />
          </ListItemIcon>
          <ListItemText primary={t('beach_title')} />
        </ListItem>
        <ListItem button onClick={() => setSubSelection('bike')}>
          <ListItemIcon>
            <DirectionsBikeIcon />
          </ListItemIcon>
          <ListItemText primary={t('bike_title')} />
        </ListItem>
      </List>
    </div>
  );
}

export default PathSelection;
