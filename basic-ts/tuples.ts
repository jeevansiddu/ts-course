 //used when we need to maintain the order

 let user: [string , number , boolean];
 user = ["jeevan",15,true]; //allowed
//  user = [15,false,"jeevan"]; // not allowed as order is changed

type colorScheme = [number,number,number];

let rgb:colorScheme = [255,255,255]; //accepts only three args

// let rgb2:colorScheme =[255,255,255,0.5]; //throws error for the 4th argument
let rgb1 : colorScheme = [255,0,255];
// rgb1[2]=255

//one of the areas where typescript is broken
rgb1.push(5); 
rgb1.push(5);
rgb1.push(5);

export {}