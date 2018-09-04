## Fibos Startup

### 简介

[Fibos Startup](https://github.com/dabdevelop/fibos-startup) 整理了Fibos常用代码，包括创建FO账号，EOS转账到FO链以及转回来，FO-EOS互换，购买RAM，出售RAM，抵押资源，取消抵押资源，生成密钥对，同步节点，创建配置BP节点等。

### 前提

前提是安装了[Fibos](https://fibos.io/docs/guide/basic/install.md.html) 和安装了 `fibos.js`，快速安装`Fibos`：

```bash
    curl -s https://fibos.io/download/installer.sh |sh
```

在此工程目录下，安装 `fibos.js`

```bash
    npm i fibos.js
```

### 使用方法

首先，对 `key.json` 中的私钥，公钥进行简单替换。然后对相应程序的参数进行修改。

js代码运行方式为：

```bash
    fibos account.js
```