// object -> key : value
// value -> property
// function -> mathod
let studentId={
    firstName : "Wahida",
    lastName : "Tabassum",
    rollNo : 54,
    address :{
        city : "Raniganj",
        state : "West Bangal"
    },
    age : 22,
    isIDcorrect : true,
    studentNameList :["Vishal", "Manisha", "Arsalan", "Rima", "shankar"],
    student : function (){
        console.log("wahida is good student");
    }
}
// GET
// console.log(studentid.name);   
// console.log(studentid.address);
// console.log(studentid.studentNameList[2]);
// studentid.student();                                     
// SET/Update                                      
// console.log("Studentid : ", studentId);
// studentId.firstName="Arsalan",
// studentId.lastName="Akhtar",
// studentId.rollNo = 36,
// console.log("##############################################################");
//DELETE
// delete studentId.age
// console.log("Studentid : ", studentId);
for(let i in studentId){
    console.log(i ,"   :   ", studentId[i]);
}

