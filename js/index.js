const cardsEl = document.querySelectorAll(".card"); /* Skapar variabel för alla kort som har klassen card*/

cardsEl.forEach(card => { /* För varje kort ska den gå genom processen att när muspekaren är över den ska korten zoomas in 1.05*/
	card.addEventListener("mouseenter", () => { /* När muspekaren kommmer ovanpå klassen .card händer följande påstående*/
		card.style.transform = "scale(1.05)";
	});

	card.addEventListener("mouseleave", () => { /* När muspekaren lämnar klassen .card händer följande påstående*/
		card.style.transform = "scale(1)";
	});
});