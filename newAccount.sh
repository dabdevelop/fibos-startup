#! /bin/bash

# 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
# 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2
# Fibos密钥对生成工具地址：https://fibos.xyz/

curl -l -H "Content-type: application/json" -X POST -d '{"account":"xxx","pubkey":"xxx"}' http://tunnel.fibos.io/1.0/app/token/create 
curl -l -H "Content-type: application/json" -X POST -d '{"account":"fibosamerica","pubkey":"FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2"}' http://tunnel.fibos.io/1.0/app/token/create