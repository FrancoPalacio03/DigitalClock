function ShowClock(){
    let date=new Date();
    let hr=hrformat(date.getHours());
    let min=hrformat(date.getMinutes());
    let sec=hrformat(date.getSeconds());
    document.getElementById("hour").innerHTML=`${hr}:${min}:${sec}`;

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let actualMonth=months[date.getMonth()];
    let actualDay=days[date.getDay()];

    let finalDate=`${actualDay}, ${actualMonth} ${date.getDate()} ${date.getFullYear()}`;
    document.getElementById("date").innerHTML=finalDate;
}

function hrformat(hr){
    if(hr<10)
        hr='0'+hr;
    return hr;
}
setInterval(ShowClock, 1000);