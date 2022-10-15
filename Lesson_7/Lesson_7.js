class People{
    constructor(weight, height) {
        this.weight = weight;
        this.heigth = height;
    }
}

class Apartments{
    constructor(qtyOfPeople){
        this.qtyOfPeople=qtyOfPeople;
    }
    pplQty(){
        if (this.qtyOfPeople>=1){
        console.log(`В квартирі проживає ${this.qtyOfPeople} людей`);}
        else{
            console.log(`Кількість людей в квартирі не може бути менше, ніж 1`)
        }

    }
}
let a = new Apartments(prompt('Введіть кількість людей в одній квартирі'))
a.pplQty()


class House extends Apartments {
    constructor(qtyOfAparts){
        super();
        this.qtyOfAparts = qtyOfAparts;

    }
    qty(){
        if(this.qtyOfAparts<96){
        console.log(`У цьому будинку ${this.qtyOfAparts} квартир`);}
        else {
            console.log(`Кількість квартир перевищує допустиму`)
        }
    }
}

const b = new House(13);
b.qty();


