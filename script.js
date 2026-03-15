const username = "HuyChung";

async function getData(feed){
    const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed}/data/last`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        return data.value;
    }
    catch(error){
        console.log("Lỗi đọc dữ liệu:",error);
        return "--";
    }
}

async function updateData(){

    const temp = await getData("temperature");
    const soil = await getData("soil");
    const light = await getData("light");

    document.getElementById("temp").innerText = temp + " °C";
    document.getElementById("soil").innerText = soil + " %";
    document.getElementById("light").innerText = light;
}

setInterval(updateData,3000);
updateData();
