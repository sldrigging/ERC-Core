$(document).ready(function () {
   
	
	var partNumbersDropShip = ['94710002', '94710002', 
'94710004',
'94710006',
'94710008',
'94710010',
'94710012',
'94710014',
'94710016',
'94710018',
'94710020',
'94710022',
'94710024',
'94710026',
'94710028',
'94710030',
'94710032',
'94710034',
'94710036',
'94710038',
'94710040',
'94710042',
'94710044',
'94710046',
'94710048',
'94710050',
'94710052',
'94710054',
'94710056',
'94710058',
'94710060',
'94710062',
'94710064',
'94711002',
'94711004',
'94711006',
'94711008',
'94711010',
'94711012',
'94711014',
'94711016',
'94711018',
'94711020',
'94711022',
'94711024',
'94711026',
'94711028',
'94711030',
'94711032',
'94711034',
'94712002',
'94712004',
'94712006',
'94712008',
'94712010',
'94712012',
'94712014',
'94712016',
'94712018',
'94712020',
'94712022',
'94712024',
'94712026',
'94712028',
'94712030',
'94712032',
'94712034',
'94712036',
'94712038',
'94712040',
'94712042',
'94712044',
'94713002',
'94713004',
'94713006',
'94713008',
'94713010',
'94713012',
'94713014',
'94713016',
'94713018',
'94713020',
'94713022',
'94713024',
'94713026',
'94718002',
'94718004',
'94718006',
'94718008',
'94718010',
'94718012',
'94718014',
'94718016',
'94718018',
'94718020',
'94718022',
'94718024',
'94718026',
'94718028',
'94718030',
'94718032',
'94718034',
'94718036',
'94718038',
'94718040',
'94718042',
'94718044',
'94718046',
'94718048',
'94718050',
'94718052',
'94718054',
'94718056',
'94718058',
'94719002',
'94719004',
'94719006',
'94719008',
'94719010',
'94719012',
'94719014',
'94719016',
'94719018',
'94719020',
'94719022',
'94719024',
'94719026',
'94719028',
'94719030',
'94720002',
'94720004',
'94720006',
'94720008',
'94720010',
'94720012',
'94720014',
'94720016',
'94720018',
'94720020',
'94720022',
'94720024',
'94720026',
'94720028',
'94720030',
'94720032',
'94720034',
'94720036',
'94720038',
'94720040',
'94720042',
'94720044',
'94720046',
'94720048',
'94721002',
'94721004',
'94721006',
'94721008',
'94721010',
'94721012',
'94721014',
'94721016',
'94721018',
'94721020',
'94721022',
'94721024',
'94721026',
'94721028',
'94722002',
'94722004',
'94722006',
'94722008',
'94722010',
'94722012',
'94722014',
'94722016',
'94722018',
'94722020',
'94722022',
'94722024',
'94722026',
'94722028',
'94722030',
'94723002',
'94723004',
'94723006',
'94723008',
'94723010',
'94723012',
'94737002',
'94737004',
'94737006',
'94737008',
'94737010',
'94737012',
 ]; 
    
	var partNumber = document.getElementById("product_id").innerHTML; 


    
		if (partNumbersDropShip.indexOf(partNumber) === -1) 
	{	
		var DAILY_CUTOFF_TIME_HOUR = 14 //2pm cutoff 
	
	} else {
		var DAILY_CUTOFF_TIME_HOUR = 1;  //1am cutoff
		
	}
	
	
	
    const DAILY_CUTOFF_TIME_MIN = 0;    //DAILY_CUTOFF_TIME_MIN = 0;  0 pass the hour
	var EXTRA_DAYS_OFF =
        ["1/1/21", "2/16/21", '4/2/21', '5/31/21', '7/4/21', '9/6/21', '11/24/21', '11/25/21', '12/23/21', '12/24/21'];
    //var EXTRA_DAYS_OFF = new Date('Wed Oct 28 2020 11:58:53 GMT-0500 (Central Daylight Time)');  //you can add as many dates as you want.  if no dates then just use: var EXTRA_DAYS_OFF = [];
    var globalNow = new Date();
    var globalDiffMs = 0;

    $("#todaysdatetime").val(globalNow.toLocaleString());

    function processForm() {
        var newStartDate;
        var d = $("#todaysdatetime").val();

        if (d == "")
            d = new date();

        newStartDate = new Date(d);

        var currentDateTime = new Date();
        
        if (!isDST(newStartDate)) currentDateTime.setHours(currentDateTime.getHours() - 1);

        globalDiffMs = newStartDate.getTime() - currentDateTime.getTime();

        
    }

    //$("button").click(function () {
    //    processForm();
    //});

    setInterval(function () {
        var d1 = new Date();
        var globalNow = new Date(d1);
        var globalNow = getUTC(globalNow);

        globalNow.setTime(globalNow.getTime() + globalDiffMs);

        var localized = getCST(globalNow);
        
        var globalCutoff = getCutoffInUTC(globalNow, DAILY_CUTOFF_TIME_HOUR, DAILY_CUTOFF_TIME_MIN,0,0);
        
        globalCutoff = new Date(getNewCutoffTime(globalNow, globalCutoff, EXTRA_DAYS_OFF, DAILY_CUTOFF_TIME_HOUR, DAILY_CUTOFF_TIME_MIN));
        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     	
//		console.log('test globalNow:',globalNow);
//		console.log('test globalNow EXTRA_DAYS_OFF:',EXTRA_DAYS_OFF);
        var timeleft = globalCutoff.getTime() - globalNow.getTime();
		 
        var diff = new Date(timeleft);

        //TEST CODE
        $("#browserTime").html("Today local Browser Time (12 hr) is " + dayNames[d1.getDay()] + " " + d1.toLocaleDateString() + " " + d1.toLocaleTimeString());
        $("#Localized").html("Today Time in CST (24 hr) is " + localized.toDateString() + " " + localized.toTimeString() + " CST (ignore the timezone)");
        $("#currentUTCToday").html("Today UTC Time is " + globalNow.toString());
        $("#isDST").html( isDST(globalNow) ? "DST is in effect": "DST is NOT in effect");
        $("#utcOffset").html("Local UTC Offset = " + (globalNow.getTimezoneOffset() / 60).toString());
        //
        $("#cutoffday").html("Ships " + dayNames[globalCutoff.getDay()]);
        $("#cutoffTime").html("Cutoff UTC time is " + globalCutoff.toString() + " (ignore the timezone)");// + " " + globalCutoff.toLocaleTimeString());
        //
       
        $("#weekend").html(isWeekend(getCST(globalNow)) ? "No Shipping. The office is closed on weekends! No shipping" : "Today is a regular workday (except for holidays)");
        $("#holiday").html(isHoliday(getCST(globalNow), EXTRA_DAYS_OFF) ? "Today is a holiday! No shipping." : "Today is a NOT a holiday");

        $("#goodFri").html("Good Friday is " + goodFridayDate(getCST(globalNow).getFullYear()).toDateString());
        $("#mardigras").html("Mardi Gras is " + mardiGrasDate(getCST(globalNow).getFullYear()).toDateString());
        $("#thanksgiving").html("Thanksgiving is " + thanksgivingDate(getCST(globalNow).getFullYear()).toDateString());
        $("#extraDaysOff").html("Extra Days Off are " + EXTRA_DAYS_OFF)
        //PRODUCTION CODE
		if (DAILY_CUTOFF_TIME_HOUR === 14) {
        $("#cutoff-day").html("Ships " + getShippingMessage(diff, globalCutoff, globalNow));
		} else {
		 $("#cutoff-day").html("Ships " + getShippingMessage2(diff, globalCutoff, globalNow));	
		}
        $("#cutoff-timer").html(formatDays(diff) + formatHrs(diff) + formatMins(diff)); // + formatSecs(diff));
    }, 1000);

});

