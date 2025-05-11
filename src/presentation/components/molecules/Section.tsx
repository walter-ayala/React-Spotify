import { ICard } from "../../../domain/models/types";
import { Card, EmptyCard } from "../atoms";

interface ISection {
  title: string;
  list: ICard[];
  isLoading?: boolean;
}

const Section = ({ title, list, isLoading = false }: ISection) => {
  if (isLoading) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <EmptyCard key={i} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {list.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Section;
