import express from "express";
import bodyParser from "body-parser";
import path from "path";
import compression from "compression"; // compresses requests
import session from "express-session";
import { SESSION_SECRET } from "./util/secrets";
// import parseurl from "parseurl";

// Controllers (route handlers)
import * as homeController from "./controllers/home";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// session cookie
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
);

// public folder
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */

app.get("/", homeController.index);

/**
 * Export express app
 */

export default app;
