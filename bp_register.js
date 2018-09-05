// BP注册

// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2
// Fibos密钥对生成工具地址：https://fibos.xyz/

var FIBOS = require('fibos.js');
var config = {
	"chainId": "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
	"producer-name": "fibosamerica",
	"public-key": "FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2",
	"private-key": "5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP",
	"httpEndpoint": "http://se-rpc.fibos.io:8870",
	"url": "http://fibos.xyz"
};

var fibos = FIBOS({
	chainId: config["chainId"],
	keyProvider: config["private-key"],
	httpEndpoint: config["httpEndpoint"],
	logger: {
		log: null,
		error: null
	}
});

var ctx = fibos.contractSync("eosio");

var rs = ctx.regproducerSync(config["producer-name"], config["public-key"], config["url"], 1);

console.log(rs);