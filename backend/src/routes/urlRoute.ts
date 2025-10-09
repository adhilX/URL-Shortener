import express from 'express';
import { getShortURL, redirectURL } from '../controller/urlController';
import { tokenChecker } from '../middleware/authMiddleware';

const urlRoute =  express.Router(); 


urlRoute.post('/create-shorturl', tokenChecker, getShortURL);

urlRoute.get('/:shortId', redirectURL);

export default urlRoute;