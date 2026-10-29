const today = new Date;
let year = today.getFullYear();

document.getElementById("currentYear").textContent = year;


document.getElementById("lastModified").textContent = `Last Modification: `+ document.lastModified;
