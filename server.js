const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHandlebars = require('express-handlebars');
const routes = require('./controllers');
const handlebars = expressHandlebars.create({});

//sets up sequalize and ports
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
    //setting up ports
const app = express();
const PORT = process.env.PORT || 3001;

//sesion storage object 
const sess = {
  secret: 'CakeIsLie',
  cookie: {
    //setting time limit on cookie to 3 minutse for testing
    maxAge: 1000*60*3
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


//uses the session storage object 
app.use(session(sess));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));//I'm not sure if I need this
app.use(require('./controller/index'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Sever is on, now listening'));
});
