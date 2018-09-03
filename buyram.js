// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2

// Fibos密钥对生成工具地址：https://fibos.xyz/
// 第一次使用请少量尝试，然后在浏览器查看执行结果确认：http://explorer.fibos.rocks/

// 在 key.json 文件里替换成你的公钥和私钥
// 替换 xxxxxaccount 为你的账号，bytes 为购买内存的字节数量
var account = "xxxxxaccount";
var bytes = 4 * 1024;

var FIBOS = require('./initClient.js');
var client = FIBOS();

client.transaction(tr => {
    tr.buyrambytes({
      payer: account,
      receiver: account,
      bytes: bytes
    })
  }).then((result) => {
      console.log(result);
  }).catch((err) => {
    console.log(err);
  });

