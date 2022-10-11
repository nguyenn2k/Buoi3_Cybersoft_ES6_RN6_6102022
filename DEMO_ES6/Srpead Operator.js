/**COPY TOAN BO GIA Tri MANG TU MANG NÀY SANG MANG KHAC */

//ARRAY:
let mangC = [1,2,3,4]
//Đem tất cả các giá trị của mảng C xuống mảng D:
let mangD = [...mangC]
console.log(mangD)

//OBJECT:
let obj={
    hoten: "Nguyên",
    tuoi: 23,
}
let obj2 = {
    ...obj,
    // Thêm keyvalue cho obj2:
    gioitinh: 'nam'
}
console.log(obj2);