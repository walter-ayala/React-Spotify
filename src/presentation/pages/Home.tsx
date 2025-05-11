import { Section } from "../components/molecules";
import { MainLayout } from "../components/templates";
import { useCategories, usePlaylists } from "../hooks";
import { homeStrings } from "../strings";

const Home = () => {
  const { playlists, isLoading } = usePlaylists();
  const { categories, isLoading: isLoadingCategories } = useCategories();

  return (
    <MainLayout>
      <div className="space-y-8">
        <p>{import.meta.env.VITE_ENV}</p>
        <Section
          isLoading={isLoadingCategories}
          list={categories}
          title={homeStrings.categories}
        />
        <Section
          isLoading={isLoading}
          list={playlists}
          title={homeStrings.top50}
        />
      </div>
    </MainLayout>
  );
};

export default Home;
