import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));
app.use('/*', express.static('./dist/'));

app.listen(PORT, function () {
  console.log(`Web-messenger listening on port ${PORT}!`);
});
