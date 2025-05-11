export interface APIResponse<T> {
  data: T | null;
  code: number;
  success: boolean;
  error: unknown;
}

export interface APITopPlaylistsResponse {
  playlists: Playlists;
}

export interface Playlists {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
  items: Array<Playlist | null>;
}

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
  primary_color: null;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  url: string;
  height: number | null;
  width: number | null;
}

export interface Owner {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

export interface Tracks {
  href: string;
  total: number;
}

export interface APICategoriesResponse {
  categories: Categories;
}

export interface Categories {
  href: string;
  items: Category[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface Category {
  href: string;
  id: string;
  icons: Icon[];
  name: string;
}

export interface Icon {
  height: number;
  url: string;
  width: number;
}
