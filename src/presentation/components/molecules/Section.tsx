import Card from "../atoms/Card";

const Section = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default Section;
