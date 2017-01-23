function calc(string){
  var numArr = [],
    opeArr = [];

  for (var i = 0, len = string.length; i < len; i++){
    if(Number(string[i]) || Number(string[i] === 0)){
      numArr.push(string[i])
    }
    if(string[i] === '(' || string[i] === '*' || string[i] === '/'){
      opeArr.push(string[i])
    }
    if(string[i] === '+' || string[i] === '-'){
      level1()
      opeArr.push(string[i])
    }
    if(string[i] === ')'){
      level1(true)
    }
  }

console.log(numArr, opeArr)

level1(true)

console.log(numArr, opeArr, numArr[numArr.length - 1])
  return numArr.pop()

  function level1(flag){
    var opeLen = opeArr.length;
    var j;
    for(j = opeLen - 1; j >= 0; j--){
      var stash;
      if(opeArr[j] === '*'){
        stash = numArr[j] * numArr[j+1]
        numArr.pop()
        numArr.pop()
        opeArr.pop()
        numArr.push(stash)
      }
      if(opeArr[j] === '/'){
        stash = numArr[j] / numArr[j+1]
        numArr.pop()
        numArr.pop()
        opeArr.pop()
        numArr.push(stash)
      }
      flag && level2()
    }
    function level2(){
      if(opeArr[j] === '+'){
        stash = Number(numArr[j]) + Number(numArr[j+1])
        numArr.pop()
        numArr.pop()
        opeArr.pop()
        numArr.push(stash)
      }
      if(opeArr[j] === '-'){
        stash = numArr[j] - numArr[j+1]
        numArr.pop()
        numArr.pop()
        opeArr.pop()
        numArr.push(stash)
      }
    }
  }

}
calc('(1+1)-2*1-2')
