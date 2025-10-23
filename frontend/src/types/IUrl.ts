export interface IUrl {
  _id?: string;
  longUrl: string;
  shortUrl: string;
  userId?: string;
  history: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IUrlHistory {
  _id: string;
  longUrl: string;
  shortUrl: string;
  history: string[];
  createdAt: string;
  updatedAt: string;
}
