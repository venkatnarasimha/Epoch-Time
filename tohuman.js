const yr = document.querySelector('.year');
const mm = document.querySelector('.month');
const dd = document.querySelector('.dates');
const hh = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');
const but1 = document.querySelector('.butepoch');
const epochOutput = document.querySelector('.outputEpoch');
const but2 = document.querySelector('.buthuman');
const humanOutput = document.querySelector('.outputHuman');
const epochinput = document.querySelector('.epochs');

function toHumanDate(epoch) {
    const epochdate = new Date((epoch / 1000) * 1000);
    const date = epochdate.getDate();
    const month = epochdate.getMonth() + 1;
    const year = epochdate.getFullYear();
    const hours = epochdate.getHours();
    const minutes = epochdate.getMinutes();
    const seconds = epochdate.getSeconds();
    const fullDate = `${date}/${month}/${year},${hours}:${minutes}:${seconds}`;
    return fullDate;
}

function toEpochDate() {
    const humanDate = new Date(`${mm.value} ${dd.value}, ${yr.value} ${hh.value}:${min.value}:${sec.value}`);
    console.log(`${mm.value} ${dd.value}, ${yr.value} ${hh.value}:${min.value}:${sec.value}`);
    const toEpoch = humanDate.getTime();
    return toEpoch;
}

but2.addEventListener('click', () => {
    const result = toHumanDate(epochinput.value);
    humanOutput.value = result;
});

but1.addEventListener('click', () => {
    const result = toEpochDate();
    epochOutput.value = result;
});

function startTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    const yrs = date.getFullYear();
    const mon = date.getMonth() + 1;
    const dt = date.getDate();
    let session = 'AM';

    if (h === 0) {
        h = 12;
    }

    if (h > 12) {
        h -= 12;
        session = 'PM';
    }

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    const finalTime = `${h} : ${m} : ${s} ${session}`;
    const today = `${dt}-${mon}-${yrs}`;
    const epochTime = Math.round(Date.now() / 1000);
    document.querySelector('.epoch').innerHTML = epochTime;
    document.querySelector('.date').innerHTML = today;
    document.querySelector('.time').innerHTML = finalTime;
    setInterval(startTime, 1000);
}

window.addEventListener('load', () => {
    startTime();
});
