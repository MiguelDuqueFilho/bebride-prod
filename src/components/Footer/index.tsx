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
      <Container>
        <FooterWrap>
          <WrapContainer>
            <FooterTitle>Conheça-nos</FooterTitle>
            <ul>
              <li>
                <p title="Informações Corporativas">Informações Corporativas</p>
              </li>
              <li>
                <p>Razão Social</p>
              </li>
              <li>
                <p title="CNPJ">
                  CNPJ: <span>00.000.000/0001-00</span>
                </p>
              </li>
            </ul>
          </WrapContainer>
          <WrapContainer>
            <FooterTitle>Redes Sociais</FooterTitle>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/bebridecasamentos"
                  title="Facebook"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bebridecasamentos"
                  title="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bebride_" title="Twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a title="Whatsapp" onClick={onWhatsapp}>
                  Whatsapp
                </a>
              </li>
            </ul>
          </WrapContainer>
          <WrapContainer>
            <FooterTitle>Informações</FooterTitle>
            <ul>
              <li>
                <a href="#" title="Contato">
                  Contato
                </a>
              </li>
              <li>
                <Link href="/about">
                  <a>Sobre</a>
                </Link>
              </li>
              <li>
                <a href="#" title="Login">
                  Login
                </a>
              </li>
              <li>
                <a href="#" title="Recuperar a Senha">
                  Recuperar a Senha
                </a>
              </li>
              <li>
                <a href="#" title="Área do Cliente">
                  Área do Cliente
                </a>
              </li>
            </ul>
          </WrapContainer>
          <Clear></Clear>
        </FooterWrap>
      </Container>
      <Foot>
        <FootWrap>
          MDuque &copy; 2021
          {/* <a href="#">MDUQUE</a> */}
        </FootWrap>
      </Foot>
    </footer>
  );
};

export default Footer;
