import { Play, SkipBack, SkipForward, Shuffle, Repeat } from "lucide-react";
import { TrackProgress } from "../atoms";
import { homeStrings } from "../../strings";

const FooterPlayer = () => {
  return (
    <div className="h-24 bg-[#181818] border-t border-gray-700 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-500 rounded-md" />
        <div>
          <p className="text-sm font-semibold">{homeStrings.currentSong}</p>
          <p className="text-xs text-gray-400">{homeStrings.artist}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <Shuffle size={16} />
          <SkipBack size={20} />
          <Play className="bg-white text-black p-1 rounded-full" size={28} />
          <SkipForward size={20} />
          <Repeat size={16} />
        </div>
        <TrackProgress />
      </div>

      <div className="w-32 h-2 bg-gray-500 rounded-full" />
    </div>
  );
};

export default FooterPlayer;
