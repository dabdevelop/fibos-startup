var fibos = require('fibos');

fibos.load("http");
fibos.load("chain");
fibos.load("net");
fibos.load("chain_api");
fibos.load("history_api");
fibos.load("producer", {
    'producer-name': 'eosio',
    'enable-stale-production': true
});
fibos.config_dir = "fibos_config_dir/";
fibos.data_dir = "fibos_data_dir/";

fibos.start();

