/**PHÂN RÃ CẤU TRÚC */
// dùng cho kiểu object

//Object:
/** kiểu dữ liệu {} ={} */
let employees = {
    name:"Nguyen",
    age: 50,
    sex: "male",
    //Function 1:
    sayHii: function(){
        console.log("Hello React Native");
    },
    //Function 2:
    sayGoodbye: function(){
        console.log('Goodbye ES6');
    }
}

let {age, sayHii, sayGoodbye} = employees;
// Xuất ra giá trị Age:
console.log(`Age ${age}`);
//Gọi Function ra:
sayHii()
sayGoodbye()

//ARRAY:
let mangB = ['Anh', 'My', 'Phap']
let [a,b] = mangB
console.log(`Lấy 2 giá trị đầu của mảng B: ${a} ${b}`)