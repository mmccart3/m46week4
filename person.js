class Person {
    //data structure goes here
    constructor(name,age,job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    //function bits go here
    talks() {
        console.log(`Hi my name is ${this.name}, I am ${this.age} and I work as ${this.job}`);
    }
    work() {
        console.log(`I am going to build a house, because I am a ${this.job}`);
    }
}

const dave = new Person ("Dave", 41, "Builder");

dave.talks();
dave.work();