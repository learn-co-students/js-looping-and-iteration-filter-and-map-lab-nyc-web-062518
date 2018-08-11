function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, attribute) {
  return drivers.filter(driver => (driver.name === attribute.name || driver.revenue === attribute.revenue))
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(driver => driver.name)
}
