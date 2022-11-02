// imports
import express from 'express';
const app = express();
import helmet from 'helmet';
import compression from 'compression';
import mongoSanitize from 'express-mongo-sanitize';
import dotenv from 'dotenv';
import xss from 'xss-clean';
import connectDB from './db/connect.js';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html');
});

dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

//error handling
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 7000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening in port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
