import UrlRepo from "../repo/urlRepo";
import { UrlService } from "../services/urlService";

const urlRepo = new UrlRepo();
export const urlService = new UrlService(urlRepo);