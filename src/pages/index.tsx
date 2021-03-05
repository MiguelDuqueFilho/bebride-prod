import { GetStaticProps } from 'next';

// import {} from '../styles/home/styles';
import { PlanTypes, DepositionItens } from '../utils/sampdata';
import { PlanType, DepositionItem } from '../interfaces';
import LayoutSite from '../components/LayoutSite';
import BannerBody from '../components/BannerBody';
import Team from '../components/Team';
import Why from '../components/Why';
// import Plans from '../components/Plans';
// import Depositions from '../components/Depositions';
// import Final from '../components/Final';
// import Footer from '../components/Footer/index';

type Props = {
  items: PlanType[];
  depositionItens: DepositionItem[];
};

function Home({ items, depositionItens }: Props) {
  return (
    <LayoutSite>
      <BannerBody />
      <Team />
      <Why />
      {/* <Plans items={items} /> */}
      {/* <Depositions depositionItens={depositionItens} /> */}
      {/* <Final /> */}
      {/* <Footer /> */}
    </LayoutSite>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const items: PlanType[] = PlanTypes;
  const depositionItens: DepositionItem[] = DepositionItens;
  return { props: { items, depositionItens }, revalidate: 60 };
};

export default Home;
