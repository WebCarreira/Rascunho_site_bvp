const calendarElement = document.getElementById("calendar");
const monthYearElement = document.getElementById("monthYear");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");

let currentDate = new Date();

const events = {
    "2025-02-14": "Dia dos Namorados",
    "2025-02-20": "Reunião da Equipa",
    "2025-05-18": "Lançamento do Projeto",
    "2025-03-10": "Evento Corporativo",
};

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    monthYearElement.textContent = currentDate.toLocaleString("pt-BR", { month: "long", year: "numeric" });
    
    calendarElement.innerHTML = "";
    
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("day");
        calendarElement.appendChild(emptyCell);
    }

    for (let day = 1; day <= totalDays; day++) {
        const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;

        if (events[dateString]) {
            const eventElement = document.createElement("div");
            eventElement.classList.add("event");
            eventElement.textContent = events[dateString];
            dayElement.appendChild(eventElement);
        }

        calendarElement.appendChild(dayElement);
    }
}

prevMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
