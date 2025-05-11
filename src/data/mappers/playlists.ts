import { ICard } from "../../domain/models/types";
import { Playlist } from "../models/api";

const playlistsMapper = (playlists: Array<Playlist | null>): ICard[] => {
  const result: ICard[] = [];

  if (playlists.length === 0) {
    return [];
  }

  playlists
    .filter((playlist) => playlist !== null)
    .forEach((item) => {
      result.push({
        id: item?.id ?? "",
        name: item?.name ?? "",
        image: item?.images[0]?.url ?? "",
        description: item?.description ?? "No description.",
      });
    });
  return result;
};

export default playlistsMapper;
