# env-host

> 根据环境选择域名：主域名和静态资源域名

```js
// npm run product -- --env=fsceshi
const envHost = require('@tools/env-host');
// 部署静态资源的主机
// 支持带域名和不带域名
const STATIC_HOST = envHost.getStaticHost();
```
