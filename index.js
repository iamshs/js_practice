
// for in loop

let names = [ "abi" , "labi" , "kabi" , "nabi" , "habi"] ;

for (let name in names) {
  console.log(names[name]);
} 



  // let line = input.split("\n")
  // let x = line[0].split(" ")
  // let y = line[1].split(" ")
  // let x1 = parseFloat(x[0])
  // let x2 = parseFloat(x[1])
  // let y1 = parseFloat(y[0])
  // let y2 = parseFloat(y[1])
  let x1 = 0 ;
  let x2 = 0 ;
  let y1=3;
  let y2 =4;
  const distance = Math.sqrt((x2 - x1) * 2 + (y2 - y1) * 2);
  const res = distance.toFixed(2)
  console.log(`Distance: ${res}`) 


