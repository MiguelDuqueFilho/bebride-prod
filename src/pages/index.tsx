import { GetStaticProps } from 'next';

// import {} from '../styles/home/styles';

import {
  PlanType,
  PlanTypes,
  DepositionItem,
  DepositionItens
} from '../utils/sampdata';

import LayoutSite from '../components/LayoutSite';
import BannerBody from '../components/BannerBody';
import Team from '../components/Team';
import Why from '../components/Why';
import Plans from '../components/Plans';
// import Depositions from '../components/Depositions';
// import Final from '../components/Final';
// import Footer from '../components/Footer/index';

type Props = {
  itens: PlanType[];
  depositionItens: DepositionItem[];
};

function Home({ itens, depositionItens }: Props) {
  return (
    <LayoutSite>
      <BannerBody />
      <Team />
      <Why />
      <Plans plan={itens} />
      {/* <Depositions depositionItens={depositionItens} /> */}
      {/* <Final /> */}
      {/* <Footer /> */}
    </LayoutSite>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const itens: PlanType[] = PlanTypes;
  const depositionItens: DepositionItem[] = DepositionItens;
  return { props: { itens, depositionItens }, revalidate: 60 };
};

export default Home;
