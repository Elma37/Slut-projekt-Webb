const cardsEl = document.querySelectorAll(".card"); /* Skapar variabel för alla kort som har klassen card*/

const buttonsEl = document.querySelectorAll("button"); /* Skapar en variabel för alla knappar som har elementet button*/

cardsEl.forEach(card => { /* För varje kort ska den gå genom processen att när muspekaren är över den ska korten zoomas in 1.3*/
	card.addEventListener("mouseenter", () => { /* När muspekaren kommmer ovanpå klassen .card händer följande påstående*/
		card.style.transform = "scale(1.3)";
	});

	card.addEventListener("mouseleave", () => { /* När muspekaren lämnar klassen .card händer följande påstående*/
		card.style.transform = "scale(1)";
	});
});

buttonsEl.forEach(button => { /* För varje knapp ska den gå genom processen att när muspekaren är över den ska korten zoomas in 1.3*/
	button.addEventListener("mouseenter", () => { /* När muspekaren kommmer ovanpå knappen händer följande påstående*/
		button.style.transform = "scale(1.3)";
	});
	button.addEventListener("mouseleave", () => { /* När muspekaren lämnar knappen händer följande påstående*/
		button.style.transform = "scale(1.0)";
	});
});