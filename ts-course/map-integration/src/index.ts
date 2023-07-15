/// <reference types="@types/google.maps" />

import { CustomMap } from "./customMap";
//here by importing the custom Map we can call the functions inside the class so after here it the map obect cant be modified

import { Company } from "./Company";
import { User } from "./User";

// console.log("ht there");

// const user = new User();
// console.log(user);

// console.log(company);

let content=`<h1>Summa content</h1>`;
const company = new Company();
const user = new User();
const map = new CustomMap("map");
console.log(user);

map.addMarker(user);
map.addMarker(company);
// map.addWindow(content);