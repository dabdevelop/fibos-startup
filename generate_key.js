var FIBOS = require("fibos.js");
FIBOS.modules.ecc.randomKey().then((prikey) => {
    var pubkey = FIBOS.modules.ecc.privateToPublic(prikey); //公钥
    console.log(prikey)
    console.log(pubkey)
}).catch((err) => {
    console.log(err);
});