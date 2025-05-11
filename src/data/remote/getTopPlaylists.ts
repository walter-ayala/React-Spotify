import { handleErrors } from "../../utils";
import { APITopPlaylistsResponse } from "../models/api";
import client from "./client";

//TO DO: Made more generic
const getTopPlaylists = async () => {
  const data = await client<APITopPlaylistsResponse>('search?q=TOP50&type=playlist&limit=50');
  const result = handleErrors(data);
  return result.playlists.items;
};

export default getTopPlaylists;
