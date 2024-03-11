export class Student {
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
