var FIBOS = require("fibos.js");

// 在 key.json 文件里替换成你的公钥和私钥
var key = require("./key.json");
var rpc = require("./rpc.json");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initClient() {
    return FIBOS({
        chainId:"6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
        keyProvider:key["private-key"],
        httpEndpoint:rpc[getRandomInt(0, rpc.length - 1)],
        expireInSeconds: 60,
        broadcast: true,
        verbose: false,
        sign: true
    });
}

module.exports = initClient;

