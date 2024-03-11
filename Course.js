export class Course {
    constructor(name, yhp){
        this.name = name
        this.yhp = yhp
    }

    getCourseInfo(){
        return `Name: ${this.name}, YHP: ${this.yhp}`
    }
}