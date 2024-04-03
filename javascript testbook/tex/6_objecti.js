const employee={
    id:101,
    name:'Mitali Vichare',
    designation: 'product Manager',
    department: 'Sales',
    salary: '34567'
}
for(let key in employee){
    console.log(key+': '+employee[key]);
}