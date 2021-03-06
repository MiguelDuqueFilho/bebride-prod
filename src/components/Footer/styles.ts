import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

// import imgCatLi from '/imgmodels/cat_li.png';
// import imgFootBg from '/imgmodels/foot_bg.jpg';

export const useStyles = makeStyles((theme: Itheme) => ({}));

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2rem 0;
  background-color: ${props => props.theme.color.black};
`;

export const FooterWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  width: 80%;

  @media (max-width: 870px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
  }

  @media (max-width: 570px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const WrapContainer = styled.div`
  position: relative;
  padding-top: 2rem;
  > a {
    color: ${props => props.theme.color.light};
  }

  > ul {
    list-style: none;
  }

  > ul > li {
    padding: 5px 0 5px 10px;
  }

  > ul > li > a {
    text-decoration: none;
    color: ${props => props.theme.color.light};
    &:hover {
      color: ${props => props.theme.color.linkHover};
    }
  }

  > ul > li > p {
    color: ${props => props.theme.color.light};
    > span {
      font-family: 'Times New Roman', Times, serif;
      font-size: 0.9rem;
    }
  }
`;
/* background: url(${imgCatLi}) no-repeat left; */

export const Foot = styled.div`
  font-size: 14px;

  color: ${props => props.theme.color.text};
  text-transform: uppercase;
  position: relative;
`;
/* background: url(${imgFootBg}) repeat; */

export const FootWrap = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 35px 0;

  > a {
    color: ${props => props.theme.color.light};
  }
`;

export const FooterTitle = styled.h3`
  color: ${props => props.theme.color.light};
  font-size: 24px;
  padding: 0 0 18px 0;
  display: block;
  > a {
    color: ${props => props.theme.color.light};
  }
  > a:hover {
    text-decoration: none;
  }
`;

export const Clear = styled.div`
  clear: both;
  line-height: 0;
  height: 0;
  font-size: 1px;
`;
