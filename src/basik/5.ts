enum Weekend {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  function isWeekend(day: Weekend): boolean {
    return day === Weekend.Saturday || day === Weekend.Sunday;
  }