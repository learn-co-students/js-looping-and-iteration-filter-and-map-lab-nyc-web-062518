// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driverName){
    return driverName.revenue > revenue;
  })
};

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driverName){
    return driverName.name;
  });
};

function exactMatch(drivers, obj){
  return drivers.filter(function(driver){
    const objectKey = Object.keys(obj)[0];
    return driver[objectKey] === obj[objectKey]
  })
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(function(driver){
    return driver.name;
  })
}
