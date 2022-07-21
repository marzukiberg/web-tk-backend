const { default: mongoose } = require('mongoose');

const apiURL =
  'mongodb://mongo:x4ys2s69ARx5VUi7T9lX@containers-us-west-70.railway.app:5820';

mongoose
  .connect(apiURL, {
    dbName: 'web-tek',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('db connected'))
  .catch((err) => console.log('failed to connect', err));