function getUTC(inDate) {
    var offsetMilliseconds = inDate.getTimezoneOffset() * 60 * 1000;
    var baseUTC = new Date(inDate.getTime() + offsetMilliseconds);
    var offset = 0;

    //i           f (!isDST(inDate))
    //    offset = 1 * 60 * 60 * 1000;

    var myUTC = new Date(baseUTC.getTime() + offset);

    return myUTC;
}

function getCutoffInUTC(inDate, dailyCutoffHours, dailyCutoffMins) {
    
    if (isDST(inDate)) {
        cutoffDay = new Date(inDate)
        cutoffDay.setHours(dailyCutoffHours + 5);
    } else {
        cutoffDay = new Date(inDate);
        cutoffDay.setHours(dailyCutoffHours + 6);
    }

    cutoffDay.setMinutes(dailyCutoffMins);
    cutoffDay.setSeconds(0);
    cutoffDay.setMilliseconds(0);

    return cutoffDay;

}

function getCST(inUTCDate) {
    var standardCSTOffsetMs = 6 * 60 * 60 * 1000;                   //CST 6 hour offset in ms for standard time
    //here we're just trying standard time for the sake of finding the whether DST is being used or not
    var standardCSTinUTC = new Date(inUTCDate.getTime() - standardCSTOffsetMs);   //Standard Time offset added 
    var offsetMS = isDST(standardCSTinUTC) ? 1 * 60 * 60 * 1000 : 1 * 60 * 60 * 1000;//spring forward 1 hour if DST
    return new Date(standardCSTinUTC.getTime() + offsetMS);
}

