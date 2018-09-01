// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2

// Fibos密钥对生成工具地址：https://fibos.xyz/
// 第一次使用请少量尝试，然后在浏览器查看执行结果确认：http://explorer.fibos.rocks/

var FIBOS = require("fibos.js");

// 替换成你的公钥和私钥
var key = {
    "public-key": "FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2",
    "private-key": "5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP"
};

// eosToFO: true: EOS => FO  false: FO => EOS
var eosToFO = true;
// 替换 fromaccount 为你的账号，amount 是 FO 或者 EOS 的数量
var account = "fromaccount";
var amount = 1;

var rpc = ["http://se-rpc.fibos.io:8870",
            "http://sl-rpc.fibos.io:8870",
            "http://to-rpc.fibos.io:8870",
            "http://ca-rpc.fibos.io:8870",
            "http://ln-rpc.fibos.io:8870",
            "http://va-rpc.fibos.io:8870",
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var config = {
    chainId:"6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    keyProvider:key["private-key"],
    httpEndpoint:rpc[getRandomInt(0, 5)],
    expireInSeconds: 60,
	broadcast: true,
	verbose: false,
	sign: true
}

var client = FIBOS(config);

var rs = client.getTableRowsSync(true, "eosio.token", account, "accounts");
console.log(rs);




if(rs.rows.length > 0){
    var ctx = client.contractSync("eosio.token");
    var result;
    if(eosToFO){
        // EOS => FO
        result = ctx.exchangeSync(account, amount.toFixed(4) + " EOS@eosio", "0.0000 FO@eosio", "exchange EOS to FO", {
            authorization: account
        });
    } else {
        // FO => EOS
        result = ctx.exchangeSync(account, amount.toFixed(4) + " FO@eosio", "0.0000 EOS@eosio", "exchange FO to EOS", {
            authorization: account
        });
    }
    console.log(result);
}


