function mostProfitableDepartment(salesData){
    var departments = {};
    
    for(var i = 0; i < salesData.length; i++){
      var list = salesData[i];
      var departmentName = list.department;
      if(departments[departmentName] === undefined){
            departments[departmentName] = 0;
      }
         departments[departmentName] += list.sales;
    }
  
    var salesTotal = 0;
    var eachDepartment = "";
    for(var i in departments){
        if(departments[i] > salesTotal){
            salesTotal = departments[i];
          eachDepartment = i;
        }
    }
        return eachDepartment;
  }
  
  // most profitable day function
  function mostProfitableDay(salesData){
    var days = {};
    
    for(var i = 0; i < salesData.length; i++){
      var list = salesData[i];
      var daysOfWeek = list.day;
  
      if(days[daysOfWeek] === undefined){
            days[daysOfWeek] = 0;
      }
         days[daysOfWeek] += list.sales;
    }
  
    var salesTotal = 0;
    var eachDay = "";
    for(var i in days){
        if(days[i] > salesTotal){
            salesTotal = days[i];
          eachDay = i;
        }
    }
        return eachDay;
  }