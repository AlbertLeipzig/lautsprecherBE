import './config.js';
import './db-connect.js';
import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import actualArticleRoute from './routes/actualArticleRoute.js';
import historyArticleRoute from './routes/historyArticleRoute.js';
import bandRoute from './routes/bandRoute.js';
import musicianRoute from './routes/musicianRoute.js';
import concertRoute from './routes/concertRoute.js';
import musicbusinessRoute from './routes/musicbusinessRoute.js';
import teamRoute from './routes/teamRoute.js';
import veranstaltungsortRoute from './routes/veranstaltungsortRoute.js';
import subscriberRoute from './routes/subscriberRoute.js';
import messageRoute from './routes/messageRoute.js';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.FRONTEND_PORT,
    credentials: true,
  })
);

app.use(morgan('tiny'));
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/actualarticle', actualArticleRoute);
app.use('/api/historyarticle', historyArticleRoute);
app.use('/api/subscribers', subscriberRoute);
app.use('/api/musician', musicianRoute);
app.use('/api/band', bandRoute);
app.use('/api/concert', concertRoute);
app.use('/api/veranstaltungsort', veranstaltungsortRoute);
app.use('/api/musicbusiness', musicbusinessRoute);
app.use('/api/team', teamRoute);
app.use('/api/messages', messageRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
