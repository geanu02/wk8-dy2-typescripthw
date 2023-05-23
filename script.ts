type ArrayData = [string, number, number[]]

let a: ArrayData = ['2', 2, [2, 2]]

type Student_ = {
    name: string,
    school: string
}

type Human2 = {
    name: string,
    age: number
}

// Intersecting: data types of keys should be EXACTLY THE SAME

type StudentInfo_ = Student_ & Human2

const newStudent: StudentInfo_ = {
    name: "Alec",
    age: 22,
    school: "CT"
}

// Literal Types

type Direction = 'north' | 'south' | 'east' | 'west'

let newDirection: Direction = 'north'

// TypeScript OOP

// Must include optional properties on Blueprint

// class Car {
//     readonly id: number
//     readonly make: string
//     readonly model: string
//     readonly year:number
//     nickname?: string

//     constructor(id: number, make: string, model:string, year:number) {
//         this.id = id
//         this.make = make
//         this.model = model
//         this.year = year
//     }

//     drive(miles: number):void {
//         console.log(`You have driven ${miles} miles.`)
//     }
// }

// const car = new Car(1, "Honda", "Fit", 2007)

// car.drive(100)

// console.log(car.nickname)

// Access

class Car2 {
    public nickname?: string

    constructor(private readonly _id: number,
                private _make: string,
                private _model: string,
                private _year:number){}

    get make(): string{
        return this._make
    }

    set make(newMake: string) {
        this._make = newMake
    } 

    get model(): string{
        return this._model
    }

    set model(newModel: string) {
        this._model = newModel
    } 

    get year(): number{
        if (this._model === "fit" && this._year === 2010) {
            console.log("Emergency Recall")
        }
        return this._year
    }

    set year(newYear: number) {
        this._year = newYear
    } 

    drive(miles: number):void {
        console.log(`You have driven ${miles} miles.`)
    }

    printInfo():void {
        console.log(`ID Number: ${this._id}`)
    }
}

const car2 = new Car2(2, "Tesla", "Model X", 2020)

car2.drive(100)
car2.printInfo()

car2.model
car2.year

car2.year = 2022
car2.year

class Pokedex {
    [pokemon: string]: string
}

const pokedex = new Pokedex()

pokedex["pikachu"] = "Lightning Rodent"
console.log(pokedex)

// Index Signatures

class Person {
    [prop:string]: string|number
    constructor(public name: string){}
}
const person = new Person("Dylan")

person.age = 32
person.height = "5'7"

// Static
// not accessible by an instance
// accessible by Class.staticProperty or get method()

class Person2 {
    [prop:string]:string|number
    public static species:string = "homo sapien"

    constructor(public name: string){}
}
const person2 = new Person2("Sean")
console.log(person2.species)

class Counter {
    static count: number = 0 // because count is a staticProperty

    increaseCount() {
        Counter.count++ // not this.count++
    }
}

const counter = new Counter()
counter.increaseCount()
console.log(Counter.count)

const counter2 = new Counter()
counter2.increaseCount()
console.log(Counter.count)


class TV {
    constructor(protected serialId: string){}
}

class Roku extends TV {
    showSerial(): void {
        console.log(this.serialId)
    }
}

const roku = new Roku("qawgr54165843")
roku.showSerial()

// // Inheritance, Protected, etc.

// class Duck {
//     static className: string = "Duck"
//     constructor(protected $age: number){}
//     get age(): number {
//         return this.$age
//     }
//     quack():void{
//         console.log("Generic Quack Sound")
//     }
//     swim():void{
//         console.log("Just keep swimming")
//     }
//     walk():void{
//         console.log("Walking on a straight line")
//     }
//     duckWalk():void{
//         console.log("You better walk that fucking duck")
//     }
// }

// const anetra = new Duck(35)
// anetra.duckWalk()

// class MallardDuck extends Duck{
//     static className: string = "MallardDuck"
//     constructor(color: string, age:number){
//         super(age)
//     }
//     override get age():number {
//         return this.age + 1
//     }

//     public override quack():void {
//         console.log("Mallard Quack")
//     }
// }

// const mallardDuck = new MallardDuck('green', 5)
// mallardDuck.duckWalk()
// mallardDuck.quack()

// class RedHeadedDuck extends Duck {
//     static className = "ReadHeadedDuck"

//     constructor(color:string, age:number){
//         super(age)
//     }
//     override quack():void {
//         console.log("Red-Headed Duck Quack Quack Quack")
//     }
// }

// const duckArray: Duck[] = [
//     new Duck(2),
//     new RedHeadedDuck("red", 3),
//     new MallardDuck("brown", 2),
//     mallardDuck,
//     anetra]

// for (const duck of duckArray) {
//     duck.quack()
// }

// Inheritance, Protected, etc.

abstract class Duck {
    constructor(public color: string, protected $age: number){}
    get age(): number { return this.$age }
    quack(){}
    swim(){}
    fly(){}
}


interface Quackable {
    quack():void
}

interface Flyable {
    fly():void
}

interface Swimmable {
    swim():void
}

class MallardDuck extends Duck implements Quackable, Flyable, Swimmable {
    static className: string = "MallardDuck"

    constructor(color: string, $age: number){
        super(color, $age)
    }
    get age(): number {
        return this.$age
    }
    public override quack():void {
        console.log("Mallard Quack Quack Quack")
    }
    public override swim():void {
        console.log("Mallard Quack Quack Quack")
    }
    public override fly():void {
        console.log("Mallard Flies")
    }
}

class RedHeadedDuck extends Duck implements Quackable, Flyable, Swimmable {
    static className: string = "ReadHeadedDuck"

    constructor(color:string, $age:number){
        super(color, $age)
    }
    get age(): number {
        return this.$age
    }
    public override quack():void {
        console.log("Red-Headed Duck Quack Quack Quack")
    }
    public override swim():void {
        console.log("Red-Headed Duck Swimming")
    }
    public override fly():void {
        console.log("Red-Headed Duck Fly Away Home")
    }
}



class DecoyDuck extends Duck implements Swimmable {

    constructor(color: string, age: number) {
        super(color, age)
    }
    get age(): number {
        return this.age
    }

    public override swim():void {
        console.log("Decoy Duck Floating")
    }

}

const quackingArray: Quackable[] = [new RedHeadedDuck("Red", 3), new MallardDuck("Green", 5)]

for (const quacker of quackingArray) quacker.quack()

// abstract class Car {
//     brake():void{}
//     drive():void{}
//     honk():void{}
// }

// class SmartCar extends Car{
//     drive():void{
//         console.log('hummmm')  
//     }
//     honk():void{
//         console.log('MMmeep')
//     }
//     brake():void{
//         console.log('squeeel')
//     }
// }

// class Truck extends Car{
//     drive():void{
//         console.log('vrooom')  
//     }
//     honk():void{
//         console.log('BWaaaaaahp')
//     }
//     brake():void{
//         console.log('squeeel')
//     }
// }

// const carArray: Car[] = [new SmartCar(), new Truck()]

// for (const car of carArray){
//     car.drive()
//     car.honk()
//     car.brake()
// }

// abstract class Duck2 {
//     constructor(protected $age: number) {}
//     get age(): number {
//         return this.$age
//     }
// }

interface Human {
    name: string
    zip: number
}

type Post = {
    title: string
    body: string
}

interface User extends Human {
    posts: Post[]
    lastPost: Date
}

const user : User = {
    name: "Gian",
    zip: 11237,
    posts: [
        {
            title: "TypeScript Week",
            body: "This is ecStatic."
        }
    ],
    lastPost: new Date()
}

