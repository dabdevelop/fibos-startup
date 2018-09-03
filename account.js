// 在 key.json 文件里替换成你的公钥和私钥
// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2

// Fibos密钥对生成工具地址：https://fibos.xyz/

// 替换 xxxxxaccount 为你的账号
var account = "xxxxxaccount";

var FIBOS = require('./initClient.js');
var client = FIBOS();

// 查询账号余额
var rs = client.getTableRowsSync(true, "eosio.token", account, "accounts");
console.log(rs);

// // 查询账号权限、资源等信息
var rs = client.getAccountSync(account);
console.log(rs);

// // 查询BP信息
var rs = client.getProducersSync(true, '', 10);
console.log(rs);
