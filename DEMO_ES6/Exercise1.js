//Bài tập 1:
/**
 * Khai báo một mảng có 5 phần tử vs các giá trị [5, 7, 19, 0, 20]
 * Tính tổng các phần tử trong mảng;
 * Tính tổng các phần tử có vị trí chẵn chia hết cho 2;
 * Tính giá trị trung bình cùa mảng;
 */
//Khai báo một mảng:
 let sumArray = [5,7,19,0,20]
 
//Tính tổng các phần tử có trong mảng:
 let sumResult = 0
 for (let data of sumArray){
    sumResult+= data
 }
 console.log(sumResult)
 // Tính tổng các phần tử có vị trí chẵn chia hết cho 2:
 let sumchan = 0
 for (let index in sumArray){
    sumResult+= sumArray[index]
    if(index%2==0){
        sumchan += sumArray[index]
    }
 }
 console.log(`Tổng phần tử chẳn chia hết cho 2 là : ${sumchan}`)
//Tính trung bình:
console.log(sumResult/sumArray.length)