import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import Image from 'next/image';

import { DepositionItem } from '../../utils/sampdata';

type Props = {
  depositionItens: DepositionItem[];
};

function Depositions({ depositionItens }: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.containerContent}>
        <Box className={classes.containerTitle}>
          <h2>
            <p className={classes.p}>Depoimentos</p>
          </h2>
        </Box>
        <Box className={classes.containerItens}>
          {depositionItens.map(list => {
            return (
              <Box className={classes.containerItem} key={list.id}>
                <Box className={classes.containerCard}>
                  <Image
                    className={classes.image}
                    src={`/images/deposition_${list.id}.jpeg`}
                    alt="depositions"
                    width={600}
                    height={400}
                  />
                  <Box className={classes.cardBody}>
                    <h4 className={classes.h4Card}>
                      {list.Events[0].eventName}
                    </h4>
                    <p className={classes.pCard}>
                      {list.depositionDescription}
                    </p>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Depositions;
