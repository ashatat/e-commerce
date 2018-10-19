const app = require('./app.js');

app.listen(app.get('port'), () => {
  console.log(`server is now rinning on port ${app.get('port')}`);
});
