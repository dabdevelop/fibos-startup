var fibos = require('fibos');

fibos.config_dir = "./sync_data_Dir";
fibos.data_dir = "./sync_data_Dir";

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);

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

fibos.load("producer");

fibos.load("chain", {
 "genesis-json": "./genesis.json",
 "delete-all-blocks": true
});

fibos.load("chain_api");
fibos.load("wallet");
fibos.load("wallet_api");

fibos.start();