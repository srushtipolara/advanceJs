let n = 5;
let str = "*";
let space = " ";

// Upper left triangle
for (let i = 1; i <= n; i++) {
    console.log(str.repeat(i))
}
// output :
// *
// * *
// * * *
// * * * *
// * * * * *

// =====================================================

// Upper right triangle
for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + str.repeat(i))
}
// output :
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// =====================================================

// Lower left triangle
for (let i = n; i >= 1; i--) {
    console.log(str.repeat(i) + space.repeat(n - i))
}
// output :
// * * * * *
// * * * *
// * * *
// * *
// *

// =====================================================

// Lower right triangle
for (let i = n; i >= 1; i--) {
    console.log(space.repeat(n - i) + str.repeat(i))
}
// output :
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// =====================================================
// number pattern
let num = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        num += j;
    }
    num += "\n";
}
console.log(num)

// output :
// 1
// 12
// 123
// 1234
// 12345
// =====================================================
let num1 = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        num1 += i;
    }
    num1 += "\n";
}
console.log(num1)
// output :
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// =====================================================

let num2 = "";
let count = 1;
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        num2 += count + " ";
        count++;
    }
    num2 += "\n";
}
console.log(num2)

// output :
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// =====================================================

let num3 = "";
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        num3 += j;
    }
    num3 += "\n";
}
console.log(num3)

// output :
// 12345
// 1234
// 123
// 12
// 1

// =====================================================

let num4 = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        num4 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        num4 += k
    }
    num4 += "\n";
}
console.log(num4)

// output :
//     1
//    123
//   12345
//  1234567
// 123456789

// =====================================================

let row = 3;
let num5 = "";
let count2 = 1;
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= row - i; j++) {
        num5 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        num5 += count2;
        count2++;
    }
    num5 += "\n";
}
console.log(num5)

// output :
//   1
//  234
// 56789

// =====================================================

let star = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        star += "*";
    }
    star += "\n";
}
console.log(star)

// output:
// *****
// *****
// *****
// *****
// *****

// =====================================================

let star1 = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            star1 += "*";
        } else {
            star1 += " ";
        }
    }
    star1 += "\n";
}
console.log(star1)

// output:
// *****
// *   *
// *   *
// *   *
// *****

// =====================================================

let star2 = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        star2 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star2 += "*";
    }
    star2 += "\n";
}
console.log(star2)

// output:
//     *
//    ***
//   *****
//  *******
// *********

// =====================================================
// Reverse Triangle — 1
// =====================================================

let star3 = "";

for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
        star3 += j;
    }
    star3 += "\n";
}
console.log(star3);


// output:
// 54321
// 5432
// 543
// 54
// 5

// =====================================================

let num6 = "";
for (let i = n; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
        num6 += j;
    }
    num6 += "\n";
}
console.log(num6)

// output:
// 54321
// 4321
// 321
// 21
// 1

// =====================================================
// Hollow Triangle Star Pattern

let star4 = "";
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= i; j++) {
        if (i === 6 || j === 1) {
            star4 += "*";
        } else {
            if (j === i) {
                star4 += "*";
            } else {
                star4 += " ";
            }
        }
    }
    star4 += "\n";
}
console.log(star4)

// output:
// *
// **
// * *
// *  *
// *   *
// ******

// =====================================================

// Inverse Triangle Pyramid
let pattern = "";

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "$ ";
    }
    pattern += "\n";
}
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        pattern += "% ";
    }
    pattern += "\n";
}
console.log(pattern)

// output :
// $
// $$
// $$$
// $$$$
// %%%%%
// %%%%
// %%%
// %%
// %

// =====================================================
let pattern1 = "";

for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        pattern1 += "A ";
    }

    pattern1 += "\n";
}
pattern1 += "\n";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern1 += "B ";
    }
    pattern1 += "\n";
}
console.log(pattern1)

// output :
// AAAAA
// AAAA
// AAA
// AA
// A
//
// B
// BB
// BBB
// BBBB
// BBBBB

// =====================================================
//Hollow Left Triangle

// output:
let star5 = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            star5 += "* ";
        } else {
            if (j === i) {
                star5 += "* ";
            } else {
                star5 += "  ";
            }
        }
    }
    star5 += "\n";
}
console.log(star5)

// output:
// *
// * *
// *   *
// *     *
// * * * * *

// =====================================================
//Pattern 4: Downward Hollow Left Triangle

