// 给投票用户分红

// 在 key.json 文件里替换成你的公钥和私钥
// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2

// Fibos密钥对生成工具地址：https://fibos.xyz/
// 第一次使用请少量尝试，然后在浏览器查看执行结果确认：http://explorer.fibos.rocks/

// 替换 xxxxxaccount 为你的账号
// 替换 reward 为分红总量
var account = "xxxxxaccount";
var reward = 7500;

var FIBOS = require('./initClient.js');
var client = FIBOS();

function transfer(from, to, quant, cb){
    var value = quant.toFixed(4) + " FO@eosio";
    var memo = "返还 " + from + " 抵押奖励，感谢您的支持！";
    client.contract('eosio.token').then(token => {
        token.transfer(from, to, value, memo).then((result) => {
            console.log("o", from, to, value);
        }).catch((err) => {
            console.warn("x", from, to, value);
        });
    });
    cb();
}

var http = require('http');  
  
var querystring = require('querystring');  
  
var data = {  
    producer: account
};

var content = querystring.stringify(data);  
  
var options = {  
    hostname: 'explorer.fibos.rocks',  
    port: 80,  
    path: '/api/voter?' + content,  
    method: 'GET'  
};  

function add(a, b) {
    return {staked: parseInt(a.staked) + parseInt(b.staked)};
}

var req = http.request(options, function (res) {  
    res.setEncoding('utf8');  
    var staked = "";
    res.on('data', function (chunk) {  
        staked += chunk;
        try{
            var stakedObject = JSON.parse(staked);
            var i = 0;
            var base = stakedObject.reduce(add, {staked: 0}).staked;
            var send = function(){
                var from = account;
                var to = stakedObject[i].owner;
                var quant = stakedObject[i].staked / base * reward;
                transfer(from, to, quant, function(){
                    i ++;
                    if(i >= stakedObject.length) return;
                    send();
                });
            };
            send();
        }catch(e){
            // console.log(e);
        }
    });  
});  
  
req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  
  
req.end();

