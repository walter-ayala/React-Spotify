export interface IAuth {
  access_token: string | null;
  token_type: string | null;
  expires_in: number | null;
}

export interface ICard {
  id: string;
  name: string;
  image: string;
  description: string;
}