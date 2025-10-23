import express from 'express';
import { getShortURL, redirectURL, getUserHistory } from '../controller/urlController';
import { tokenChecker } from '../middleware/authMiddleware';
import { API_ROUTES } from '../constants/routes';

const urlRoute =  express.Router(); 

// Specific routes first (before parameterized routes)
urlRoute.post(API_ROUTES.URL.CREATE_SHORT_URL, tokenChecker, getShortURL);
urlRoute.get(API_ROUTES.URL.USER_HISTORY, tokenChecker, getUserHistory);

// Parameterized routes last (this catches any remaining GET requests)
urlRoute.get(API_ROUTES.URL.REDIRECT, redirectURL);

export default urlRoute;