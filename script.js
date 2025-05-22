let array = [];
let start = 0;
let end = 10;
let last_wed_apr = 0;

const current_date = new Date();

function get_next_wed_apr(x) {
    let date = current_date;

    x += last_wed_apr;
    while (date.getDay() !== 1) {
        date = new Date(current_date.getFullYear() + x, 4, 2);
        x++;
    }
    last_wed_apr = x;
    array.push(date);
}

function loop_wed_apr() {
    for (; start < end; start++) {
        get_next_wed_apr(start + 1);
    }
}

loop_wed_apr();

const next_wed_apr = document.getElementById("next_wed_apr");
next_wed_apr.innerText = array[0].toDateString();

const how_much_wed_aprs = document.getElementById("how_much_wed_aprs");
how_much_wed_aprs.innerText = array.length - 1;

const wed_aprs = document.getElementById("wed_aprs");
for (let i = 1; i < array.length; i++) {
    const date_element = document.createElement("h2");
    date_element.innerText = array[i].toDateString();
    wed_aprs.append(date_element);
}
