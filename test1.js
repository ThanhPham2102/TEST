// // Progress Test 1

// // Bài 1 : Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và
// // in ra kết quả. (1đ)
// // ● Đầu vào: str
// // ● Đầu ra: đảo ngược chuỗi và in ra kết quả
// // ● Ví dụ:
// // ○ Cho: str = &quot;program&quot;; in ra: &quot;margorp&quot;
// // ○ Cho: str = &quot;data&quot;; in ra: &quot;atad&quot;
// // ● Lưu ý: không sử dụng hàm reverse()


// // let userInput = prompt(" moi nhap chuoi may thich");
// // let str = ''
// // for (i = userInput.length - 1; i >= 0; i = i - 1) {
// //     str = str + userInput[i];
// // } console.log(str);



// // Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra
// // chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
// // (1đ)
// // ● Đầu vào: str
// // ● Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// // ● Ví dụ
// // ○ Cho &quot;this is A Test&quot;; In ra &quot;This Is A Test&quot;
// // ○ Cho &quot;hello rikkei academy&quot;; In ra &quot;Hello Rikkei Academy”



// //  let Str = prompt( "nhap chuoi ki tu ban thich").toLowerCase().split(" ");
// // //console.log(Str);
// // for (i=0;i<= Str.length-1;i=i+1){
// //     Str[i]=Str[i].charAt(0).toUpperCase() + Str[i].slice(1);
// // } //console.log(Str);
// // let newStr = Str.join(' ');
// // console.log(" chuoi sau khi duoc chuyen doi la :"+newStr);



// // Bài 3 : Viết một chương trình xóa các phần tử trùng của một
// // mảng và in ra kết quả. (1đ)
// // ● Đầu vào: 1 mảng
// // ● Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// // ● Ví dụ
// // ○ Cho
// // Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”fi
// // ve”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// // ○ Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]


let array = [ 1,2,3,4,5,1,3,5,7,8,9];
let check = [];
for (i=0;i<=array.length-1;i=i+1){
    array.indexOf(array[i]);
    check.push(array[i]);
}

console.log(check);





// // Bài 4 : Viết một chương sắp xếp các phần tử là số ở trong
// // mảng theo thứ tự tăng dần. (1đ)
// // ● Đầu vào: 1 mảng
// // ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
// // ● Ví dụ
// // ○ Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]
// // ● Lưu ý: Không dùng hàm sort()


// let input =prompt("nhap so cach nhahu boi dau phay").split(',');console.log(input);

// for (let i = 0; i < input.length - 1; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//         if (Number(input[j]) < Number(input[i])) {
//             let a = input[i];
//             input[i] = input[j];
//             input[j] = a;
//         }
//     }
// } console.log(input);









// //     // bai 5
// //     Bài 5 : Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên
// //         nhân viên). Xây dựng chương trình quản lý nhân viên với các
// //         chức năng (Read, Create, Update, Delete). (2đ)

// state=true;
// while(state){
// let nhanVien = ['Join', 'Rick', 'Henry'];
// let input = prompt("nhap C/R/U/D/E").toLowerCase(); console.log(input);
// if (input === "c") {
//     let NV = prompt("chon ten nhan vien");
//     let indexNumber = -1;
//     for (i = 0; i <= nhanVien.length - 1; i = i + 1) {
//         if (NV === nhanVien[i]) {
//             indexNumber = i;
//         }
//     } if (indexNumber != -1) {
//         console.log(NV + "  co trong danh sach nhan vien");

//     } else {
//         console.log(NV + " ko co trong danh sach nhan vien");
        

//     }
//     // them danh sach nhan vien
    
//     let themNv = prompt( " nhap ten nhan vien muon them");
//     nhanVien.push(themNv);
//     console.log(nhanVien);


// } else if (input === "r") {
//     console.log(nhanVien);

// } else if (input === "u") {
//     let updateNhanvien = prompt(' nhan vi tri vien muon update');
//     let newNhanvien = prompt(' nhan vien moi la');
//     nhanVien[updateNhanvien-1]=newNhanvien;
//     console.log('danh sach nhan vien moi :'+ nhanVien)

// } else if (input === "d") {
// let deletedNhanvien=prompt(' xoa nha vien o vi tri nao');
// nhanVien.splice(deletedNhanvien-1,1);
// console.log(nhanVien);
// } else if (input === "e") {
//     console.log(" thank you")
// state=false;
//     break;
// }
// }


// // bai7:
// state=true;
// while(state){
// let storeBook = ['toan', 'anh', 'van', 'su','dia'];
// let input = prompt("nhap C/R/U/D/E").toLowerCase(); console.log(input);
// let giohang = [" "];
// if (input === "c") {
//     // kiem tra sach co trong store
//     let chonSach = prompt("nhap ten sach ");
//     let indexNumber = -1;
//     for (i = 0; i <= storeBook.length - 1; i = i + 1) {
//         if (chonSach === storeBook[i]) {
//             indexNumber = i;
//             giohang.push(storeBook[i]);
//         }
//     } if (indexNumber != -1) {
//         console.log(chonSach + "  co trong store");
       

//     } else {
//         console.log(chonSach + " ko co trong store");
        

//     }console.log(giohang)
//     // xem sach co torng gio ko
    
    


// } else if (input === "r") {
//     console.log( storeBook);

// } else if (input === "u") {
//     let updateBook = prompt(' vi tri sach  update');
//     let newBook = prompt(' sach  moi la');
//     storeBook[updateBook-1]=newBook;
//     console.log('danh sach nhung quyen sach co trong store :'+ storeBook)

// } else if (input === "d") {
// let deletedBook=prompt(' xoa sach vi tri nao');
// storeBook.splice(deletedBook-1,1);
// console.log(storeBook);
// } else if (input === "e") {
//     console.log(" thank you")
// state=false;
//     break;
// }
// }



// Bài 6 : Viết chương trình cho phép người dùng nhập vào ngày
// tháng năm. (2đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// ● Ví dụ
// ○ Ngày 30/4/2019 là ngày hợp lệ
// ○ Ngày 29/2/2019 là ngày không hợp lệ
// ● Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30]
// và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2
// năm không nhuận thì chỉ có đến ngày 28
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
// ● Ví dụ
// ○ Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
// ○ Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021


// let input = prompt( "nhap dd/mm/yy").split("/");console.log(input)
// if ( input===)
// if ( Number(input[0])<)

