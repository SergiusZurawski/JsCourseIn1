import createError from "http-errors";
import express from "express";
import logger from "morgan";
import cors from "cors";
import config from "./config";
import api from "./api";

const app = express();
app.use(cors({
    exposedHeaders: config.corsHeaders
}));

app.use(logger('dev'));
app.use(express.json());

app.use('/api', api());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send(`Error ${res.statusCode}`);
});

module.exports = app;
