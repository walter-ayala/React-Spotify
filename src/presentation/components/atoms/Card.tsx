import { ICard } from "../../../domain/models/types";

const Card = ({ data }: { data: ICard }) => {
  return (
    <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] group hover:bg-accent transition-all duration-300 cursor-pointer">
      <img
        src={data.image ?? ""}
        alt={data.name ?? ""}
        className="rounded mb-4"
      />
      <h3 className="text-white font-semibold line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
        {data.name ?? ""}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
        {data.description ?? "No description."}
      </p>
    </div>
  );
};

export default Card;
