let obj1 = {
  name: "person 1",
  age: 5,
};

let obj2 = {
  age: 5,
  name: "person 1",
};

for (const key in obj1) {
  if (obj1[key] == obj2[key]) {
    console.log("equal");
  } else {
    console.log("not equal");
  }
}
