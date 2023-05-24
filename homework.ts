/*

Design a flexible OOP system to describe characters in a RPG game
There are 4 Unique Characters which use Different Types of Attacking mechanisms and Defending mechanisms:

 - Ogres - fights with club and defends with shield
 - Peons - fights with club and defends with shield
 - Knights - fights with a Sword and defends with Armor
 - Archer - fights with Bow and Arrow and has only is tunic to protect them
 - All Characters can collect gold and this will always be the same for every new type of character

At the end of this, each character should be able to attack and defend and collect gold. If needed any character should be able to change his fighting style, say if a knight losing his sword, but finds a club he should be able to change his fighting mechanism to use the club

Hint: To complete this assignment you will need multiple classes and interfaces and an Abstract class
You can use our Final Rubber Ducky Walkthrough example as a guide

*/

abstract class RPG_Char {
    constructor(protected $id: number,
            protected $gold: number){}
    get gold(): number { 
        return this.$gold 
    }
    set gold(amount: number) {
        this.$gold = amount
    } 
    attack(){}
    dropWeapon(){}
    pickupWeapon(newFightingStyle: string){}
    defend(){}
    collectGold(addGold: number){}
}

interface Attackable {
    attack():void
}

interface Defendable {
    defend():void
}

interface Collectable {
    collectGold(addGold: number):void
}

class Ogre extends RPG_Char implements Attackable, Defendable, Collectable {

    public static className: string = "Ogre"
    protected $fightingStyle: string = "Club"
    protected $defenseStyle: string = "Shield"

    constructor(id: number, 
                gold: number
        ){
            super(id, gold)
            this.gold = 0
        }
    get fightingStyle(): string {
        return this.$fightingStyle
    }
    get defenseStyle(): string {
        return this.$defenseStyle
    }
    public override attack(): void {
        if (this.$fightingStyle) {
            console.log(`Attack using a ${this.$fightingStyle}.`)
        } else {
            console.log(`Unable to Attack: No Attacking Mechanism on Hand.`)
        }
    }
    public override dropWeapon(): void {
        if (this.$fightingStyle) {
            console.log(`${this.$fightingStyle} dropped. No Attacking Mechanism on Hand.`)
            this.$fightingStyle = ""
        } else {
            console.log(`Unable to Drop Weapon: No Attacking Mechanism on Hand.`)
        }
    }
    public override pickupWeapon(newFightingStyle: string): void {
        if (this.$fightingStyle) {
            let oldFightingStyle = this.$fightingStyle
            this.$fightingStyle = newFightingStyle
            console.log(`Dropped ${oldFightingStyle}. Change Attacking Mechanism to ${this.$fightingStyle}.`)
        } else {
            this.$fightingStyle = newFightingStyle
            console.log(`Attacking Mechanism set to ${this.$fightingStyle}.`)
        }
    }
    public override defend(): void {
        console.log(`Defending using a ${this.$defenseStyle}.`)
    }
    public override collectGold(addGold: number): void {
        this.gold += addGold
        console.log(`Picked up ${addGold}, Total Gold is ${this.gold}!`)
    }
}

class Peon extends RPG_Char implements Attackable, Defendable, Collectable {

    public static className: string = "Peon"
    protected $fightingStyle: string = "Club"
    protected $defenseStyle: string = "Shield"

    constructor(id: number, 
                gold: number
        ){
            super(id, gold)
            this.gold = 0
        }
    get fightingStyle(): string {
        return this.$fightingStyle
    }
    get defenseStyle(): string {
        return this.$defenseStyle
    }
    public override attack(): void {
        if (this.$fightingStyle) {
            console.log(`Attack using a ${this.$fightingStyle}.`)
        } else {
            console.log(`Unable to Attack: No Attacking Mechanism on Hand.`)
        }
    }
    public override dropWeapon(): void {
        if (this.$fightingStyle) {
            console.log(`${this.$fightingStyle} dropped. No Attacking Mechanism on Hand.`)
            this.$fightingStyle = ""
        } else {
            console.log(`Unable to Drop Weapon: No Attacking Mechanism on Hand.`)
        }
    }
    public override pickupWeapon(newFightingStyle: string): void {
        if (this.$fightingStyle) {
            let oldFightingStyle = this.$fightingStyle
            this.$fightingStyle = newFightingStyle
            console.log(`Dropped ${oldFightingStyle}. Change Attacking Mechanism to ${this.$fightingStyle}.`)
        } else {
            this.$fightingStyle = newFightingStyle
            console.log(`Attacking Mechanism set to ${this.$fightingStyle}.`)
        }
    }
    public override defend(): void {
        console.log(`Defending using a ${this.$defenseStyle}.`)
    }
    public override collectGold(addGold: number): void {
        this.gold += addGold
        console.log(`Picked up ${addGold}, Total Gold is ${this.gold}!`)
    }
}

