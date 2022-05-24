import express from "express";
import k8s from "@kubernetes/client-node";
// TODO: 라우터 부분 하나로 묶어서 임포트하기
import contextRouter from "./controllers/context.js";
import clusterRouter from "./controllers/cluster.js";
import nodeRouter from "./controllers/node.js";
import deploymentRouter from "./controllers/deployment.js";
import podRouter from "./controllers/pod.js";
import serviceRouter from "./controllers/service.js";
import namespaceRouter from "./controllers/namespace.js";
import cors from "cors"
import bodyParser from "body-parser"

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

export const kc = new k8s.KubeConfig();
export const metricsClient = new k8s.Metrics(kc);

app.listen(8080, () => {
  console.log("listening on 8080");
});

app.use("/k8s/context", contextRouter);
app.use("/k8s/cluster", clusterRouter);
app.use("/k8s/namespace", namespaceRouter);
app.use("/k8s/deployment", deploymentRouter);
app.use("/k8s/service", serviceRouter);
app.use("/k8s/node", nodeRouter);
app.use("/k8s/pod", podRouter);
