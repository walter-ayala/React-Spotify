import { useEffect, useState } from "react";
import { ICard } from "../../domain/models/types";
import { playlistsMapper } from "../../data/mappers";
import getTopPlaylists from "../../data/remote/getTopPlaylists";

const usePlaylists = () => {
  const [playlists, setPlaylists] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const onGetTopPlaylists = async () => {
    try {
      const response = await getTopPlaylists();
      setPlaylists(playlistsMapper(response));
    } catch (error) {
      console.log("Error fetching top playlists:", error);
      //TO DO: Show error message to user
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onGetTopPlaylists();
  }, []);

  return { playlists, isLoading };
};

export default usePlaylists;
