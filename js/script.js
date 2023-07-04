var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];
//stuff.forEach(function (item, index) {
//if (index % 2 === 0) console.log(item);
//});

//var item = stuff.indexOf("perfume");
//console.log(item);

//var removeItem = [] {
// if (item !== 6) {
//  console.log(`${item} no longer exists.`);
// } else {
//  stuff.splice(1,6);
// }
//}

//var removeItem = function (array, item) {
// var index = array.indexOf(item);

//if (index === -1) {
//  console.log(`Sorry, no such item in this array.`);
// } else {
// array.splice(index, 1);
// console.log(`Removing ${item}`);
// }
//};

//removeItem(stuff, "perfume");
//console.log(stuff);
//removeItem(stuff, "umbrella");
//console.log(stuff);

var removeItem = stuff.filter(function (item) {
  return item.includes("s");
});
console.log(removeItem);

var newArray = [];
for (var item of stuff) {
  if (item.includes("s")) {
    newArray.push(item);
  }
}
console.log(newArray);
