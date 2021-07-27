// BÀI TẬP JAVASCRITP BUỔI 1
/**
 * BÀI 1: Tính tiền lương nhân viên
 * Viết chương trình tính tiền lương nhân viên
 * Lương 1 ngày: 100.000
 * Cho người dùng nhập vào số ngày làm
 * Công thức tính lương: Lương 1 ngày* số ngày làm */ 

// MÔ HÌNH 3 KHỐI: 
/** 
 * KHỐI 1: INPUT
 * 1. Lương 1 ngày
 * 2. Số ngày làm
 * 
 * KHỐI 2: Các bước xử lý
 * 1. Tạo biến Lương 1 ngày (luongNgay) và số ngày làm việc (ngayLam)
 * 2. Tạo biến Lương nhân viên (luongNV)
 * 3. Xử lý tính Lương = Lương 1 ngày * số ngày làm
 * 4. In kết quả ra console
 * 
 * KHỐI 3: OUTPUT
 * 1. Lương nhân viên
*/
const luongNgay = 100000;
var ngayLam = 25;
var luongNV = luongNgay*ngayLam;

console.log("Lương nhân viên là: " + luongNV);

// Bài 2: Tính giá trị trung bình
/**Viết chương trình nhập vào 5 số thực
 * Tính giá trị trung bình của 5 số này và xuất ra màn hình
 * 
 * MÔ HÌNH 3 KHỐI: 
 * 
 * KHỐI 1: INPUT
 * 1. 5 số thực
 * 
 * KHỐI 2: XỬ LÝ
 * 1. Tạo 5 biến cho 5 số thực (n1, n2, n3, n4, n5)
 * 2. Tạo biến giá trị trung bình của 5 số thực (average)
 * 3. Tính giá trị trung bình average = (n1+n2+n3+n4+n5)/5
 * 4. In kết quả ra console
 * 
 * KHỐI 3: OUTPUT
 * Giá trị trung bình 
 */
var n1 = 5;
var n2 = 6;
var n3 = 1;
var n4 = 8;
var n5 = 9;
var average = (n1+n2+n3+n4+n5)/5;
 console.log("Giá trị trung bình là: " + average);


//  BÀI 3: Quy đổi tiền
/**
 * Giá USD hiện nay đang là 23,500 vnd
 * Viết chương trình quy đổi từ USD sang VND
 * Cho người dùng nhập vào số tiền USD
 * Tính và xuất ra số tiền sau quy đổi VND
 * 
 * 
 * MÔ HÌNH 3 KHỐI: 
 * 
 * Khối 1: INUT
 * 1.Số tiền USD muốn quy đổi
 * 
 * KHối 2: XỬ LÝ
 * 1. Tạo biến giá USD hiện nay (exRateUSD)
 * 2. Tạo biến số tiền USD muốn quy đổi ra VND (currencyUSD) 
 * 3. Tạo biến giá trị VND sau khi quy đổi (currencyVND)
 * 4. Tính currencyVND = currencyUSD*exRateUSD
 * In kết quả ra console
 * 
 * KHỐI 3: OUTPUT
 * Giá trị tiền VND sau khi quy đổi
 */
const exRateUSD = 23500;
var currencyUSD = 5;
var currencyVND = exRateUSD*currencyUSD;
console.log("Giá trị tiền VND là: " + currencyVND +"VND");



// BÀI 4: Tính diện tích, chu vi hình chữ nhật
/** Viết chương trình nhập vào 2 chiều dài và chiều rộng 
 * của hình chữ nhật. 
 * Tính và xuất ra diện tích, chu vi của hình chữ nhật đó
 * 
 * MÔ HÌNH 3 KHỐI:
 * 
 * KHỐI 1: INPUT
 * 1. Chiều dài HCN
 * 2. Chiều rộng HCN
 * 
 * 
 * KHỐI 2: XỬ LÝ
 * 1. Tạo biến chiểu rộng và chiều dài HCN (a,b)
 * 2. Tạo biến diện tích (S)
 * 3. Tạo biến Chu vi (P)
 * 4. Tính diện tích S=a*b
 * 5. Tính Chu vi P = (a+b)*2
 * In kết quả ra console
 * 
 * 
 * KHỐI 3: OUTPUT
 * 1. Diện tích S
 * 2. Chu vi P
 */
var a = 5;
var b = 6;
var S = a*b;
var P = (a+b)*2;
console.log("Diện tích hình chữ nhật là: " + S);
console.log("Chu vi hình chữ nhật là: " + P);

// BÀI 5: Tính tổng 2 ký số
/**
 * Viết chương trình nhập vào 1 số có 2 chữ số. Tính tổng 2 ký số của số vừa nhập
 * 
 * MÔ HÌNH 3 KHỐI
 * 
 * KHỐI 1: INPUT
 * 1. Số có 2 chữ số
 * 
 * 
 * KHỐI 2: XỬ LÝ
 * 1. Tạo biến số có 2 chữ số (nn)
 * 2. Tạo biến ký số hàng chục (nChuc)
 * 3. Tạo biến ký số hàng đơn vị (nDonvi)
 * 4. Tạo biến tổng 2 ký số (sum)
 * 5. Tính tổng 2 ký số sum = nChuc+nDonvi
 * 6. In kết quả ra console
 * 
 * 
 * KHỐI 3: OUTPUT
 * 1. Tổng 2 ký số
 */
var nn= 27;
var nChuc = Math.floor(nn / 10);
var nDonvi = nn % 10;
var sum = nChuc + nDonvi;
console.log("Tổng 2 ký số là " + sum);




