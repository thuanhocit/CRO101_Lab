// Định nghĩa các promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 hoàn thành'), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 2 thất bại'), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 hoàn thành'), 3000);
});

// Yêu cầu thứ nhất
console.log("Yêu cầu thứ nhất:");
Promise.all([promise1, promise2, promise3])
    .then(ketQua => {
        console.log("Tất cả promise hoàn thành thành công:", ketQua);
    })
    .catch(loi => {
        console.log("Một promise thất bại:", loi);
    });

// Yêu cầu thứ hai
console.log("Yêu cầu thứ hai:");
Promise.allSettled([promise1, promise2, promise3])
    .then(ketQua => {
        console.log("Tất cả promise đã hoàn thành (thành công hoặc thất bại):");
        ketQua.forEach((ketQua, index) => {
            if (ketQua.status === 'fulfilled') {
                console.log(`Promise ${index + 1} thành công:`, ketQua.value);
            } else {
                console.log(`Promise ${index + 1} thất bại:`, ketQua.reason);
            }
        });
    })
    .finally(() => {
        console.log("Hoàn thành xong tất cả promise");
    });