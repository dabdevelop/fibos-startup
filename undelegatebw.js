client.contract('eosio').then(eosio => {
    eosio.undelegatebw("orangeisfeng", "orangeisfeng", '10.0000 FO@eosio', '10.0000 FO@eosio').then((result) => {
        console.log(result);
    }).catch((err) => {
      console.log(err);
    });
})