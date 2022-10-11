//Overload -> function không có
//Overload: Trùng tên nhưng khác nhau về số lượng và kiểu dữ liệu biến;

// Ví dụ:
// function Hello (){

// }
// function hello (a,b,c){

// }
// hello(3,4,6)

// REST PARAMETERS:
// Cú pháp: ...
function tinhTong(...numA){
    //Các tham số truyền vào sẽ được trình bày dưới dạng mảng:
    console.log(numA);
}
tinhTong(3,4,6)