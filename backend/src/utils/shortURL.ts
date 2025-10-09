import shortid from 'shortid';
export default function generateShortURL(): string {
    const shortId = shortid.generate()
    return shortId;
}
