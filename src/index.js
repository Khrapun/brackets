module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let c;
  let usl = new Array(bracketsConfig.length).fill(false);
    for(let k = 0; k < str.length; k++){
      for(let i = 0; i < bracketsConfig.length; i++){
        if(bracketsConfig[i][0] == str[k] && usl[i] == false){
          stack.push(str[k]);
          if(bracketsConfig[i][1] == bracketsConfig[i][0]){
            usl[i] = true;
          }
        }
        else if(bracketsConfig[i][1] == str[k]){
          c = stack.pop();
          usl[i] = false;
          if(c != bracketsConfig[i][0]){
            return false;
          }
        }
      }
    }
    if(stack.pop() != undefined){
      return false;
    }
    return true;
  }
