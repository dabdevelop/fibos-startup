client.contract('eosio').then(eosio => {
    eosio.undelegatebw("orangeisfeng", "orangeisfeng", '0.0000 FO@eosio', '260000.0000 FO@eosio').then((result) => {
        console.log(result);
    }).catch((err) => {
      console.log(err);
    });
})