// 在 key.json 文件里替换成你的公钥和私钥
// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2

// Fibos密钥对生成工具地址：https://fibos.xyz/

var FIBOS = require('./initClient.js');
var client = FIBOS();

var ctx = client.contractSync("eosio");
// 替换 xxxxxaccount 为你的账号名
// 第三个参数是您投票的节点，如果是多个节点，需要按照字母排序，如果字母一样，比较后一位，以此类推
var rs = ctx.voteproducerSync("xxxxxaccount", "", ["beedappchina", "fibos123comm", "fibosamerica", "fibosrockskr", "fibossalonbp", "universalbi1","foshenzhenbp","plasmatfibos", "liuqiangdong"].sort());
console.log(rs);
