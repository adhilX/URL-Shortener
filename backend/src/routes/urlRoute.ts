import express from 'express';
import { getShortURL, redirectURL } from '../controller/urlController';

const urlRoute =  express.Router(); 


urlRoute.post('/create-shorturl', getShortURL);

urlRoute.get('/:shortId', redirectURL);

export default urlRoute;