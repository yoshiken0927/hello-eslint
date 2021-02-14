function sum(a, b) {
  return a + b;
//  return a + c;
}

console.log(
  sum(
    1, sum(2, sum(3, sum(4, sum(5, sum(6, sum(7, sum(8, sum(9, sum(10, 11))))))))),
  ),
);
// console.log(sum(1, sum(2,sum(3,sum(4,sum(5,sum(6,sum(7,sum(8,sum(9,sum(10,11)))))))))));
