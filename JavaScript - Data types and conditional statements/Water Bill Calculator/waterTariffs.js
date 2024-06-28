waterConsumption = Number(prompt("Please enter the amount of water used"))/1000;
console.log(waterConsumption);

function waterBill (waterConsumption) {
    
    if(waterConsumption <= 6){
        return waterConsumption * 15.73;
    }else if(waterConsumption > 6 && waterConsumption <= 10.5){
        return (6 * 15.73) + ((waterConsumption - 6) * 22.38);
    }else if(waterConsumption > 10.5 && waterConsumption <= 35){
        return (6 * 15.73) + (4.5 * 22.38) + ((waterConsumption - 10.5) * 31.77)
    }else{
        return (6 * 15.73) + (4.5 * 22.38) + (24.5 * 31.77) + ((waterConsumption - 35) * 69.76)
    }
    
}

console.log('R' + (waterBill(waterConsumption)));