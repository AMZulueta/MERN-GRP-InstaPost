const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 8000;

require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./config/mongoose.config');
require('./routes/user.routes')(app);
// require('./routes/profile.routes')(app);
require('./routes/post.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`))