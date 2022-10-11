//ARRAY:
//              0   1   2
let mangA = ['Anh', 'My', 'Phap', 'Uc','tay Ban Nha', 'Bo Dao Nha']

//Xuất giá trị mảng:
console.log(`Giá trị trả ra ở vị trí số 2: ${mangA[2]}`)
// Chạy đủ số vòng-> ngưng
// Vi tri mang bat dau tu so 0:


// Vong lap:
// for..in: VÒng lặp duyệt theo mảng index -> trả ra vị trí index từng mảnng; => duyệt hết
//for..of: Duyệt theo mảng từng phần tử-> trả ra giá trị cảu từng phần tử trong mảng; =>duyệt hết;
//for (bien dai dien _mang chung ta muon duyet cho tung phan tu);

// FOR..IN:
//Lấy ra các phần tử trong mảng: Anh Mỹ và Pháp
// for(let index in mangA){
//     console.log(mangA[index])
// }
for(let index in mangA){
    console.log(mangA[index])
}

// Láy ra các vị trong mảng: 0 1 và 2
// for(let index in mangA){
//     console.log(index)
// }
for(let index in mangA){
    console.log(index)
}


// FOR..OF:
// Lấy hết giá trị và sử dụng ngay lập tức:
// for(let data of mangA){
//     console.log(`Gia tri ${data}`)
// }
for (let data of mangA){
    console.log(`Gia tri ${data}`)
}

//Vòng lặp For có điều kiện:
// for(giá trị bắt đầu, điều kiện, tăng giá trị ban đầu lên 1)
//Duyệt bao nhiêu phần tử thì xuất bấy nhiêu phần tử: Băt đầu từ 1:

//Đếm trong mảng có bao nhiêu phần tử:
// console.log(`Mang a co: ${mangA.length} phan tu` )
console.log(`Mang a co ${mangA.length} phan tu`)

//Vòng lăọ For: 
// for(let i=0; i<mangA.length; i++){
//     //Biến i đại diện các phần tử trong mảng:
//     console.log(`for ${i}`)
// }
// console.log('Kết thúc vòng lăp for')
/**
 * Giải thích:
 * Đầu tiên: 0 -> 0<3
 * Tiếp theo: 1-> 1<3
 * Tiếp theo: 2-> 2<3
 * tiếp theo: 3-> Kết thúc
 */

// for(let i =0; i<mangA.length;i++){
//     console.log(`for ${i}`)
// }
for (let i=0; i<mangA.length; i++){
    console.log(`Gia tri ${i}`)
}