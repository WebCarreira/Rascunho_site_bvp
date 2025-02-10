// Calendário de eventos
document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("monthYear");
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const events = {
        "2025-02-14": "Dia dos Namorados ❤️",
        "2025-03-08": "Dia da Mulher 👩‍🦰",
        "2025-04-25": "Dia da Liberdade 🇵🇹",
        "2025-05-18": "Apresentação do Projecto",
        "2025-12-25": "Natal 🎄"
    };

    function generateCalendar(year, month) {
        calendar.innerHTML = "";
        monthYear.textContent = new Date(year, month).toLocaleString("pt-PT", {
            month: "long",
            year: "numeric"
        });

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            calendar.appendChild(emptyCell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = day;

            const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            if (events[dateKey]) {
                const eventElement = document.createElement("div");
                eventElement.classList.add("event");
                eventElement.textContent = events[dateKey];
                dayElement.appendChild(eventElement);
            }

            const today = new Date();
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayElement.classList.add("today");
            }

            calendar.appendChild(dayElement);
        }
    }

    prevMonthBtn.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentYear, currentMonth);
    });

    nextMonthBtn.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentYear, currentMonth);
    });

    generateCalendar(currentYear, currentMonth);
});

// Sub-Menus
document.addEventListener("DOMContentLoaded", function() {
    let sobreMenu = document.querySelector(".menu_sobre");
    let subMenu1 = document.querySelector(".sub_menu1");
    let subMenu2 = document.querySelector(".sub_menu2");
    let companhiasMenu = document.querySelector(".sub_menu1 li:first-child");

    let timer1, timer2;

    // Mostrar o primeiro submenu (Sobre)
    sobreMenu.addEventListener("mouseenter", function() {
        clearTimeout(timer1);
        subMenu1.style.display = "block";
    });

    sobreMenu.addEventListener("mouseleave", function() {
        timer1 = setTimeout(() => {
            subMenu1.style.display = "none";
        }, 300); // Tempo de espera antes de fechar
    });

    // Mostrar o submenu de companhias
    companhiasMenu.addEventListener("mouseenter", function() {
        clearTimeout(timer2);
        subMenu2.style.display = "block";
    });

    companhiasMenu.addEventListener("mouseleave", function() {
        timer2 = setTimeout(() => {
            subMenu2.style.display = "none";
        }, 300);
    });

    // Evitar que os submenus desapareçam imediatamente ao interagir com eles
    subMenu1.addEventListener("mouseenter", function() {
        clearTimeout(timer1);
    });

    subMenu1.addEventListener("mouseleave", function() {
        timer1 = setTimeout(() => {
            subMenu1.style.display = "none";
        }, 300);
    });

    subMenu2.addEventListener("mouseenter", function() {
        clearTimeout(timer2);
    });

    subMenu2.addEventListener("mouseleave", function() {
        timer2 = setTimeout(() => {
            subMenu2.style.display = "none";
        }, 300);
    });
});