class Knight extends RPG_Char implements Attackable, Defendable, Collectable {

    public static className: string = "Knight"
    protected $fightingStyle: string = "Sword"
    protected $defenseStyle: string = "Armor"

    constructor(id: number, 
                gold: number
        ){
            super(id, gold)
            this.gold = 0
        }
    get fightingStyle(): string {
        return this.$fightingStyle
    }
    get defenseStyle(): string {
        return this.$defenseStyle
    }
    public override attack(): void {
        if (this.$fightingStyle) {
            console.log(`Attack using a ${this.$fightingStyle}.`)
        } else {
            console.log(`Unable to Attack: No Attacking Mechanism on Hand.`)
        }
    }
    public override dropWeapon(): void {
        if (this.$fightingStyle) {
            console.log(`${this.$fightingStyle} dropped. No Attacking Mechanism on Hand.`)
            this.$fightingStyle = ""
        } else {
            console.log(`Unable to Drop Weapon: No Attacking Mechanism on Hand.`)
        }
    }
    public override pickupWeapon(newFightingStyle: string): void {
        if (this.$fightingStyle) {
            let oldFightingStyle = this.$fightingStyle
            this.$fightingStyle = newFightingStyle
            console.log(`Dropped ${oldFightingStyle}. Change Attacking Mechanism to ${this.$fightingStyle}.`)
        } else {
            this.$fightingStyle = newFightingStyle
            console.log(`Attacking Mechanism set to ${this.$fightingStyle}.`)
        }
    }
    public override defend(): void {
        console.log(`Defending using a ${this.$defenseStyle}.`)
    }
    public override collectGold(addGold: number): void {
        this.gold += addGold
        console.log(`Picked up ${addGold}, Total Gold is ${this.gold}!`)
    }
}

class Archer extends RPG_Char implements Attackable, Defendable, Collectable {

    public static className: string = "Archer"
    protected $fightingStyle: string = "Bow and Arrow"
    protected $defenseStyle: string = "Tunic"

    constructor(id: number, 
                gold: number
        ){
            super(id, gold)
            this.gold = 0
        }
    get fightingStyle(): string {
        return this.$fightingStyle
    }
    get defenseStyle(): string {
        return this.$defenseStyle
    }
    public override attack(): void {
        if (this.$fightingStyle) {
            console.log(`Attack using a ${this.$fightingStyle}.`)
        } else {
            console.log(`Unable to Attack: No Attacking Mechanism on Hand.`)
        }
    }
    public override dropWeapon(): void {
        if (this.$fightingStyle) {
            console.log(`${this.$fightingStyle} dropped. No Attacking Mechanism on Hand.`)
            this.$fightingStyle = ""
        } else {
            console.log(`Unable to Drop Weapon: No Attacking Mechanism on Hand.`)
        }
    }
    public override pickupWeapon(newFightingStyle: string): void {
        if (this.$fightingStyle) {
            let oldFightingStyle = this.$fightingStyle
            this.$fightingStyle = newFightingStyle
            console.log(`Dropped ${oldFightingStyle}. Change Attacking Mechanism to ${this.$fightingStyle}.`)
        } else {
            this.$fightingStyle = newFightingStyle
            console.log(`Attacking Mechanism set to ${this.$fightingStyle}.`)
        }
    }
    public override defend(): void {
        console.log(`Defending using a ${this.$defenseStyle}.`)
    }
    public override collectGold(addGold: number): void {
        this.gold += addGold
        console.log(`Picked up ${addGold}, Total Gold is ${this.gold}!`)
    }
}
