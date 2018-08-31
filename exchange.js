// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2
// Fibos密钥对生成工具地址：https://fibos.xyz/

var FIBOS = require("fibos.js");

var key = {
    "public-key": "FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2",
    "private-key": "5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP"
};

// true: EOS => FO  false: FO => EOS
var eosToFO = true;
var account = "orangeisfeng";
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