let star6 = "";
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        if (i === 1 || i === n || j === 1 || j === n || j === i) {
            star6 += "* ";
        } else {
            star6 += "  ";
        }
    }
    star6 += "\n";
}
console.log(star6)

// output :
// * * * * *
// *     *
// *   *
// * *
// *

// =====================================================
// Hollow Right Triangle

let star7 = "";
for (let i = 1; i <= n; i++) {
    star7 += " ".repeat(n - i);
    for (let j = 1; j <= i; j++) {
        if (i === 1 || i === n || j === i || j === 1 || j === n) {
            star7 += "*";
        } else {
            star7 += " ";
        }
    }
    star7 += "\n";
}
console.log(star7)

// output :
//         *
//       * *
//     *   *
//   *     *
// * * * * *

// =====================================================
// Downward Hollow Right Triangle
let star8 = "";
for (let i = n; i >= 1; i--) {
    star8 += " ".repeat(n - i);
    for (let j = 1; j <= i; j++) {
        if (i === 1 || i === n || j === 1 || j === n || j === i) {
            star8 += "*";
        } else {
            star8 += " ";
        }
    }
    star8 += "\n";
}
console.log(star8)

// output :
// * * * * *
//   *     *
//     *   *
//       * *
//         *

// =====================================================
// Pyramid

let star9 = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        star9 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star9 += "*";
    }
    star9 += "\n";
}
console.log(star9)

// output :
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

// =====================================================
// Hollow Pyramid

let star10 = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        star10 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (i === n || i === 1 || k === 1 || k === 2 * i - 1) {
            star10 += "*";
        } else {
            star10 += " ";
        }
    }
    star10 += "\n";
}
console.log(star10)

// output :
//         *
//       *   *
//     *       *
//   *           *
// * * * * * * * * *

// =====================================================
// Downward Pyramid

let star11 = "";
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
        star11 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star11 += "*";
    }
    star11 += "\n";
}
console.log(star11)

// output:
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

// =====================================================

//Downward Hollow Pyramid
let star12 = "";
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
        star12 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (i === n || i === 1 || k === 1 || k === 2 * i - 1) {
            star12 += "*"
        } else {
            star12 += " "
        }
    }
    star12 += "\n";
}
console.log(star12)

// output:
// * * * * * * * * *
//   *           *
//     *       *
//       *   *
//         *

// =====================================================

// Crossed Square
let star13 = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n || i === j || j === n - i + 1) {
            star13 += "* ";
        } else {
            star13 += "  ";
        }
        // if (i === 2 || i === 4) {
        //     if (j === 3) {
        //         star13 += " ";
        //     } else {
        //         star13 += "*";
        //     }
        // } else if (i === 3) {
        //     if (j === 2 || j === 4) {
        //         star13 += " ";
        //     } else {
        //         star13 += "*";
        //     }
        // } else {
        //     star13 += "*";
        // }
    }
    star13 += "\n";
}
console.log(star13)


// output:
// * * * * *
// * *   * *
// *   *   *
// * *   * *
// * * * * *

// =====================================================

//Diamond

let star14 = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        star14 += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star14 += "*";
    }
    star14 += '\n';
}
for (let i = 4; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
        star14 += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star14 += "*";
    }
    star14 += '\n';
}

console.log(star14)

//output:
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *


// =====================================================
// Hollow Diamond

let star15 = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        star15 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1) {
            star15 += "*";
        } else {
            star15 += " ";
        }
    }
    star15 += "\n";
}
for (let i = 4; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
        star15 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 2 * i - 1 || k === 1) {
            star15 += "*";
        } else {
            star15 += " ";
        }
    }
    star15 += "\n";
}

console.log(star15)

// output:
//         *
//       *   *
//     *       *
//   *           *
// *               *
//   *           *
//     *       *
//       *   *
//         *

// =====================================================

let row1 = 6;
let star16 = "";

for (let i = row1; i >= 1; i--) {
    for (let j = 1; j <= row1 - i; j++) {
        star16 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star16 += "*";
    }
    star16 += "\n";
}
for (let i = 1; i <= row1; i++) {
    for (let j = 1; j <= row1 - i; j++) {
        star16 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star16 += "*";
    }
    star16 += "\n";
}
console.log(star16)

// output:
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// =====================================================

let row2 = 4;
let star17 = "";
for (let i = 1; i <= row2; i++) {
    for (let j = 1; j <= i - row2; j++) {
        star17 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star17 += "*";
    }
    star17 += "\n";
}

console.log(star17, "star17")