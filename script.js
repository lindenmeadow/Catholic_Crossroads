const yesterday = document.querySelector('.yesterday')
const today = document.querySelector('.today')
const tomorrow = document.querySelector('.tomorrow')
document.addEventListener('DOMContentLoaded', getYesterday)
document.addEventListener('DOMContentLoaded', getToday)
document.addEventListener('DOMContentLoaded', getTomorrow)

function getYesterday() {
    fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/yesterday', {
        headers: {
            'Accept': 'application/json'
        } 
    }).then(data => data.json())
      .then(obj => yesterday.innerHTML = `${obj.date}<br>${obj.celebrations[0].title} ${obj.celebrations[1] !== undefined ? "<br>" + obj.celebrations[1].rank.charAt(0).toUpperCase() + obj.celebrations[1].rank.slice(1) + " of" : ""} ${obj.celebrations[1] !== undefined ? obj.celebrations[1].title : ""}<br>Liturgical Color: ${obj.celebrations[1] !== undefined ? obj.celebrations[1].colour : obj.celebrations[0].colour}`)
}

function getToday() {
    fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today', {
        headers: {
            'Accept': 'application/json'
        } 
    }).then(data => data.json())
      .then(obj => today.innerHTML = `${obj.date}<br>${obj.celebrations[0].title} ${obj.celebrations[1] !== undefined ? "<br>" +  obj.celebrations[1].rank.charAt(0).toUpperCase() + obj.celebrations[1].rank.slice(1) + " of" : ""} ${obj.celebrations[1] !== undefined ? obj.celebrations[1].title : ""}<br>Liturgical Color: ${obj.celebrations[1] !== undefined ? obj.celebrations[1].colour : obj.celebrations[0].colour}`)
}

function getTomorrow() {
    fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/tomorrow', {
        headers: {
            'Accept': 'application/json'
        } 
    }).then(data => data.json())
      .then(obj => tomorrow.innerHTML = `${obj.date}<br>${obj.celebrations[0].title} ${obj.celebrations[1] !== undefined ? "<br>" + obj.celebrations[1].rank + "of" : ""} ${obj.celebrations[1] !== undefined ? obj.celebrations[1].title : ""}<br>Liturgical Color: ${obj.celebrations[1] !== undefined ? obj.celebrations[1].colour : obj.celebrations[0].colour}`)
}
