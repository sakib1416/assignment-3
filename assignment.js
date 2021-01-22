//Github link: 

function kilometerToMeter(number) {
    if(number < 0){
       console.log("Please insert a positive number.");
    }
    else {
        return number * 1000;
    }
}

function budgetCalculator(watch, phone, laptop) {
    if(watch < 0 || phone <0 || laptop < 0) {
        console.log("Please input a valid number");
    }
    else {
        let sum = watch * 50 + phone * 100 + laptop * 500;
        return sum;
    }
}

function hotelCost(days) {
    if(days <= 0) {
        console.log("Please input valid number of days");
    }
    else {
        if(days <=10) {
            return days * 100;
        }
        else if (days <= 20) {
            return 1000 + (days - 10) * 80;
        }
        else {
            return 1800 + (days - 20) * 50;
        }
    }
}

function megaFriend(arr) {
    if(arr === undefined || arr.length == 0) {
        console.log("Please write names in the array");
    } 
    else {
        let mega = arr[0].length;
        let pos;
        for(let i = 0; i < arr.length; i++){
            if(arr[i].length > mega) {
                mega = arr[i].length;
                pos = i;
            }
        }
        return arr[pos];
    }
}