function getLocalTimeFromUTC(inUTC) {
    var dtLocal = new Date();
    var offsetMilliseconds = dtLocal.getTimezoneOffset() * 60 * 1000;  //this is the offset for the browser's time local to the user.  
    var localTime = new Date(inUTC.getTime() - offsetMilliseconds);
    return localTime;
}

function isDST(checkDate) {
    var month = checkDate.getMonth() + 1;
    var day = checkDate.getDate();
    var dow = checkDate.getDay() + 1;
    if (month < 3 || month > 11) return false; 
    if (month > 3 && month < 11) return true; 
    var previousSunday = day - dow;
    if (month == 3) return previousSunday >= 8;
    return previousSunday <= 0;
}

function formatDays(diff) {
    return diff.getUTCDate() - 1 >= 1 ? diff.getUTCDate() - 1 + " day" + getAddS(diff.getUTCDate() - 1) + " " : "";
}

function formatHrs(diff) {
    return diff.getUTCHours() >= 1 ? diff.getUTCHours() + " hr" + getAddS(diff.getUTCHours()) + " " : "";
}

function formatMins(diff) {
    return  diff.getUTCMinutes() + " min" + getAddS(diff.getUTCMinutes()) + " ";
    //return diff.getUTCMinutes() == 0 && diff.getUTCHours() == 0 ? "" : diff.getUTCMinutes() + " min" + getAddS(diff.getUTCMinutes()) + " ";  //if no Hours no Mins then don't show
}

function formatSecs(diff) {
    return diff.getUTCSeconds() + " sec" + getAddS(diff.getUTCSeconds());
}

function getAddS(number) {
    if (number != 1)
        return "s";
    else
        return "";
}

