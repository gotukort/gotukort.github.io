import React from 'react';
import Button from '@material-ui/core/Button';

import { useTranslation } from 'react-i18next';
import './IntroScreen.css';

function IntroScreen({
  step,
  onChangeStep,
}: {
  step: number;
  onChangeStep: Function;
}) {
  const { t } = useTranslation();
  const getStepText = () => {
    return t(`intoscreen_${step}`);
  };
  return (
    <div className="IntroScreen">
      <div className="IntroScreen__content">
        <div className="IntroScreen__text">{getStepText()}</div>
        <div className="IntroScreen__buttonContainer">
          <Button
            variant="contained"
            className="IntroScreen__button IntroScreen__button--close"
            onClick={() => onChangeStep(true)}
            color="secondary"
          >
            {t('close')}
          </Button>
          <Button
            variant="contained"
            className="IntroScreen__button IntroScreen__button--next"
            onClick={() => onChangeStep()}
            color="primary"
          >
            {t('next')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default IntroScreen;
