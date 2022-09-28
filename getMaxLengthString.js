const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if(arrayOfString === null || arrayOfString === undefined){
    return undefined
  }
  let arr = []
  let arr_length = arrayOfString[0].length
    for(let i = 0;i < arrayOfString.length; i++){
      if(arrayOfString[i].length > arr_length){
        arr_length = arrayOfString[i].length
      }
    }
    for(let i =0;i < arrayOfString.length; i++){
      if(arrayOfString[i].length === arr_length){
        arr.push(arrayOfString[i])
      }
    }
  return arr;
}
module.exports = getMaxLengthString
