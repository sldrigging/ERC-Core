function orderShipBy() {
  function nth(d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  const partNumbersDropShip = [
    "94710002",
    "94710004",
    "94710006",
    "94710008",
    "94710010",
    "94710012",
    "94710014",
    "94710016",
    "94710018",
    "94710020",
    "94710022",
    "94710024",
    "94710026",
    "94710028",
    "94710030",
    "94710032",
    "94710034",
    "94710036",
    "94710038",
    "94710040",
    "94710042",
    "94710044",
    "94710046",
    "94710048",
    "94710050",
    "94710052",
    "94710054",
    "94710056",
    "94710058",
    "94710060",
    "94710062",
    "94710064",
    "94711002",
    "94711004",
    "94711006",
    "94711008",
    "94711010",
    "94711012",
    "94711014",
    "94711016",
    "94711018",
    "94711020",
    "94711022",
    "94711024",
    "94711026",
    "94711028",
    "94711030",
    "94711032",
    "94711034",
    "94712002",
    "94712004",
    "94712006",
    "94712008",
    "94712010",
    "94712012",
    "94712014",
    "94712016",
    "94712018",
    "94712020",
    "94712022",
    "94712024",
    "94712026",
    "94712028",
    "94712030",
    "94712032",
    "94712034",
    "94712036",
    "94712038",
    "94712040",
    "94712042",
    "94712044",
    "94713002",
    "94713004",
    "94713006",
    "94713008",
    "94713010",
    "94713012",
    "94713014",
    "94713016",
    "94713018",
    "94713020",
    "94713022",
    "94713024",
    "94713026",
    "94718002",
    "94718004",
    "94718006",
    "94718008",
    "94718010",
    "94718012",
    "94718014",
    "94718016",
    "94718018",
    "94718020",
    "94718022",
    "94718024",
    "94718026",
    "94718028",
    "94718030",
    "94718032",
    "94718034",
    "94718036",
    "94718038",
    "94718040",
    "94718042",
    "94718044",
    "94718046",
    "94718048",
    "94718050",
    "94718052",
    "94718054",
    "94718056",
    "94718058",
    "94719002",
    "94719004",
    "94719006",
    "94719008",
    "94719010",
    "94719012",
    "94719014",
    "94719016",
    "94719018",
    "94719020",
    "94719022",
    "94719024",
    "94719026",
    "94719028",
    "94719030",
    "94720002",
    "94720004",
    "94720006",
    "94720008",
    "94720010",
    "94720012",
    "94720014",
    "94720016",
    "94720018",
    "94720020",
    "94720022",
    "94720024",
    "94720026",
    "94720028",
    "94720030",
    "94720032",
    "94720034",
    "94720036",
    "94720038",
    "94720040",
    "94720042",
    "94720044",
    "94720046",
    "94720048",
    "94721002",
    "94721004",
    "94721006",
    "94721008",
    "94721010",
    "94721012",
    "94721014",
    "94721016",
    "94721018",
    "94721020",
    "94721022",
    "94721024",
    "94721026",
    "94721028",
    "94722002",
    "94722004",
    "94722006",
    "94722008",
    "94722010",
    "94722012",
    "94722014",
    "94722016",
    "94722018",
    "94722020",
    "94722022",
    "94722024",
    "94722026",
    "94722028",
    "94722030",
    "94723002",
    "94723004",
    "94723006",
    "94723008",
    "94723010",
    "94723012",
    "94737002",
    "94737004",
    "94737006",
    "94737008",
    "94737010",
    "94737012",
  ];

  let partNumber = document.getElementById("product_id");
  if (partNumber) {
    // Checks if a product id exists before setting id
    partNumber = partNumber.innerHTML;
  }

  // These are blackout dates. Add Date in this format "1/11/2021" in case you want to add more blackout days/holidays 
  const blackoutDays = [
    "1/1/2021",
    "2/16/2021",
    "4/2/2021",
    "5/31/2021",
    "7/4/1021",
    "9/6/2021",
    "11/24/2021",
    "11/25/2021",
    "12/23/2021",
    "12/24/2021",
  ];
  // Date wrapper for manipulation of dates/times see documentation https://moment.github.io/luxon/docs/index.html
  const DT = luxon.DateTime.local().setZone("America/Chicago"); // Sets Luxon method to variable with correct time zone
  
  let ordinal;
  let shippingMessage;
  let dayNumber;
  const date = DT.toLocaleString(); // => "1/11/2021"
  const day = DT.weekday; // => 2
  const hour = DT.hour; // => 14
  const tomorrow = DT.plus({ days: 1 }).toLocaleString();
  const twoDaysAhead = DT.plus({ days: 2 }).toLocaleString();
  const cutoffDay = document.getElementById("cutoff-day"); // DOM element to insert shipping message

  switch (true) {
    // If product id is included in the drop ship list add days and check for holiday
    case partNumbersDropShip.includes(partNumber):
      // Option to set additional days for future dropship groups -> duplicate case and change additional days
      let additionalDays = hour > 13 ? 2 : 1; // if 2pm or later add 2 days otherwise add 1 day
      let dayToCheckForHoliday = DT.plus({ days: additionalDays });

      // check if next 2 shipping dates are holiday/blackout
      // If the next shipping day is holiday adds a day to dayToCheck and additionalDays
      blackoutDays.includes(dayToCheckForHoliday.toLocaleString())
        ? (dayToCheckForHoliday = dayToCheckForHoliday.plus({ days: 1 })) &&
          additionalDays++
        : null;
      // If after adding a day the following day is holiday, add another additionalDay
      blackoutDays.includes(dayToCheckForHoliday.toLocaleString())
        ? additionalDays++
        : null;

      // Calculate next ship date
      let nextShipDate = DT.plus({ days: additionalDays });
      // checks if next shipping day is weekend => Ships Monday
      if (nextShipDate.weekday > 5 ) {
        shippingMessage = "Ships Monday";
        return (cutoffDay.innerText = shippingMessage);
      }
      
      if (day === 4 && additionalDays === 2) {
        shippingMessage = "Ships Monday";
        return (cutoffDay.innerText = shippingMessage);
      }

      if (additionalDays === 1) {
        shippingMessage = "Ships Tomorrow";
        return (cutoffDay.innerText = shippingMessage);
      }
      // Day it ships as string => January 11
      shipDayString = nextShipDate.toLocaleString({
        month: "long",
        day: "numeric",
      });
      dayNumber = shipDayString.split(" ")[1]; // Grabs day number from string
      ordinal = nth(dayNumber); // Finds correct ordinal th, rd, nd, st

      shippingMessage = `Ships ${shipDayString}${ordinal}`;
      return (cutoffDay.innerText = shippingMessage);

    // ==================================================== \\
    // Two Day Holiday => The day it will ship
    case blackoutDays.includes(date) && blackoutDays.includes(tomorrow):
      // If the two day Holiday is a Thursday
      if (day === 4) {
        shippingMessage = "Ships Monday";
        return (cutoffDay.innerText = shippingMessage);
      }
      // Adds two days and formats ouput => January 8
      let nextShippingDate = DT.plus({ days: 2 }).toLocaleString({
        month: "long",
        day: "numeric",
      });
      dayNumber = nextShippingDate.split(" ")[1];
      ordinal = nth(dayNumber);
      shippingMessage = `Ships ${nextShippingDate}${ordinal}`;

      return (cutoffDay.innerText = shippingMessage);

    // Blackout Day
    case blackoutDays.includes(date):
      // Holiday is on a friday => Ships Monday
      if (day === 5) {
        shippingMessage = "Ships Monday";
        return (cutoffDay.innerText = shippingMessage);
      }

      shippingMessage = "Ships Tomorrow";
      return (cutoffDay.innerText = shippingMessage);

    // After 2pm next 2 days are Holiday
    case hour > 13 &&
      blackoutDays.includes(tomorrow) &&
      blackoutDays.includes(twoDaysAhead):
      // If monday or tuesday ships in 3 days
      if (day < 3) {
        let nextShippingDate = DT.plus({ days: 3 }).toLocaleString({
          month: "long",
          day: "numeric",
        });
        dayNumber = nextShippingDate.split(" ")[1];
        ordinal = nth(dayNumber);
        shippingMessage = `Ships ${nextShippingDate}${ordinal}`;
        return (cutoffDay.innerText = shippingMessage);
      }
      shippingMessage = "Ships Monday";
      return (cutoffDay.innerText = shippingMessage);

    // Next day is holiday edge cases
    case blackoutDays.includes(tomorrow):
      // After 2 on Thursday Next day is holiday
      if (hour > 13 && day > 4) {
        shippingMessage = "Ships Monday";
        return (cutoffDay.innerText = shippingMessage);
      }
      // // After 2pm next Day is Holiday
      if (hour > 13 && day < 4) {
        let nextShippingDate = DT.plus({ days: 2 }).toLocaleString({
          month: "long",
          day: "numeric",
        });
        dayNumber = nextShippingDate.split(" ")[1];
        ordinal = nth(dayNumber);

        shippingMessage = `Ships ${nextShippingDate}${ordinal}`;
        return (cutoffDay.innerText = shippingMessage);
      }

      shippingMessage = "Ships Today";
      return (cutoffDay.innerText = shippingMessage);
    // if M - W after 2 ships following date

    // M - F before 2pm => Ships today within [time remaining]
    case day <= 5 && hour <= 13:
      shippingMessage = "Ships Today";
      // Set Countdown to 2pm
      createCountdown();
      return (cutoffDay.innerText = shippingMessage);

    // M - T After 2pm => Ships Tomorrow
    case day <= 4 && hour > 13:
      shippingMessage = "Ships Tomorrow";
      return (cutoffDay.innerText = shippingMessage);

    // Friday after 2 - Sun => Ships Monday
    case day > 4 && hour > 13:
      shippingMessage = "Ships Monday";
      return (cutoffDay.innerText = shippingMessage);

    default:
      break;
  }
  return shippingMessage;
}

// Countdown timer till 2pm
function createCountdown() {
  let twoPM = luxon.DateTime.fromObject({ hour: 14, zone: "America/Chicago" });
  let now; // Current time - has to be initialized inside the interval
  let clock = document.getElementById("cutoff-timer"); // Countdown Clock DOM element
  let timerMsg = document.getElementById("cutoff-text");
  let countdown = setInterval(function () {
    now = luxon.DateTime.local().setZone("America/Chicago");
    // Calculate time between now and 2pm and formats output
    let timeRemaining = luxon.Interval.fromDateTimes(now, twoPM)
      .toDuration(["hours", "minutes", "seconds"])
      .toObject();
    timerMsg.innerText = "If you order in the next";
    clock.innerText = `${timeRemaining.hours} hours ${
      timeRemaining.minutes
    } minutes ${Math.floor(timeRemaining.seconds)} seconds`;

    // At 2 pm clear countdown and get next shipping date
    if (now.hour == 14) {
      clearInterval(countdown);

      let newDate = orderShipBy();
      cutoffDay.innerText = newDate;
      clock.style.display = "none";
      timerMsg.style.display = "none";
    }
  }, 1000);
}

orderShipBy();
