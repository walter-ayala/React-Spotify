import { homeStrings } from "../../strings";

const EmptyCard = () => {
  return (
    <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition duration-300 cursor-pointer">
      <div className="aspect-square bg-gray-600 rounded mb-4" />
      <p className="text-sm text-gray-400">{homeStrings.loading}</p>
    </div>
  );
};

export default EmptyCard;
