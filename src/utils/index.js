export const upcomingConcertDates = concerts => {
  let concertArray = []

  // Concat concert dates
  concerts.forEach(item => (concertArray = [...concertArray, ...item.concert]))

  // Sorts concerts by date
  let sortedDates = concertArray.sort((a, b) => {
    let dateA = new Date(a.date),
      dateB = new Date(b.date)

    return dateA - dateB
  })

  return sortedDates
    .filter(date => {
      return new Date(date.date) > new Date()
    })
    .slice(0, 3)
}

export const getDay = date => {
  let d = new Date(date)
  let day = d.getDate()

  return day
}

export const getOrdinal = date => {
  let d = new Date(date)
  const nth = n => {
    return ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th"
  }

  return nth(d)
}

export const getMonth = (date, length) => {
  let d = new Date(date)
  let month = d.toLocaleString("default", { month: length })

  return month
}

export const formatTime = (date) => {
  // formats a javascript Date object into a 12h AM/PM time string
  let d = new Date(date)
  var hour = d.getHours();
  var minute = d.getMinutes();
  var amPM = (hour > 11) ? "pm" : "am";
  if(hour > 12) {
    hour -= 12;
  } else if(hour === 0) {
    hour = "12";
  }
  if(minute < 10) {
    minute = "0" + minute;
  }
  return hour + ":" + minute + amPM;
}