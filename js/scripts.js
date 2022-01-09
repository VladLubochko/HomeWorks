



 
let Kettle = function () {
 
    this.get = function () {
        this.weight = +prompt('масса нагреваемого материала, л (через точку)') ;
		this.temp1 = +prompt('t1 - температура исходная, °C');
		this.temp2 = +prompt('t2 - температура требуемая, °C');
        this.power = +prompt('Введите мощность чайника, Вт');
        
 
        this.operation();
    };
 
    this.operation = function () {
        this.result = 4183 * this.weight * (this.temp2 - this.temp1) / this.power;
 
        this.show();
    };
 
	this.show = function() {
		alert('Время закипания воды' + ' ' + Math.round(this.result) + ' ' + 'секунд(ы)');
	};
};
let kettle = new Kettle();
kettle.get(); 

 


/*
t = c * m * (t2 - t1) / W, где
 = this.teplo * this.weight * (this.temp2 - this.temp1) / this.power;
t - время нагрева, сек
W - мощность водонагревателя, Вт
c - теплоемкость нагреваемого материала, Дж/кг*К (вода = 4183 Дж/кг*К)
m - масса нагреваемого материала, кг (для воды можно принять условно 1 кг = 1 литр)
t1 - температура исходная, К
t2 - температура требуемая, К
*/

// в рамках записи повторил
/*let Calc = function(){
	this.get = function(){
		this.a = +prompt('Введите число a');
		this.b = +prompt('Введите число b');
		this.oper = prompt('Введите операцию');
		
		this.operation();
	};
	this.operation = function(){
		switch(this.oper){
			case '+':
				this.result = this.a + this.b;
			break;
			case '-':
				this.result = this.a - this.b;
			break;
			case '*':
				this.result = this.a * this.b;
			break;
			case '/':
				this.result = this.a / this.b;
			break;
			default: this.result = 0;
			
		}
		this.show();
		
	};
	this.show = function() {
		alert(this.resultOn + "\n" + this.a + ' ' + this.oper + ' ' + this.b + ' ' + ' = ' + this.result);
	};
};

let calc = new Calc();
calc.get();
*/