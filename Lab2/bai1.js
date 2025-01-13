function tinhSoLuong(a, b) {
    let soChan = 0;
    let soLe = 0;

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            soChan++;
        } else {
            soLe++;
        }
    }

    console.log(`Số lượng số chẵn trong khoảng ${a} đến ${b}: ${soChan}`);
    console.log(`Số lượng số lẻ trong khoảng ${a} đến ${b}: ${soLe}`);
}

// Ví dụ gọi hàm với giá trị a và b
const a = 1;
const b = 9;
tinhSoLuong(a, b);