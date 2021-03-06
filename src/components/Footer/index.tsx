import Link from 'next/link';
import Box from '@material-ui/core/Box';
import { useStyles } from './styles';

const Footer: React.FC = () => {
  const classes = useStyles();

  function onWhatsapp() {
    const celular_bebride = '5511940768615';
    const urlWhatsapp = `https://wa.me/${celular_bebride}`;
    window.location.assign(urlWhatsapp);
  }
  return (
    <footer>
      <Box className={classes.container}>
        <Box className={classes.footerWrap}>
          <Box className={classes.wrapContainer}>
            <h3 className={classes.footerTitle}>Conheça-nos</h3>
            <ul className={classes.ul}>
              <li className={classes.li}>
                <a className={classes.liP} title="Informações Corporativas">
                  Informações Corporativas
                </a>
              </li>
              <li className={classes.li}>
                <a className={classes.liP}>Razão Social</a>
              </li>
              <li className={classes.li}>
                <a className={classes.liP} title="CNPJ">
                  CNPJ: <span>00.000.000/0001-00</span>
                </a>
              </li>
            </ul>
          </Box>
          <Box className={classes.wrapContainer}>
            <Box className={classes.footerTitle}>Redes Sociais</Box>
            <ul className={classes.ul}>
              <li className={classes.li}>
                <a
                  className={classes.liA}
                  href="https://www.facebook.com/bebridecasamentos"
                  title="Facebook"
                >
                  Facebook
                </a>
              </li>
              <li className={classes.li}>
                <a
                  className={classes.liA}
                  href="https://www.instagram.com/bebridecasamentos"
                  title="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li className={classes.li}>
                <a
                  className={classes.liA}
                  href="https://twitter.com/bebride_"
                  title="Twitter"
                >
                  Twitter
                </a>
              </li>
              <li className={classes.li}>
                <a
                  className={classes.liA}
                  title="Whatsapp"
                  onClick={onWhatsapp}
                >
                  Whatsapp
                </a>
              </li>
            </ul>
          </Box>
          <Box className={classes.wrapContainer}>
            <Box className={classes.footerTitle}>Informações</Box>
            <ul className={classes.ul}>
              <li className={classes.li}>
                <a className={classes.liA} href="#" title="Contato">
                  Contato
                </a>
              </li>
              <li className={classes.li}>
                <Link href="/about">
                  <a className={classes.liA}>Sobre</a>
                </Link>
              </li>
              <li className={classes.li}>
                <a className={classes.liA} href="#" title="Login">
                  Login
                </a>
              </li>
              <li className={classes.li}>
                <a className={classes.liA} href="#" title="Recuperar a Senha">
                  Recuperar a Senha
                </a>
              </li>
              <li className={classes.li}>
                <a className={classes.liA} href="#" title="Área do Cliente">
                  Área do Cliente
                </a>
              </li>
            </ul>
          </Box>
          <Box className={classes.clear}></Box>
        </Box>
      </Box>
      <Box className={classes.foot}>
        <Box className={classes.footWrap}>
          MDuque &copy; 2021
          {/* <a href="#">MDUQUE</a> */}
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
