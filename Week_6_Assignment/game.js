let trials = 0;
let correctAnswers = 0;
let hintUses = 0;
const maxHints = 3;

// List of African countries and their capitals
const africanCountries = {
  Algera: "Algiers",
  Angola: "Luanda",
  Benin: "Porto-Novo",
  Botswana: "Gaborone",
  "Burkina Faso": "Ouagadougou",
  Burundi: "Bujumbura",
  Cameroon: "Yaounde",
  "Cape Verde": "Praia",
  "Central African Republic": "Bangui",
  Chad: "N'Djamena",
  Comoros: "Moroni",
  Congo: "Brazzaville",
  "Ivory Coast": "Yamoussoukro",
  Djibouti: "Djibouti",
  Egypt: "Cairo",
  "Equatorial Guinea": "Malabo",
  Eritrea: "Asmara",
  Ethiopia: "Addis Ababa",
  Gabon: "Libreville",
  Gambia: "Banjul",
  Ghana: "Accra",
  Guinea: "Conakry",
  "Guinea-Bissau": "Bissau",
  Kenya: "Nairobi",
  Lesotho: "Maseru",
  Liberia: "Monrovia",
  Libya: "Tripoli",
  Madagascar: "Antananarivo",
  Malawi: "Lilongwe",
  Mali: "Bamako",
  Mauritania: "Nouakchott",
  Mauritius: "Port louis",
  Mayotte: "Bzaoudzi and Mamoudzou",
  Morocco: "Rabat",
  Mozambique: "Maputo",
  Namibia: "Windhoek",
  Niger: "Niamey",
  Nigeria: "Abuja",
  Reunion: "Saint-Denis",
  Rwanda: "Kigali",
  "Sao Tome and Principe": "Sao Tome",
  Senegal: "Dakar",
  Seychelles: "Victoria",
  "Sierra Leone": "Freetown",
  Somalia: "Mogadishu",
  "South Africa": "Pretoria",
  "St Helena": "Jamestown",
  Swaziland: "Mbabane and Lobamba",
  Tanzania: "Dar es Salaam",
  Togo: "Lome",
  Tunisia: "Tunis",
  Uganda: "Kampala",
  Zambia: "Lusaka",
  Zimbabwe: "Harare",
};

// Function to start the game
function startGame() {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
}

// Function to submit the user's guess
function submitAnswer() {
  const countryInput = document.getElementById("country");
  const capitalInput = document.getElementById("capital");

  const countryValue = countryInput.value.trim();
  const capitalValue = capitalInput.value.trim();

  trials++; // Increment total trials

  if (
    africanCountries[countryValue] &&
    africanCountries[countryValue].toLowerCase() === capitalValue.toLowerCase()
  ) {
    correctAnswers++; // Increment correct answers if answer is correct
    document.getElementById(
      "feedback"
    ).innerText = `Correct! ${countryValue}'s capital is ${capitalValue}.`;

    // Check if the player has reached 40 correct answers
    if (correctAnswers >= 40) {
      document.getElementById("feedback").innerText =
        "Congratulations! You've scored 40 or more correct answers!";
    }
  } else {
    document.getElementById("feedback").innerText = "Incorrect! Try again.";
  }

  // Update the display of correct answers and total trials
  document.getElementById(
    "trial-count"
  ).innerText = `${correctAnswers} / ${trials}`;

  // Clear the input fields for the next attempt
  countryInput.value = "";
  capitalInput.value = "";
}

// Function to display hint
function useHint() {
  const hintButton = document.querySelector('button[onclick="useHint()"]'); // Select the Hint button

  if (hintUses < maxHints) {
    const hintList = document.getElementById("hint-list");
    hintList.innerHTML = ""; // Clear previous hint list

    // Populate the hint list with African countries and their capitals
    for (const [country, capital] of Object.entries(africanCountries)) {
      const listItem = document.createElement("li");
      listItem.innerText = `${country}: ${capital}`;
      hintList.appendChild(listItem);
    }

    document.getElementById("hint-section").style.display = "block"; // Show hint section
    hintUses++;

    // Hide the hint section after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      document.getElementById("hint-section").style.display = "none";
    }, 3000);

    // Disable the button if the max hint uses have been reached
    if (hintUses >= maxHints) {
      hintButton.innerText = "Don't cheat";
      hintButton.disabled = true;
    }
  } else {
    hintButton.innerText = "Don't cheat";
    hintButton.disabled = true;
  }
}

// Function to end the game
function endGame() {
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("end-screen").style.display = "block";
}
