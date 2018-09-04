// 设置 producerjson

// 在 key.json 文件里替换成你的公钥和私钥
// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2

// Fibos密钥对生成工具地址：https://fibos.xyz/

var FIBOS = require('./initClient.js');
var client = FIBOS();

var json = JSON.stringify({
  "producer_account_name": "",
  "org": {
    "candidate_name": "",
    "website": "",
    "email": "",
  },
  "nodes": [
    {
      "location": {
        "name": "",
        "country": "",
        "latitude": 1,
        "longitude": 1
      },
      "node_type": "producer",
      "p2p_endpoint": "",
      "api_endpoint": "",
      "ssl_endpoint": ""
    },
    {
      "location": {
        "name": "",
        "country": "",
        "latitude": 1,
        "longitude": 1
      },
      "node_type": "full",
      "api_endpoint": "",
      "ssl_endpoint": ""
    },
    {
      "location": {
        "name": "",
        "country": "",
        "latitude": 1,
        "longitude": 1
      },
      "node_type": "seed",
      "p2p_endpoint": "",
      "bnet_endpoint": ""
    }
  ]
});

var producerName = "fibosamerica"; //producer name
var ctx = client.contractSync("producerjson");
var result = ctx.setSync(producerName, json, {"authorization": producerName});
console.log(result);

