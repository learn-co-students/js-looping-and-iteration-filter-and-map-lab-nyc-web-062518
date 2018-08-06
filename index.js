// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue ;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driversArray = driversWithRevenueOver(drivers, revenue);
  return driversArray.map(driver => driver.name);
}

function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    const key = Object.keys(object)[0];
    return object[key] === driver[key];
  });
}

function exactMatchToList(drivers, object) {
  const driverObjects = exactMatch(drivers, object);
  return driverObjects.map(driver => driver.name);
}
