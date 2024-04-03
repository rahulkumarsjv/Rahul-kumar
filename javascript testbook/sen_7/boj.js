const students=[
    {
        id:494,
        name: 'rahul',
        cgpa:8.0
    },
    {
        id:494,
        name: 'kumar',
        cgpa:7.0
    },
    {
        id:554,
        name: 'kundan singh',
        cgpa:6.0
    },
    {
        id:565,
        name: 'prince kumar',
        cgpa:9.0
    }
]
for(let stu of students){
    console.log(".................");
    for(let key in stu){
        console.log(key+": "+stu[key]);
    }
    }