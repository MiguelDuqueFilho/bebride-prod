import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import Image from 'next/image';
import Favorite from '@material-ui/icons/Favorite';

const Team: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.containerContent}>
        <Box className={classes.containerText}>
          <h2 className={classes.h2}>
            <p className={classes.p}>
              Nós gostamos de pessoas e gostamos de histórias de amor...
              <Favorite />
            </p>
          </h2>
        </Box>
        <Box className={classes.containerTeam}>
          <Box className={classes.containerTeamImag}>
            <Image
              className={classes.imageTeam}
              src="/images/team-bebride.png"
              alt="team"
              layout="intrinsic"
              width="500px"
              height="350px"
            />
          </Box>
          <Box className={classes.containerTeamText}>
            <p className={classes.teamDescr}>
              Olá, somos Bruna e Tamires, unimos essa paixão e nossa amizade aos
              nossos ideais, trazendo à tona uma empresa que se posiciona e
              levanta bandeiras. E é nisso que ganhamos reconhecimento e valor.
            </p>
            <p className={classes.teamDescr}>
              Cada casal é mais do que um cliente, levamos como amigos para
              vida, quem nos segue nas redes sociais já sabe, não é difícil ver
              nossos noivos em nossos próprios lares. Gostamos de criar laços,
              proporcionar uma experiência única a quem nos escolhe para
              organizar e assessorar um dos dias mais importantes de sua vida.
            </p>
            <p className={classes.teamDescr}>
              Gratidão e amor é o que nos move. Nossa missão é fazer a diferença
              na vida das pessoas, seja as ajudando a realizar seus sonhos,
              planejando e organizando seus casamentos ou incentivando seus
              negócios, dando prioridade em indicar mulheres como fornecedoras.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
