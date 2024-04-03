// class Employee{

//     constructor(id,name,department,salary,boj){
//         this.id=id;
//         this.name=name;
//         this.department=department;
//         this.salary=salary;
//         this.boj=boj;
        
//     }
//     displayaDetails(){
//         console.log(("-------------------"));
//         console.log('id',this.id);
//         console.log('name',this.name);
//         console.log('department',this.department);
//         console.log('salary',this.salary);
//         console.log('boj',this.boj);
//     }
//     expInYears(){
//         console.log('Experience in this company: ;'(2020-this.boj)+"years");
//     }
// }
// const emp1= new Employee(1,'rahul,information' ,'10000',2020);
// const emp2= new Employee(1,'rahul,information' ,'10000',2023);
// const emp3= new Employee(1,'rahul,information' ,'10000',2024);
// const arr=[emp1,emp2,emp3];
// arr.forEach(val)=>{
//     val.displayDetails();
//     var.expInYears();
// })
// console.log(emp1);

// class BaseModel{
//     constructor(modelNo){
//         this.modelNo=modelNo;
//     }
//     display(){
//         console.log(`Model No: ${this.modelNo}`);
//     }
// }
// class TopModel extends BaseModel{
//     constructor(modelNo,extra){
//         super(modelNo);
//         this.extra=extra;
//     }
//     displayDetail(){
//         console.log("Extra Details "+this.extra);
//     }
// }
// const rahul= new BaseModel(2024);
// const sonam= new TopModel(2024,'3060 degree camera');
// rahul.display();

class Account{
    constructor(accNo,holderName,balance){
        this.accNo=accNo;
        this.hoderName=hoderName;
    }
    display(){
        console.log("--------------------");
        console.log(`Account No: ${this.accNo}`);
        console.log(`Account Hoder's Name${this.hoderName}`);
        console.log(`Account balance: ${this.hoderName}`);
        console.log(`Account Hoder's Name${this.balance}`);
    }
    diposit(amount){
        console.log(`You account is credited by ${amount},your availab`);
    }
    withdraw(amount){
        if(this.balance>=amount){
            console.log(`Your account ${}`)
        }
    }
}