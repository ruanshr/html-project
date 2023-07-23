const dayjs = require('dayjs')
const zhCn = require('dayjs/locale/zh-cn')
const customParseFormat = require('dayjs/plugin/customParseFormat')

dayjs.extend(customParseFormat)
const formatChineseYear = (option, dayjsClass, dayjsFactory) => {

  // overriding existing API
  // e.g. extend dayjs().format()
  const oldFormat = dayjsClass.prototype.format
  dayjsClass.prototype.format = function(template) {
    // original format result
    if('UUUU'.match(template)) {
       
    }
    const result = oldFormat.bind(this)(template)
    
    // return modified result
    console.log(`${result}===>>>>`)
    return result;
  }
}

// dayjs.extend(formatChineseYear);
console.log(dayjs().locale('zh-cn').format('Y-yyyy-YYYY'));


