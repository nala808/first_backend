let students = [];

function creatStudent (name , age , mark ){

return {name:name , age:age , mark:mark } ;

}

students.push(creatStudent  ("nawal" , 22 , 90));
students.push(creatStudent  ("mayan" , 22 , 80));
students.push(creatStudent  ("noor" , 21 , 70));
students.push(creatStudent  ("mayar" , 18 , 50));
students.push(creatStudent  ("ghazal" , 18 , 40));

let successStudent=[];

let failedStudent=[];

for (let i=0 ; i<students.length ; i++){
    if (students[i].mark>50){
        successStudent.push(students[i])
    } else{
        failedStudent.push(students[i])
    }
}
console.log("success student ",successStudent )
console.log("fail student ",failedStudent )
