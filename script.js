const countdown = () => {
    const countDate = new Date("April 31, 2022 00:00:00").getTime();
    const now = new Date().getTime()
    const gap = countDate - now;

    // calculating time 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    
    // exact time
    const dayText = Math.floor(gap / day);
    const hourText = Math.floor((gap % day) / hour);
    const minuteText = Math.floor((gap % hour) / minute);
    const secondText = Math.floor((gap % minute) / second);

    // manipulate the countdown
    document.querySelector(".day").innerHTML = dayText;
    document.querySelector(".hour").innerHTML = hourText;
    document.querySelector(".minute").innerHTML = minuteText;
    document.querySelector(".seconds").innerHTML = secondText;
};

setInterval(countdown, 1000);