function isHoliday(checkDate, extraDaysOff) {
    // check simple dates (month/date - no leading zeroes)
    var n_date = checkDate.getDate(),
    n_month = checkDate.getMonth() + 1;
    var s_date1 = n_month + '/' + n_date;

    if (isEqualDatePortion(checkDate, mardiGrasDate(checkDate.getFullYear()))
    || isEqualDatePortion(checkDate, goodFridayDate(checkDate.getFullYear()))
    ) return true;

    if (s_date1 == '1/1' // New Year's Day
     || s_date1 == '7/4' // Independence Day
     || s_date1 == '12/25' // Christmas Day
     ) return true;

    // weekday from beginning of the month (month/num/day)
    var n_wday = checkDate.getDay(),
    n_wnum = Math.floor((n_date - 1) / 7) + 1;
    var s_date2 = n_month + '/' + n_wnum + '/' + n_wday;

    if (s_date2 == '9/1/1' // Labor Day, first Monday in September
    || s_date2 == '11/4/4' // Thanksgiving Day, fourth Thursday in November
    || s_date2 == '11/4/5' // Day after Thanksgiving, fourth Friday in November
    ) return true;

    // weekday number from end of the month (month/num/day)
    var dt_temp = new Date(checkDate);
    dt_temp.setDate(1);
    dt_temp.setMonth(dt_temp.getMonth() + 1);
    dt_temp.setDate(dt_temp.getDate() - 1);
    n_wnum = Math.floor((dt_temp.getDate() - n_date - 1) / 7) + 1;
    var s_date3 = n_month + '/' + n_wnum + '/' + n_wday;

    if (s_date3 == '5/1/1' // Memorial Day, last Monday in May
    ) return true;


    if (extraDaysOff.length > 0) {
        var dt_extraDay;
        var dt_checkDate = new Date(checkDate.getFullYear(), checkDate.getMonth(), checkDate.getDate());

        for (i = 0; i <= extraDaysOff.length - 1; i++) {
            dt_extraDay = new Date(extraDaysOff[i]);

            if (isEqualDatePortion(dt_checkDate, dt_extraDay))
                return true;
        }
    }

    return false;
}

function isEqualDatePortion(date1, date2) {
    return (date1.getMonth() + '/' + date1.getDay() + '/' + date1.getFullYear() == date2.getMonth() + '/' + date2.getDay() + '/' + date2.getFullYear());
}

