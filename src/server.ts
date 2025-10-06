import express from 'express';
import { userRoutes } from './routes/user.routes';
import { taskRoutes } from './routes/task.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.get('/', (req, res) => {
  res.send('API is running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});