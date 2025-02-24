const subject = {
    name : "JavaScript",
    topic : "Function",
    level : "Intermediate",
    isFun : true
}

const teacher = {
    name : "John Doe",
    subject,
    teaches : ["Math", "Science", "English"]
}

const obj = {
    ...subject, ...teacher
};

console.log(obj);