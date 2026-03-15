const username = "HuyChung"

async function getData(feed){

    const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed}`

    const response = await fetch(url)
    const data = await response.json()

    return data.last_value
}

async function updateData(){

    const temp = await getData("temperature")
    const soil = await getData("soil")
    const light = await getData("light")

    document.getElementById("temp").innerText = temp
    document.getElementById("soil").innerText = soil
    document.getElementById("light").innerText = light
}

setInterval(updateData,3000)
updateData()
