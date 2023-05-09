import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    
    height='';
    weight='';
    bmiVal = '';
    result = '';
    inputHandler(event){
        
        const{name,value} = event.target;
        if(name=='height'){
            this.height = value;
        }
        if(name=='weight'){
            this.weight = value;
        }

        /* Optimize way to store in the properties */
        // this[name] = value;
    }

    submitHandler(event){
        event.preventDefault();
        console.log('height: '+this.height);
        console.log('weight: '+this.weight);
        this.calculate();
    }

    calculate(){
        // BMI = weight in KG / ( height in m * height in m )
        let height = Number(this.height)/100; // divide by 100 to convert into metre fro cm
        let bmi = Number(this.weight) / (height*height);
        
        this.bmiVal = Number(bmi.toFixed(2));
        if(this.bmiVal<18.5){
            this.result = 'Underweight';
        } else if(this.bmiVal>=18.5 && this.bmiVal<25){
            this.result = 'Healthy';
        } else if(this.bmiVal >=25 && this.bmiVal <30){
            this.result = 'Overweight';
        }else{
            this.result = 'Obese';
        }
        console.log('BMI: ',this.bmiVal);
        console.log('Result Value:',this.result);
    }

    recalculate(event){
        this.bmiVal = '';
        this.result = '';
        this.height='';
        this.weight='';
    }
}