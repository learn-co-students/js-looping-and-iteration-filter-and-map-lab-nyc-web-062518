function driversWithRevenueOver(drivers, revenueAmount) {
  return drivers.filter(
    function(driver) {
      return driver.revenue > revenueAmount;
    }
  )
}

function driverNamesWithRevenueOver(drivers, revenueAmount) {
  return driversWithRevenueOver(drivers, revenueAmount).map(
    function(driver) {
      return driver.name
    }
  )
}

function exactMatch(drivers, attribute) {
  return drivers.filter(
    function(driver) {
      for (const key in attribute) {
        return driver[key] === attribute[key];
      }
    }
  )
}


function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(
    function(driver) {
      return driver.name
    }
  )
}
