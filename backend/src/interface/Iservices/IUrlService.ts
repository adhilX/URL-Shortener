export interface IUrlService {
    createShortUrl(longUrl: string): Promise<{ shortUrl: string; isNew: boolean }>;
    getLongUrl(shortUrl: string): Promise<string | null>;
}