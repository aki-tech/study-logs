import Header from "../components/lp/Header"
import Hero from "../components/lp/Hero"
import Features from "../components/lp/Features"
import { useUser } from "../context/userContext";

const Home = () => {
  const user = useUser();
  return (
    <>
      <Header />
      <Hero />;
      <Features />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      noLayout: true,
    },
  };
};