// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2
// Fibos密钥对生成工具地址：https://fibos.xyz/

var fibos = require('fibos');
var fs = require("fs");
// 替换成你的账号，公钥和私钥
var config = {
	"producer-name": "fibosamerica",
	"public-key": "FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2",
	"private-key": "5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP"
};


console.notice("正在启动FIBOS name:", config["producer-name"]);
fibos.config_dir = config["producer-name"] + "_Dir";
fibos.data_dir = config["producer-name"] + "_Dir";

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);

if (fs.exists(fibos.data_dir) || fs.exists(fibos.config_dir)) {
	console.warn("data_dir or config_dir is exists");
	process.exit(-1);
}

fibos.load("http", {
    "http-server-address": "0.0.0.0:8870",
    "access-control-allow-origin": "*",
    "http-validate-host": false
});

fibos.load("net", {
	"p2p-listen-endpoint": "0.0.0.0:9870",
    "p2p-peer-address": [
        "se-p2p.fibos.io:9870",
        "sl-p2p.fibos.io:9870",
        "to-p2p.fibos.io:9870",
        "ca-p2p.fibos.io:9870",
        "ln-p2p.fibos.io:9870",
        "va-p2p.fibos.io:9870",
        "fibos-p2p.slowmist.io:9870",  // slowmistioio
        "fibos.qubitfund.com:9870",  // williamfouvy
        "p2p.mainnet.fibos.me:80",  // fibtothemoon 
        "p2p.eoschina.me:10300",  // fotothemooon 
        "p2p.foshenzhenbp.com:9877",  // foshenzhenbp
        "seed-mainnet.fibscan.io:9103",  // fibscandotio
        "p2p-mainnet.fibos123.com:9977"  // fibos123comm
    ] 
});

fibos.load("producer", {
	'producer-name': config["producer-name"],
	'enable-stale-production': true,
	'private-key': JSON.stringify([config["public-key"], config["private-key"]])
});

fibos.load("chain", {
    "genesis-json": "./genesis.json",
    "delete-all-blocks": true
});

fibos.load("chain");
fibos.load("chain_api");
fibos.load("wallet");
fibos.load("wallet_api");


fibos.start();





