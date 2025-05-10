import Section from "../components/molecules/Section";
import MainLayout from "../components/templates/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
          <Section title="Recently played" />
          <Section title="Made For You" />
          <Section title="Your top mixes" />
        </div>
    </MainLayout>
  );
};

export default Home;
