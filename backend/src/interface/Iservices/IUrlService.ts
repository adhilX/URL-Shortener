export interface IUrlService {
    createShortUrl(longUrl: string): Promise<{ shortUrl: string; isNew: boolean }>;
}