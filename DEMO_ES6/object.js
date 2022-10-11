//object <=> json;
// object hay còn gọi là property <=> key value
//Không được phép đặt trùng;
let employee = {
    name:  'Nguyen',
    age: 23,
    sex:'male',
    sayHi: function(){
        console.log('Hello Nguyen')
    }
}
//Xuất ra giá trị kiểu Object:
console.log(employee)
// Lấy giá trị thuộc object đó:
console.log(employee.age)
//Kích hoạt lời chào:
employee.sayHi()

//Gán giá trị:
// let nameEmployeeA = 'John Smith';
// let ageEmployeeA = 30;
// let sexEmployeeA = 'male';

let nameEmployeeA = 'Nguyen Dep Trai'
let ageEmployeeA = 23;
let sexEmployeeA = 'male'

// let employeeA = {
//     name: nameEmployeeA,
//     age: ageEmployeeA,
//     sex: sexEmployeeA
// }
// console.log(employeeA); 
let EmployeeA = {
    name: nameEmployeeA,
    age: ageEmployeeA,
    sex: sexEmployeeA,
}
console.log(EmployeeA)