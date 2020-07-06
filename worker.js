/**
 * 不能操作dom、bom
 * 适合大量计算
 */
let totle = 0
for(let i = 0; i <= 100000000; i++ ){
  totle += i
}
self.postMessage({totle: totle})