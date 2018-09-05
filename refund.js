// 领回解除抵押的FO

// 在 key.json 文件里替换成你的公钥和私钥
// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2

// Fibos密钥对生成工具地址：https://fibos.xyz/
// 第一次使用请少量尝试，然后在浏览器查看执行结果确认：http://explorer.fibos.rocks/

// 解除抵押三天后可以手动领回FO，替换 xxxxxaccount 为你的账号
var account = "xxxxxaccount";

var FIBOS = require('./initClient.js');
var client = FIBOS();

client.contract('eosio').then(eosio => {
    eosio.refund(account).then((result) => {
        console.log(result);
    }).catch((err) => {
      console.log(err);
    });
})