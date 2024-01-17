
const number = (buStop)=> buStop.reduce((rem,[on,off]) => rem + on - off,0)
// console.log(number([[10,0],[3,5],[5,8]])); 

