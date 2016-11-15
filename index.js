/**
 * 根据环境选择域名：主域名和静态资源域名
 * @author luoying
 */

'use strict';

// 站点列表
const SITES = {
  www: 'fxiaoke',
  fxiaoke: 'fxiaoke',
  fsceshi: 'fsceshi',
  ceshi: 'fsceshi',
  fte: 'fsfte',
  fte2: 'fsfte2',
  pte: 'fspte',
  sde: 'fssde',
  ceshi112: 'ceshi112',
  ceshi113: 'ceshi113'
};

const args = process.argv;
// get environment: sde pte fte fte2 fsceshi www
const envArg = args.find((arg) => arg.indexOf('--env') >= 0);

const ENV = envArg && envArg.split('=')[1] || 'www';
const SITE = SITES[ENV] || 'fxiaoke';
const HOST = `//www.${SITE}.com`;
const STATIC = `//${ENV}.fspage.com`;

// 获取主域名
exports.getHost = () => HOST;

// 获取静态资源域名
exports.getStaticHost = () => STATIC;
