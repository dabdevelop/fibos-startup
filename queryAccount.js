// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2
// Fibos密钥对生成工具地址：https://fibos.xyz/

var FIBOS = require('./initClient.js')
// new FIBOS client
var fibos = FIBOS("5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP");

var user = fibos.getAccountSync("hello");
console.warn('---- user ----', user);

