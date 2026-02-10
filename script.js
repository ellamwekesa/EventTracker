const form = document.getElementById("event-form");
const eventList = document.getElementById("event-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

 const season = document.getElementById("season").value;
    const place = document.getElementById("event-name").value;
    const location = document.getElementById("location").value;
    const landmarks = document.getElementById("landmarks").value;

const li = document.createElement("li");
${location}<br>
${landmarks}<br>
${season}<br>
${place}

 eventList.appendChild(li);
 form.reset();

});
