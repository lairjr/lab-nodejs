import express from 'express';
import group from './routes/group';
import game from './routes/game';

const app = express();

app.use('', game);
app.use('', group);

app.listen(3000, () => {
  console.log('Planned game API running at port 3000...');
});
