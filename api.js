const baseURL = 'https://api.nasa.gov/'

function getData(endpoint=''){
    let api_key = document.getElementById('apiKey').value
    let date_filter = document.getElementById('dateInput').value
    if(!date_filter) date_filter = "2020-02-06"
    fetch(baseURL + endpoint + '?api_key=' + api_key + '&date=' +date_filter)
    .then(res => res.json())
    .then(data => {
        for (const [key, value] of Object.entries(data)) {
            if (key === 'url')
                drawImage(value)
            else
                writeData(key, value) 
        }

    })}

function writeData(key, value) {
    if(key === "explanation") {
        var existing_txt = document.getElementById('exp_txt')
        if(existing_txt) existing_txt.remove()
        let x = document.createElement("div")
        let data = document.createTextNode(value)
        x.setAttribute("id", "exp_txt")
        x.appendChild(data)
        document.getElementById("explanation").appendChild(x)
    }

    if(key === "title") document.getElementById("details_title").textContent=value
    if(key === "date") document.getElementById("details_date").textContent=' / ' + value
}

function drawImage(img_src) {
    var existing_img = document.getElementById('apotd_img')
    if(existing_img) existing_img.remove()
    var x = document.createElement("a")
    var img = document.createElement("IMG")
    x.setAttribute("id", "apotd_img")
    x.setAttribute("href", img_src)
    x.setAttribute("target", "_blank")
    img.setAttribute("src", img_src)
    x.appendChild(img)
    document.getElementById("content").appendChild(x)
}





