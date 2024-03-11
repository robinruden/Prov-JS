// 9 (4p)
// Du ska skapa två klasser med ES6 syntax, Student och Course.

// Klassen Student ska ha följande egenskaper:
// fullname, courses (en array med kurser som är tom från början)
// och metoden 
// registerCourse() som lägger till en kurs till studentens lista
// listCourses() som visar en lista på studentens kurser

// Klassen Course ska ha följande egenskaper:
// name, yhp (poäng på YH)
// och metoderna
// getCourseInfo() som visar information om kursen

// Din kod här: 


// Klassen Student

class Student {
    constructor (fullname){
        this.fullname = fullname
        this.courses = []
    }

    registerCourse(x){
        this.courses.push(x)
    }

    listCourses(){
        return this.courses.map(x => x.getCourseInfo()).join('')
    }
}




// Klassen Course
class Course {
    constructor(name, yhp){
        this.name = name
        this.yhp = yhp
    }

    getCourseInfo(){
        return `Name: ${this.name}, YHP: ${this.yhp}`
    }
}





// Test
const student1 = new Student("Sandra");
//const student2 = new Student("Torsten");
//const student3 = new Student("Stina");
const course1 = new Course("HTML", 10);
const course2 = new Course("CSS", 50);
const course3 = new Course("Javascript", 2000);

student1.registerCourse(course1); 
student1.registerCourse(course2);
student1.registerCourse(course3);
//student2.registerCourse(course1);
//student2.registerCourse(course2);
//student3.registerCourse(course3);

console.log(student1.listCourses())
//student1.listCourses(); // Ska logga: [{ name: "HTML", yhp: 10 }, { name: "CSS", yhp: 50 }, { name: "Javascript", yhp: 2000 }]
//student2.listCourses(); // Ska logga: [{ name: "HTML", yhp: 10 }, { name: "CSS", yhp: 50 }]
//student3.listCourses(); // Ska logga: [{ name: "Javascript", yhp: 2000 }]
//course1.getCourseInfo(); // Ska logga: HTML 10
//course2.getCourseInfo(); // Ska logga: CSS 50
//course3.getCourseInfo(); // Ska logga: Javascript 2000

