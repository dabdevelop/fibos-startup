// 创建新账号，购买抵押资源

// 在 key.json 文件里替换成你的公钥和私钥
// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2

// Fibos密钥对生成工具地址：https://fibos.xyz/

// 替换 xxxxxaccount 为你的账号，替换 newaccount 为你准备创建的账号
// ** 替换 owner 和 active 两个地方的 FO6jr4vHBXzZmDuPLEFrNHdS8ZiqgNeABQ76vkBZvEnVUHPuyrYt 为 newaccount 的公钥
// bytes 为购买内存的字节数量
// stakeNET 是抵押 NET 的 FO 数量，stakeCPU 是抵押 CPU 的 FO 数量
var creator = "xxxxxaccount";
var name = "newaccount";
var owner = "FO6jr4vHBXzZmDuPLEFrNHdS8ZiqgNeABQ76vkBZvEnVUHPuyrYt";
var active = "FO6jr4vHBXzZmDuPLEFrNHdS8ZiqgNeABQ76vkBZvEnVUHPuyrYt";
var bytes = 4 * 1024;
var stakeNET = 1;
var stakeCPU = 10;

var FIBOS = require('./initClient.js');
var client = FIBOS();

client.transaction(tr => {
    tr.newaccount({
        creator: creator,
        name: name,
        owner: owner,
        active: active
      })

    tr.buyrambytes({
      payer: creator,
      receiver: name,
      bytes: bytes
    })
    
    tr.delegatebw({
      from: creator,
      receiver: name,
      stake_net_quantity: stakeNET.toFixed(4) + ' FO@eosio',
      stake_cpu_quantity: stakeCPU.toFixed(4) + ' FO@eosio',
      transfer: 0
    })
  }).then((result) => {
      console.log(result);
  }).catch((err) => {
    console.log(err);
  });

