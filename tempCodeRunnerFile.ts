class Car {
    brake():void{}
    drive():void{}
    honk():void{}
}

class SmartCar extends Car{
    drive():void{
        console.log('hummmm')  
    }
    honk():void{
        console.log('MMmeep')
    }
    brake():void{
        console.log('squeeel')
    }
}

class Truck extends Car{
    drive():void{
        console.log('vrooom')  
    }
    honk():void{
        console.log('BWaaaaaahp')
    }
    brake():void{
        console.log('squeeel')
    }
}

const carArray: Car[] = [new SmartCar(), new Truck()]

for (const car of carArray){
    car.drive()
    car.honk()
    car.brake()
}