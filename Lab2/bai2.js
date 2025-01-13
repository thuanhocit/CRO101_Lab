n = 1000000000987;
let dem = 0;
while ( n >0) {
    let s = n % 10;
    if (s == 0) {
        dem = dem + 1;
    }
    n = Math.floor(n/10);
}

console.log(dem);

n = 0;
let dem2 = 0;
do {
    let s = n % 10;
    if (s === 0) {
        dem2 = dem2 + 1;
    }
    n = Math.floor(n/10);
} while (n > 0);

console.log(dem2);