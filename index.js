const returnFirstTwoDrivers = function (driver) {
    return driver.slice(0, 2);
}

const returnLastTwoDrivers = function (driver) {
    return driver.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return num => number * num
}

function fareDoubler(number) {
    return number * 2
}

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fun) {
    if (fun === returnFirstTwoDrivers)
        return drivers.slice(0, 2);


    if (fun === returnLastTwoDrivers)
        return drivers.slice(-2)


}