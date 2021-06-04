// MEETUP API GET REQUEST

// VARIABLES
// const meetUpURL = "https://api.meetup.com/charmcityjs/events?scroll=next_upcoming&page=20&has_ended=false&omit=created,duration,rsvp_limit,date_in_series_pattern,time,updated,utc_offset,waitlist_count"
const meetUpDiv = document.getElementById('upcoming-meetups')

// FETCH DATA
let req = new XMLHttpRequest();

req.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')

req.onload = () => {
    const data = JSON.parse(req.responseText)
    // console.log('data-', data)
    render(data)
}
req.send()

// RENDER DATA FUNCTION
let render = (event) => {
    let meetUpHTML = ""
    for (i = 0; i < event.length; i++){
        meetUpHTML += "<p>" + event[i].name + " is a " + event[i].species + ".</p>"
    }
    meetUpDiv.insertAdjacentHTML('beforeend', meetUpHTML)

}