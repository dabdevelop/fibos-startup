#! /bin/bash
# cleos wallet unlock
# cleos -u https://mainnet.eoscanada.com  push action eosio.token transfer '["pntvuxfbguce", "fiboscouncil", "50.0000 EOS", "orangeisfeng"]' -p pntvuxfbguce

i=1
while [ $i -le 100000000 ]
do
    sleep 1
    fibos exchange.js
    let i++
done