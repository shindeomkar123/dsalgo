const input = [
  { key: "Sample1", data: "dfg" },
  { key: "Sample2", data: "safmple" },
  { key: "Sample1", data: "sadfgmple" },
  { key: "Sample3", data: "tret" },
  { key: "Sample2", data: "tyutrju" },
  { key: "Sample3", data: "khjiuy" },
];

// const output = {
//   Sample1: [
//     { key: "Sample1", data: "sample" },
//     { key: "Sample1", data: "sample" },
//   ],
//   Sample2: [
//     { key: "Sample2", data: "sample" },
//     { key: "Sample2", data: "sample" },
//   ],
//   Sample3: [
//     { key: "Sample3", data: "sample" },
//     { key: "Sample3", data: "sample" },
//   ],
// };

const output = {};

for (let index = 0; index < input.length; index++) {
  if (!output[input[index].key]) {
    output[input[index].key] = [];
    const val = output[input[index].key];
    val.push(input[index]);
  } else {
    output[input[index].key].push(input[index]);
  }
}

console.log(output);