function nth(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

function goodFridayDate(Y) {
    // calculates Easter Sunday and subtracts 2 days
    var goodFridayDate;
    var C = Math.floor(Y / 100);
    var N = Y - 19 * Math.floor(Y / 19);
    var K = Math.floor((C - 17) / 25);
    var I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
    I = I - 30 * Math.floor((I / 30));
    I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
    var J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
    J = J - 7 * Math.floor(J / 7);
    var L = I - J;
    var M = 3 + Math.floor((L + 40) / 44);
    var D = L + 28 - 31 * Math.floor(M / 4);
    //
    D = D - 2;  // subtract 2 days for Good Friday
    if (D <= 0) {
        D = D + 31;	// correct day if we went back to March
        M = 3;			// correct month
    }
    goodFridayDate = new Date(Y, parseInt(M - 1, 10), parseInt(D, 10));

    return goodFridayDate;
}

function mardiGrasDate(Y) {
    var goodFridayDt = goodFridayDate(Y);
    return addDays(goodFridayDt, -45);
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}

function isWeekend(checkDate) {
    if (checkDate.getUTCDay() == 6 || checkDate.getUTCDay() == 0)
        return true;
    else
        return false;
}

function thanksgivingDate(Y) {
    var firstDayOfMonth = new Date(Y, 10, 1);
    var thanksgivingDayOfMonth = 0;
    var thanksgivingDayDate;

    if (firstDayOfMonth.getDay() > 4)
        thanksgivingDayOfMonth = 7 - firstDayOfMonth.getDay() + 26;
    else
        thanksgivingDayOfMonth = 7 - firstDayOfMonth.getDay() + 19;

    thanksgivingDayDate = new Date(Y, 10, thanksgivingDayOfMonth);
    return thanksgivingDayDate;
}

function getNewCutoffTime(globalNow, globalCutoff, extraDaysOff, dailyCutoffHours, dailyCutoffMins) {
    var checkStartTommorrow;
    var newCutoffDay;

   // if ((globalNow.getTime() > globalCutoff.getTime()) /* || isHoliday(getCST(globalCutoff), extraDaysOff)*/ || isWeekend(getCST(globalCutoff))) {
	if ((globalNow.getTime() > globalCutoff.getTime())  || isHoliday(getCST(globalCutoff), extraDaysOff) || isWeekend(getCST(globalCutoff))) {
        checkStartTommorrow = new Date(globalCutoff.getFullYear(), globalCutoff.getMonth(), globalCutoff.getDate() + 1);
        newCutoffDay = new Date(nextShippingDate(checkStartTommorrow, extraDaysOff));
        newCutoffDay = getCutoffInUTC(newCutoffDay, dailyCutoffHours, dailyCutoffMins);
    } else {
        newCutoffDay = new Date(globalCutoff);
    }

    return newCutoffDay;
}

function nextShippingDate(checkShipDate, extraDaysOff) {
    var nextShippingDate;
    var newShipDate = new Date(checkShipDate);
    var startDay = checkShipDate.getDate();
    var n = 0;
    var ndx = 0;
    var dayInc = 0;

    //loop thru at least 35 days. no special reason for it, but just want to end after checking reasonable amout of time
    for (n = 0; n <= 35; n++) {

        if ((startDay + dayInc) > lastDayOfMonth(newShipDate)) {
            startDay = 1;
            dayInc = 0;
            ndx = startDay + dayInc;
            newShipDate.setDate(ndx);

            if (newShipDate.getMonth() < 11) {
                newShipDate.setMonth(newShipDate.getMonth() + 1);
            } else {
                newShipDate.setMonth(0);
                newShipDate.setFullYear(newShipDate.getFullYear() + 1)
            }

        } else {
            ndx = startDay + dayInc;
            newShipDate.setDate(ndx);
        }

        if (!(isHoliday(newShipDate, extraDaysOff) || isWeekend(newShipDate))) {
            nextShippingDate = new Date(newShipDate.getFullYear(), newShipDate.getMonth(), newShipDate.getDate());
            break;
        }

        dayInc++;
    }

    return nextShippingDate;
}

function lastDayOfMonth(inDate) {
    //inMonth{0=Jan, 1=Feb, etc.}
    var d = new Date(inDate.getFullYear(), inDate.getMonth() + 1);
    d.setDate(0);
    return d.getDate();
}




function getShippingMessage(diff, nextShip, gblNow) {
    var shipMessage = "";
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var days = diff.getDate() - 1;

    var localNextShip = getLocalTimeFromUTC(nextShip);
    var localGlobalNow = getLocalTimeFromUTC(gblNow);

    if (localGlobalNow.getDay() == localNextShip.getDay() && localGlobalNow.getTime() < localNextShip.getTime()) return shipMessage = "Today";

    if ((days < 7) && (localNextShip.getDay() == 1))   
        return shipMessage = "Monday";

    if (days <= 0 && localGlobalNow.getDay() + 1 == localNextShip.getDay()) return shipMessage = "Tomorrow";
   
    return shipMessage = monthNames[localNextShip.getMonth()] + " " + localNextShip.getDate().toString() + nth(localNextShip.getDate());

}


function getShippingMessage2(diff, nextShip, gblNow) {
    var shipMessage = "";
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var days = diff.getDate() - 1;
    var localNextShip = getLocalTimeFromUTC(nextShip);
    var localGlobalNow = getLocalTimeFromUTC(gblNow);

    if (localGlobalNow.getDay() == localNextShip.getDay() && localGlobalNow.getTime() < localNextShip.getTime()) return shipMessage = "Today";

    if ((days < 7) && (localNextShip.getDay() == 1))   
        return shipMessage = "Monday";

    if (days <= 0 && localGlobalNow.getDay() + 1 == localNextShip.getDay()) return shipMessage = "Tomorrow";
   
    return shipMessage = monthNames[localNextShip.getMonth()] + " " + localNextShip.getDate().toString() + nth(localNextShip.getDate());

}

/*

document.getElementById("cutoff-timer").innerText = "In-Stock orders ship same day M-F if ordered by 2 PM Central.";

document.getElementById("cutoff-text").style.display = "none";

*/ 
