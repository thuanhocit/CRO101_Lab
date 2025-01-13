// Dữ liệu đầu vào
const class1 = [
    {
        mssv: 'PS0000',
        name: 'Nguyen Van A',
        avgPoint: 8.9,
        avgTraningPoint: 7,
        status: 'pass',
    },
    {
        mssv: 'PS0001',
        name: 'Nguyen Van B',
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: 'pass',
    },
];

const class2 = [
    {
        mssv: 'PS0002',
        name: 'Nguyen Van C',
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: 'failed',
    },
    {
        mssv: 'PS0003',
        name: 'Nguyen Van D',
        avgPoint: 10,
        avgTraningPoint: 10,
        status: 'pass',
    },
    {
        mssv: 'PS0004',
        name: 'Nguyen Van E',
        avgPoint: 10,
        avgTraningPoint: 2,
        status: 'pass',
    },
];

// Bước 1: Gộp dữ liệu từ các lớp và lọc các sinh viên có trạng thái 'pass'
const allStudents = class1.concat(class2).filter(student => student.status === 'pass');

// Bước 2: Sắp xếp danh sách sinh viên theo avgPoint (điểm số) từ cao xuống thấp
const sortedByAvgPoint = allStudents.slice().sort((a, b) => b.avgPoint - a.avgPoint);

// Bước 3: Sắp xếp danh sách sinh viên theo avgTraningPoint (điểm rèn luyện) từ cao xuống thấp
const sortedByAvgTrainingPoint = allStudents.slice().sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);

// Bước 4: Lấy sinh viên có điểm số cao nhất (Ong vàng)
const ongVang = sortedByAvgPoint[0]; // Sinh viên có điểm số cao nhất

// Bước 5: Xuất kết quả
console.log("Danh sách sinh viên có điểm số từ cao xuống thấp:");
console.log(sortedByAvgPoint);

console.log("Danh sách sinh viên có điểm rèn luyện từ cao xuống thấp:");
console.log(sortedByAvgTrainingPoint);

console.log("Thông tin của Ong vàng:");
console.log(ongVang);
