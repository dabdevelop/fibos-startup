// 解除CPU和NET资源抵押

// 在 key.json 文件里替换成你的公钥和私钥
// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2

// Fibos密钥对生成工具地址：https://fibos.xyz/
// 第一次使用请少量尝试，然后在浏览器查看执行结果确认：http://explorer.fibos.rocks/

// 替换 xxxxxaccount 和 toaccount 为你的账号，account 是解除抵押的账号，receiver 是接收账号
// unstakeNET 是解除抵押 NET 的 FO 数量， unstakeCPU 是解除抵押 CPU 的 FO 数量
var account = "xxxxxaccount";
var receiver = "toaccount";
var unstakeCPU = 10;
var unstakeNET = 10;

var FIBOS = require('./initClient.js');
var client = FIBOS();

client.contract('eosio').then(eosio => {
    eosio.undelegatebw(account, receiver, unstakeNET.toFixed(4) + ' FO@eosio', unstakeCPU.toFixed(4) + ' FO@eosio').then((result) => {
        console.log(result);
    }).catch((err) => {
      console.log(err);
    });
})