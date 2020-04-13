function forLoop(array){
  for(let i = 0; i < 25; i++){
    if(i == 1){
      return "I am 1 strange loop."
    }
    else{
      return `I am ${i} strange loops.`
    }
  }
}

function whileLoop(n) {
  while(n > 0){
    --n
    return 'done'
  }
}

function incrementVariable() {
  let i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do{
    if(num == 0){
      console.log("I run once regardless")
  }
  else{
    console.log("I run once regardless")
    }
  }while(incrementVariable() < num)

}
