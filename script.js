const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minute");
const secondEL = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function time() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = h >= 12 ? 'PM' : 'AM';
    let hour = h % 12 || 12;

    hour = hour < 10 ? '0' + hour : hour;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hourEL.innerText = hour;
    minuteEL.innerText = m;
    secondEL.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(() => {
        time()
    }, 1000)
}

time()
