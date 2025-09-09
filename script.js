let vexDays = [
    "2025-8-16",
    "2025-9-16",
    "2025-9-23",
    "2025-9-30",
    "2025-10-7",
    "2025-10-14",
    "2025-10-21",
    "2025-10-28",
    "2025-11-4",
    "2025-11-11",
    "2025-11-18",
    "2025-12-2",
    "2025-12-9",
    "2025-12-16",
    "2026-1-6",
    "2026-1-13",
    "2026-1-20",
    "2026-1-27",
    "2026-2-3",
    "2026-2-10",
    "2026-2-17",
];

let months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec."
];

let today = new Date();
let dd = String(today.getDate());
let mm = String(today.getMonth());
let yyyy = today.getFullYear();
let todaystr = yyyy + '-' + mm + '-' + dd;

for (let v of vexDays){
    console.log(v);
    console.log(todaystr);
    if (todaystr === v){
        document.getElementById('yes').classList.remove('hidden');
        document.getElementById('no').classList.add('hidden');
        break;
    }else{
        document.getElementById('yes').classList.add('hidden');
        document.getElementById('no').classList.remove('hidden');
        break;
    }
}

for (v of vexDays){
    let nextDate = new Date(v);
    console.log(nextDate);
    if (nextDate > today){
        console.log(nextDate);
        console.log(nextDate.getMonth() + 1);
        console.log(nextDate.getDay());
        document.getElementById('next').innerText = `${months[nextDate.getMonth()]} ${nextDate.getDate()}`;
        break;
    }
}