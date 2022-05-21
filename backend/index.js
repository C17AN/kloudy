import express from "express"
import k8s from '@kubernetes/client-node';
const app = express()
const kc = new k8s.KubeConfig();

app.listen(8080, () => {
  console.log("listening on 8080")
})

app.get('/k8s/contexts', (req, response) => {
  kc.loadFromDefault();
  const res = kc.getContexts()

  const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
  k8sApi.listNamespace().then((res) => {
    // console.log(res.body)
    response.json(res.body)
  })
  k8sApi.listNamespacedPod('default').then((res) => {
    // console.log(res.body);
    // response.json(res.body)
  });
})


