// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.status(200).send('Index Page')
// })
// app.get('/about', (req, res) => {
//   res.status(200).send('about Page')
// })
// app.get('/contact', (req, res) => {
//   res.status(200).send('contact Page')
// })
// app.get('*', (req, res) => {
//   res.status(404).send('404 Page')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });
const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();
const port = 3000;
// response
app.use((ctx) => {
  ctx.body = "<h1>Koa sayfasina hosgeldiniz </h1>";
});
router.get("/index", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>Index sayfasina hosgeldiniz </h1>";
});

router.get("/hakkimda", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>Hakkımda sayfasina hosgeldiniz </h1>";
});

router.get("/iletisim", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>İletişim sayfasina hosgeldiniz </h1>";
});

app.use(router.routes());

app.listen(port, () => {
  console.log(`${port} portunda sunucu basladi.`);
});
