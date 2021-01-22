//https://github.com/isratjahan-code/assignment-three-basicjs.git

kilometerToMeter

function validationMsg() {
    return "Please enter only positive integer value!";
}

function kilometerToMeter(kilometer) {
    if (Number.isInteger(kilometer) && kilometer > 0) {
        var meter = kilometer * 1000;
        return meter;
    } else {
        return (validationMsg());
    }
}

var result = kilometerToMeter(5);
///console.log(result);



budgetCalculator

function budgetCalculator(watchCount, mobileCount, laptopCount) {
    if (Number.isInteger(watchCount) && watchCount > 0 && Number.isInteger(mobileCount) && mobileCount > 0 && Number.isInteger(laptopCount) && laptopCount > 0) {
        var watchPrice = 50;
        var mobilePrice = 100;
        var laptopPrice = 500;
        var totalBudget = (watchPrice * watchCount) + (mobilePrice * mobileCount) + (laptopPrice * laptopCount);
        return (totalBudget);
    } else {
        return (validationMsg());
    }
}

//console.log(budgetCalculator(2, 3, 5));


hotelCost

function hotelCost(days) {
    var cost = 0;
    if (Number.isInteger(days) && days > 0) {
        if (days <= 10) {
            cost = days * 100;
        }
        else if (days <= 15) {
            firstPart = 10 * 100;
            remaining = days - 10;
            secondPart = remaining * 80;
            cost = firstPart + secondPart;

        }
        else {
            var firstPart = 10 * 100;
            var secondPart = 5 * 80;
            var remaining = days - 15;
            var thirdPart = remaining * 50;
            cost = firstPart + secondPart + thirdPart;
        }
        return (cost);
    } else {
        return (validationMsg());
    }
}

var result = hotelCost(3);
//console.log(result);


megaFriend

var longestFriendName = "";
function megaFriend(friendNameList) {
    if (Array.isArray(friendNameList)&&friendNameList.length>0) {
        friendNameList.forEach(findLongestName);
        return longestFriendName;
    } else {
        return "Input is not an array or empty list";
    }
}
function findLongestName(item) {
    if (item.length > longestFriendName.length) {
        longestFriendName = item;
    }
}

var friendNameList = ["Usaid Amrad Khan", "Syed Sayuj Zaman", "Shehzeen Jannat Nasiha", "Aaiza Nahar", "Arham Zaman", "Muaz Umair Ariz", "Md. Rafan Chowdhury", "Md. Safwan Rahman", "Rehnuma Ohee", "Shahreen Mahbub Aarha"];
//console.log(megaFriend(friendNameList));  
