import app from "./app";
import http from "http";
import {install} from "source-map-support";
import config from "./config";
install();

const server = http.createServer(app);

server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${server.address().port}`);
});