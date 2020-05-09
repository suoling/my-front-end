[证书生成命令](https://gist.github.com/Jokcy/5e73fd6b2a9b21c142ba2b1995150808)

证书生成命令

- openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout localhost-privkey.pem -out localhost-cert.pem