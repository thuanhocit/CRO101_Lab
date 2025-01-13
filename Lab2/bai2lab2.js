// Dữ liệu mẫu
const sanPham = [
    { ma: 'SP001', ten: 'Sữa rửa mặt', gia: 100000 },
    { ma: 'SP002', ten: 'Kem dưỡng da', gia: 200000 },
    { ma: null, ten: 'Sản phẩm lỗi', gia: 50000 },
    { ma: 'SP003', ten: null, gia: 150000 },
    { ma: 'SP004', ten: 'Kem chống nắng', gia: 180000 },
];

// Hàm chuyển đổi từ mảng sang đối tượng
function chuyenMangThanhDoiTuong(mang) {
    return Object.fromEntries(
        mang.map(item => [item.ma, item])
    );
}

// Hàm lọc và xóa các sản phẩm không hợp lệ
function locSanPhamKhongHopLe(doiTuongSanPham) {
    Object.keys(doiTuongSanPham).forEach(khoa => {
        const sanPham = doiTuongSanPham[khoa];
        if (!sanPham.ma || !sanPham.ten || sanPham.ma === null || sanPham.ten === null) {
            delete doiTuongSanPham[khoa];
        }
    });
    return doiTuongSanPham;
}

// Thực hiện chuyển đổi và lọc
const doiTuongSanPham = chuyenMangThanhDoiTuong(sanPham);
const doiTuongSanPhamHopLe = locSanPhamKhongHopLe(doiTuongSanPham);

console.log(doiTuongSanPhamHopLe);