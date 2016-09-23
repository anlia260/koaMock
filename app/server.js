var app = require('koa')();
var cors = require('koa-cors');
var router = require('koa-router')();
var koaBody = require('koa-body')();
var mockjs = require('mockjs');
var mockData = require('./mock/mock')
    /** 跨域 */
// app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
app.listen(9527);
console.log('api server start at http://localhost:9527...');
/**
 * 获取接口数据
 * @param {String} moduleName 接口js的相对路径
 */
function GetApiDatas(moduleName) {
    var _module = require(moduleName);
    return _module.data(mockjs);
}
/** 路由 */

// router.get('/api/users', koaBody, function*() {
//     this.body = GetApiDatas('./jzdy/index/menu');
// })
mockData.forEach(function(item) {
    router.get(item.api, koaBody, function*(request) {
        this.body = item.response;
    })
})