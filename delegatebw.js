// 在 key.json 文件里替换成你的公钥和私钥
// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2

// Fibos密钥对生成工具地址：https://fibos.xyz/
// 第一次使用请少量尝试，然后在浏览器查看执行结果确认：http://explorer.fibos.rocks/

// 替换 xxxxxaccount 和 toaccount 为你的账号，account 是抵押的账号，receiver 是接收账号
// stakeNET 是抵押 NET 的 FO 数量，stakeCPU 是抵押 CPU 的 FO 数量
var account = "xxxxxaccount";
var receiver = "toaccount";
var stakeNET = 1;
var stakeCPU = 10;

var FIBOS = require('./initClient.js');
var client = FIBOS();

var client = FIBOS(config);

client.transaction(tr => {
    tr.delegatebw({
      from: account,
      receiver: receiver,
      stake_net_quantity: stakeNET.toFixed(4) + ' FO@eosio',
      stake_cpu_quantity: stakeCPU.toFixed(4) + ' FO@eosio',
      transfer: 0
    })
  }).then((result) => {
      console.log(result);
  }).catch((err) => {
    console.log(err);
  });

