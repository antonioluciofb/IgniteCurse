import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'hollo' });
});

app.listen(3000, () => {
  console.log('🚀 Backend is Live');
});
