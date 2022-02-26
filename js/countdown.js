

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const months = document.querySelector('#months');

const currentYear = new Date().getFullYear();

const meTime = new Date(`February 28 ${currentYear} 13:00:00`);

function updateCountDowntime() {
    const currentTime = new Date();
    const timeLeft =  meTime - currentTime;

    const month = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 28));
    const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeLeft % (1000 * 60 * 60 )) / (1000 * 60 * 60));
    const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const s = Math.floor((timeLeft % (1000 * 60)) / 1000);

months.innerHTML = month;
days.innerHTML = d;
hours.innerHTML = h < 10 ? '0' + h : h;
minutes.innerHTML = m < 10 ? '0' + m : m;
seconds.innerHTML = s < 10 ? '0' + s : s;
}

updateCountDowntime();

setInterval(updateCountDowntime, 1000);

