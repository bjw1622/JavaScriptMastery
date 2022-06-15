const $date = document.querySelector('#date');
const christmas = new Date(2022, 12, 25);



setInterval(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth()+1;
    const day = now.getDate();
    const nowDate = new Date(year,month,day);
    const bt = christmas.getTime() - nowDate.getTime();
    const btDay = bt/(1000*60*60*24);

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    $date.innerHTML = `${btDay}d`;
    $date.innerHTML += ` ${24 - hours}h ${60 - minutes}m ${ 60-seconds}s`
}, 1000);