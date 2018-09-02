// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2
// Fibos密钥对生成工具地址：https://fibos.xyz/

var FIBOS = require('fibos.js');
// 替换 xxxprivatekey 为你的私钥
var fibos = FIBOS({
	chainId: "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
	keyProvider: "xxxprivatekey",
	httpEndpoint: "http://se-rpc.fibos.io:8870",
	logger: {
		log: null,
		error: null
	}
});
var ctx = fibos.contractSync("eosio");
// 替换xxxaccount 为你的账号名
// 第三个参数是您投票的节点，如果是多个节点，需要按照字母排序，如果字母一样，比较后一位，以此类推
var rs = ctx.voteproducerSync("xxxaccount", "", ["beedappchina", "fibos123comm", "fibosamerica", "fibosrockskr", "fibossalonbp", "universalbi1","foshenzhenbp","plasmatfibos"].sort());
console.log(rs);
