import React from 'react';
import { useStyles } from './styles';

import Box from '@material-ui/core/Box';

import Favorite from '@material-ui/icons/Favorite';
import ViewList from '@material-ui/icons/ViewList';
import AccountTree from '@material-ui/icons/AccountTree';
import Loyalty from '@material-ui/icons/Loyalty';
import ImportContacts from '@material-ui/icons/ImportContacts';
import LocalOffer from '@material-ui/icons/LocalOffer';

const Why: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.containerWhyTitle}>
        <h2 className={classes.h2}>
          <p className={classes.p}>
            Por que nos contratar? <Favorite />
          </p>
        </h2>

        <span className={classes.span}>
          (MOTIVOS PARA TER A GENTE COMO MELHORES AMIGAS, OPS... ASSESSORAS!)
        </span>
      </Box>
      <Box className={classes.containerContent}>
        <Box className={classes.containerWhyText}>
          <p className={classes.containerWhyDescr}>
            <ViewList className={classes.icon} />
            Nós cuidamos de cada detalhe do seu Grande Dia como se fosse o
            nosso, com muito amor e respeito pela história do casal. Ouvimos
            cada ideia e trazemos juntas o seu sonho para a realidade.
          </p>
          <p className={classes.containerWhyDescr}>
            <AccountTree className={classes.icon} />
            Casamento é toda a trajetória, não somente um único dia e queremos
            que vocês aproveitem cada etapa dos preparativos. Por isso,
            orientamos passo a passo para que o casal se sinta amparado e
            seguro.
          </p>

          <p className={classes.containerWhyDescr}>
            <Loyalty className={classes.icon} />
            Amamos o que fazemos, por isso sempre estamos disponíveis para
            atender e ouvir nosso casal, inclusive papear sobre os detalhes é
            uma das coisas que mais gostamos de fazer!
          </p>
          <p className={classes.containerWhyDescr}>
            <ImportContacts className={classes.icon} />É importante dizer que
            damos prioridade à indicação de mulheres como fornecedores do seu
            Grande Dia. Uma das nossas missões é fortalecer o empreendedorismo
            feminino.
          </p>
          <p className={classes.containerWhyDescr}>
            <LocalOffer className={classes.icon} />
            Conseguimos melhores preços junto aos fornecedores.
          </p>
        </Box>
        <Box className={classes.containerTeam2Imag}>
          <img
            className={classes.imageTeam2}
            src="/images/team-adesivo.png"
            alt="team"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Why;
