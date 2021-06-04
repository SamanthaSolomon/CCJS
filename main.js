// MEETUP API GET REQUEST

// VARIABLES
// const meetUpURL = "https://api.meetup.com/charmcityjs/events?scroll=next_upcoming&page=20&has_ended=false&omit=created,duration,rsvp_limit,date_in_series_pattern,time,updated,utc_offset,waitlist_count"
const meetUpDiv = document.getElementById('upcoming-meetups')

// FETCH DATA
let req = new XMLHttpRequest();

req.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')

req.onload = () => {
    if (req.status >= 200 && req.status < 400){
        const data = JSON.parse(req.responseText)
        // console.log('data-', data)
        render(data)
    } else {
        console.log("error")
        //need to add error message
    }    
}

req.onerror = () => {
    console.log ("error")
    //need to add error message
}

req.send()

// RENDER DATA FUNCTION
let render = (event) => {
    let meetUpHTML = ""
    for (i = 0; i < event.length; i++){
        meetUpHTML += "<p>" + event[i].name + " is a " + event[i].species + " that likes to eat " 
        
        for (x = 0; x < event[i].foods.likes.length; x++){
            meetUpHTML += event[i].foods.likes[x]
        }
        
        meetUpHTML += ".</p>"
    }
    meetUpDiv.insertAdjacentHTML('beforeend', meetUpHTML)

}