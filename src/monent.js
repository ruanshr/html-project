var moment = require("moment");
var now = moment().format();
require("moment/min/locales.min");
moment.locale('zh-cn')
console.log(now);

console.log(moment().format("LLLL"));

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"))
console.log(moment().format("dddd"))
console.log(moment().format("MMM Do YY"))
console.log(moment().format("YYYY [escaped] YYYY"))
console.log(moment().format())
console.log(moment().format("YYYY-MM-DD"))
console.log(moment().format("YYYY-MM-DD h:mm:ss a"))
console.log(moment().format("dddd, MMMM Do YYYY"))
moment.locale()
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))