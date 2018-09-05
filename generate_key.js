// 产生公私钥对

var FIBOS = require("fibos.js");
FIBOS.modules.ecc.randomKey().then((prikey) => {
    var pubkey = FIBOS.modules.ecc.privateToPublic(prikey); //公钥
    var key = {
        "public-key": pubkey,
        "private-key": prikey
    };
    console.log(JSON.stringify(key));
}).catch((err) => {
    console.log(err);
});