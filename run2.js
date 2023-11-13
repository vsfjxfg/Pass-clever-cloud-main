#!/bin/sh
UUID=${UUID:-'e691aeed-abd8-4c9c-b8f8-f381de120366'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
