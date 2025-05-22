let array = [];
let start = 0;
let end = 10;
let last_mon_mar = 0;

const current_date = new Date();

function get_next_mon_mar(x) {
    let date = current_date;

    x += last_mon_mar;
    while (date.getDay() !== 1) {
        date = new Date(current_date.getFullYear() + x, 2, 3);
        x++;
    }
    last_mon_mar = x;
    array.push(date);
}

function loop_mon_mar() {
    for (; start < end; start++) {
        get_next_mon_mar(start + 1);
    }
}

loop_mon_mar();

const next_mon_mar = document.getElementById("next_mon_mar");
next_mon_mar.innerText = array[0].toDateString();

const how_much_mon_mars = document.getElementById("how_much_mon_mars");
how_much_mon_mars.innerText = array.length - 1;

const mon_mars = document.getElementById("mon_mars");
for (let i = 1; i < array.length; i++) {
    const date_element = document.createElement("h2");
    date_element.innerText = array[i].toDateString();
    mon_mars.append(date_element);
}
