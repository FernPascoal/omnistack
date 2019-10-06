const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://node_user:BFwcJ1zHZjza9z4Y@omnistack-shard-00-00-ij1qo.mongodb.net:27017,omnistack-shard-00-01-ij1qo.mongodb.net:27017,omnistack-shard-00-02-ij1qo.mongodb.net:27017/omnistack?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);