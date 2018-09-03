// 在 key.json 文件里替换成你的公钥和私钥
// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2
// Fibos密钥对生成工具地址：https://fibos.xyz/

var FIBOS = require('./initClient.js')
// 替换成你的私钥
var client = FIBOS();

// 替换 xxxxxaccount 为你的账号
var account = "xxxxxaccount";
var user = client.getAccountSync(account);
console.warn('---- user ----', user);

