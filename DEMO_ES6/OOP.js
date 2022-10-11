//Gôm tất cả các biến vào trong một đối tượng / class:

//Định nghĩa trước -> gán giá trị sau => Tái sử dụng 
// Tiết kiệm sử dụng biến;

// class_ ten class()


//OBJECT:
// let employee = {
//     name:"Nguyen",
//     age: 50,
//     sex: "male",
//     //Chứa luôn được cả Funcction:
//     sayHi: function(){
//         console.log("Hello React Native");
//     }
// }

//Class:
class Employee0{
    constructor(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    //timework:
    timework(){
        console.log('Work on time');
    }
}

let employee1 = new Employee0('Nguyen', 23, 'Male')
console.log(employee1)

/**Tính kế thừa: (ES6 chỉ có đến tính kế thừa là hết): */
//Trưởng phòng kế thừa Employee0:
class TrưởngPhòng extends Employee0{
    constructor(name,age,sex,manage){
        /**
         * Phải có từ khóa super đại diện cho class cha mà 
         * class hiện tại đang kế thừa:
         */
        super(name,age,sex);
        this.manage = manage;
    }
    //Override: Ghi đè phương thức, class con khai báo lại phương thức class cha:
    timework() {
        //Kích hoạt timework của clas cha  là Employee0:
        super.timework();
        //Kế thừa:
        console.log('Work overtime');
    }
}
let truongphong = new TrưởngPhòng('Nguyên', 23,'Male', 'Manage Employee');
//Gán cho tên cho trưởng phòng:
//headRom.name = 'Nguyễn Nguyên'
console.log(truongphong);

//Kích hoạt timework cho Trưởng Phòng:
truongphong.timework();


//'Giám đốc' kế thừa từ 'Trưởng Phòng':
class GiámĐốc extends TrưởngPhòng{
    constructor(name,age,sex,manage, managerRoom){
        /**
         * Phải có từ khóa super đại diện cho class cha mà 
         * class hiện tại đang kế thừa:
         */
        //Của ông Headroom
        super(name,age,sex,manage,managerRoom);
        this.manage = manage;
    }
}
let giamdoc = new GiámĐốc('Nguyên', 23,'Male', 'Manage Employee', 23);
console.log(giamdoc);


// Khai báo Funcction trong OOP:
giamdoc.timework()

truongphong.timework()


//Overright: ghi đè phương thức:


