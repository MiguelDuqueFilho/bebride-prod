import React from 'react';
import { useStyles } from './styles';

import Box from '@material-ui/core/Box';

import Type from '../Type';
import { PlanType } from '../../utils/sampdata';

import Favorite from '@material-ui/icons/Favorite';
import WhatsApp from '@material-ui/icons/WhatsApp';

type Props = {
  plan: PlanType[];
};

function Plans({ plan }: Props) {
  const classes = useStyles();

  function onWhatsapp() {
    const celular_bebride = '5511940768615';
    const urlWhatsapp = `https://wa.me/${celular_bebride}`;
    window.location.assign(urlWhatsapp);
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.containerContent}>
        <Box className={classes.ContainerTitle}>
          <h2 className={classes.h2}>
            <p className={classes.p}>
              Noiva tranquila é noiva organizada. <Favorite />
            </p>
          </h2>
          <span className={classes.span}>
            Cada dia da organização do seu casamento deve ser celebrado.
          </span>
        </Box>
        <Box className={classes.containerItens}>
          {plan.map((item: PlanType) => (
            <Type key={item.id} item={item} />
          ))}
        </Box>
        <Box className={classes.containerButton}>
          <a
            className={classes.buttonWhatsApp}
            type="button"
            onClick={onWhatsapp}
          >
            <WhatsApp className={classes.svg} />
            #vamosjuntas?
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default Plans;
