import express from 'express';
import { saveSentEmail , getEmails,moveEmailsToBin,toggleStarredMails, deleteEmails } from '../controller/email-controller.js';

const routes=express.Router();

routes.post('/save',saveSentEmail);
routes.get('/emails/:type', getEmails);
routes.post('/save-draft',saveSentEmail);
routes.post('/bin',moveEmailsToBin);
routes.post('/starred',toggleStarredMails);
routes.delete('/delete',deleteEmails);

export default routes;