
const passwordForm =
    document.getElementById("passwordForm");

const passwordInput =
    document.getElementById("passwordInput");

const messageHistory =
    document.getElementById("messageHistory");

const successMessage =
    document.getElementById("successMessage");

const site2 =
    document.getElementById("site2");


const correctPassword =
    "RAKASTANSINUA";


let attempts = 0;


const errorMessages = [

    "Yritä uudelleen.",

    "Oletko varma? 👀",

    "Hmm... mieti vielä vähän.",

    "Se ei ollut aivan se...",

    "Kirjeessä on vihje.",

    "Minä annoin sinulle jo vihjeen.",

    "Tiedät kyllä vastauksen.",

    "Älä luovuta vielä.",

    "Olet jo niin lähellä...",

    "Mieti tarkemmin.",

    "Kirje yrittää kertoa sinulle jotain.",

    "Sinä tiedät tämän. 😉"
    
];


passwordForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const enteredPassword =
            passwordInput.value
                .trim()
                .replace(/\s+/g, " ")
                .toUpperCase();


        attempts++;


        if (
            enteredPassword === correctPassword
        ) {

            if (attempts <= 2) {

                successMessage.textContent =
                    "AAH!! TIESIN, ETTÄ SAISIT SEN OIKEIN!!";

            } else {

                successMessage.textContent =
                    "Huh! Kaiken tuon pähkäilyn jälkeen onnistuit viimein... Kestipä kauan, vai mitä???";

            }


            site2.classList.add("show");


            passwordInput.disabled = true;


            passwordForm
                .querySelector(".reveal-button")
                .style.display = "none";


            site2.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


        } else {

            const messageIndex =
                Math.min(
                    attempts - 1,
                    errorMessages.length - 1
                );


            const newMessage =
                document.createElement("p");


            newMessage.textContent =
                errorMessages[messageIndex];


            messageHistory.appendChild(
                newMessage
            );


            passwordInput.value = "";

            passwordInput.focus();

        }

    }
);
