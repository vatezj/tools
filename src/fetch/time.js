export default {
   unixToDate(unixtime)
   {
    if(unixtime.toString().length == 10)
    {
      var unixTimestamp = new Date(unixtime* 1000); 
    }else if(unixtime.toString().length == 11){
      var unixTimestamp = new Date(unixtime* 100); 
    }
    var year = unixTimestamp.getFullYear();
    var month = unixTimestamp.getMonth()+1;
    var day = unixTimestamp.getDate();
    var hours = unixTimestamp.getHours();
    var minutes = unixTimestamp.getMinutes();
    var seconds = unixTimestamp.getSeconds();

    if(month.toString().length == 1)
    {
        month = '0'+month;
    }
    if(day.toString().length == 1)
    {
        day = '0'+day;
    }
     if(hours.toString().length == 1)
    {
        hours = '0'+hours;
    }
     if(minutes.toString().length == 1)
    {
        minutes = '0'+minutes;
    }
     if(seconds.toString().length == 1)
    {
        seconds = '0'+seconds;
    }
    return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
   },
   unixToDateNoS(unixtime)
   {
    if(unixtime.toString().length == 10)
    {
      var unixTimestamp = new Date(unixtime* 1000); 
    }else if(unixtime.toString().length == 11){
      var unixTimestamp = new Date(unixtime* 100); 
    }
    var year = unixTimestamp.getFullYear();
    var month = unixTimestamp.getMonth()+1;
    var day = unixTimestamp.getDate();
    var hours = unixTimestamp.getHours();
    var minutes = unixTimestamp.getMinutes();
    var seconds = unixTimestamp.getSeconds();

    if(month.toString().length == 1)
    {
        month = '0'+month;
    }
    if(day.toString().length == 1)
    {
        day = '0'+day;
    }
     if(hours.toString().length == 1)
    {
        hours = '0'+hours;
    }
     if(minutes.toString().length == 1)
    {
        minutes = '0'+minutes;
    }
     if(seconds.toString().length == 1)
    {
        seconds = '0'+seconds;
    }
    return year+'-'+month+'-'+day+' '+hours+':'+minutes;
   },
  dateToUnix(date)
  {
    var stringTime = date;
    var timestamp2 = Date.parse(new Date(stringTime));
    timestamp2 = timestamp2 / 1000;
    return timestamp2;
  }
}