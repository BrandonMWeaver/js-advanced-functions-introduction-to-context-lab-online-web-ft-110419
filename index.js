function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(arrayOfArrays) {
  let employeeRecords = [];
  for (const array of arrayOfArrays) {
    employeeRecords.push(createEmployeeRecord(array));
  }
  return employeeRecords;
}

function createTimeInEvent(employeeRecord, dateTime) {
  let [date, hour] = dateTime.split(' ');
  
  return employeeRecord.timeInEvents.push({
    date: dateTime
    
  });
}
