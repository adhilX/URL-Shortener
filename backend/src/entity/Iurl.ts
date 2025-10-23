export interface IUrl {
    longUrl: string;
    shortUrl: string;
    userId?: string;
    history?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}