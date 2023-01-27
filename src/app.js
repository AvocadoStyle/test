const express = require('express')
const planetRouter = require('./routes/planets/planets.router')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(cors())
app.use(planetRouter)




// app.set('port', process.env.PORT || 4000);

// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json()); //to send json requests inside body

// app.use(userRoutes);
// app.use(categoriesRoutes);
// app.use(itemRoutes);
// app.use(orderRoutes);
// app.use(logginRoutes);



module.exports = app;

