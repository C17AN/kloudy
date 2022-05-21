import express from "express";
import k8s from "@kubernetes/client-node";
import clusterRouter from "./controllers/cluster.js";
import namespaceRouter from "./controllers/namespace.js";
import cors from "cors"
import bodyParser from "body-parser"

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


export const kc = new k8s.KubeConfig();

app.listen(8080, () => {
  console.log("listening on 8080");
});

app.use("/k8s/cluster", clusterRouter);
app.use("/k8s/namespace", namespaceRouter);
