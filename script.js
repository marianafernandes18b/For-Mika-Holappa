/* =========================================================
   ELEMENTOS — CONFIRMAÇÃO DA CARTA
   ========================================================= */

const confirmationBox =
    document.querySelector(".confirmation-box");

const confirmationButtons =
    document.querySelectorAll("button");


let yesButton = null;
let noButton = null;


confirmationButtons.forEach(function (button) {

    const text =
        button.textContent.trim();

    if (text === "Kyllä") {
        yesButton = button;
    }

    if (text === "En") {
        noButton = button;
    }

});


/* =========================================================
   ELEMENTOS — PRIMEIRA SENHA
   ========================================================= */

const firstPasswordForm =
    document.getElementById("firstPasswordForm");

const firstPasswordInput =
    document.getElementById("firstPasswordInput");

const firstMessageHistory =
    document.getElementById("firstMessageHistory");

const firstSuccessMessage =
    document.getElementById("firstSuccessMessage");


/* =========================================================
   ELEMENTOS — SEGUNDA SENHA
   ========================================================= */

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


/* =========================================================
   CAIXAS DE CONTEÚDO
   ========================================================= */

const firstPasswordBox =
    document.querySelector(".first-password-box");

const finalSection =
    document.querySelector(".final-section");


/* =========================================================
   MENSAGEM — "AINDA NÃO LEU"
   ========================================================= */

let notReadyMessage =
    document.getElementById("notReadyMessage");


if (!notReadyMessage && noButton) {

    notReadyMessage =
        document.createElement("p");

    notReadyMessage.id =
        "notReadyMessage";

    noButton.parentElement.appendChild(
        notReadyMessage
    );

}


/* =========================================================
   PRIMEIRA SENHA
   ========================================================= */

const firstCorrectPassword =
    "MURUSENI";

let firstAttempts = 0;

const firstMaxAttempts = 3;


/* =========================================================
   SEGUNDA SENHA
   ========================================================= */

const correctPassword =
    "RAKASTAN SINUA";

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


/* =========================================================
   ESTADO INICIAL
   ========================================================= */

if (firstPasswordBox) {
    firstPasswordBox.classList.remove("show");
}

if (finalSection) {
    finalSection.classList.remove("show");
}

if (site2) {
    site2.classList.remove("show");
}


/* =========================================================
   BOTÃO "EN"
   ========================================================= */

if (noButton) {

    noButton.addEventListener(
        "click",
        function () {

            if (notReadyMessage) {

                notReadyMessage.textContent =
                    "Lue kirje ensin.";

                notReadyMessage.classList.add(
                    "show"
                );

            }

        }
    );

}


/* =========================================================
   BOTÃO "KYLLÄ"
   ========================================================= */

if (yesButton) {

    yesButton.addEventListener(
        "click",
        function () {

            if (notReadyMessage) {
                notReadyMessage.textContent = "";
                notReadyMessage.classList.remove(
                    "show"
                );
            }


            if (confirmationBox) {
                confirmationBox.classList.add(
                    "confirmed"
                );
            }


            if (firstPasswordBox) {

                firstPasswordBox.classList.add(
                    "show"
                );


                setTimeout(
                    function () {

                        firstPasswordBox.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    },
                    150
                );

            }

        }
    );

}


/* =========================================================
   PRIMEIRA SENHA — MURUSENI
   ========================================================= */

if (firstPasswordForm) {

    firstPasswordForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (firstAttempts >= firstMaxAttempts) {
                return;
            }


            const enteredFirstPassword =
                firstPasswordInput.value
                    .trim()
                    .replace(/\s+/g, " ")
                    .toUpperCase();


            firstAttempts++;


            /* -------------------------
               SENHA CORRETA
               ------------------------- */

            if (
                enteredFirstPassword ===
                firstCorrectPassword
            ) {

                if (firstSuccessMessage) {

                    firstSuccessMessage.textContent =
                        "Oikein. Nyt voit jatkaa.";

                    firstSuccessMessage.classList.add(
                        "show"
                    );

                }


                firstPasswordInput.disabled =
                    true;


                const firstRevealButton =
                    firstPasswordForm.querySelector(
                        ".reveal-button"
                    );


                if (firstRevealButton) {

                    firstRevealButton.style.display =
                        "none";

                }


                if (finalSection) {

                    finalSection.classList.add(
                        "show"
                    );


                    setTimeout(
                        function () {

                            finalSection.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });

                        },
                        200
                    );

                }


                return;
            }


            /* -------------------------
               SENHA ERRADA
               ------------------------- */

            if (firstMessageHistory) {

                const newMessage =
                    document.createElement("p");


                newMessage.textContent =
                    "Katso kirjettä uudelleen.";


                firstMessageHistory.appendChild(
                    newMessage
                );

            }


            firstPasswordInput.value = "";


            /* -------------------------
               TERCEIRO ERRO
               ------------------------- */

            if (
                firstAttempts >=
                firstMaxAttempts
            ) {

                if (firstMessageHistory) {

                    const lockMessage =
                        document.createElement("p");


                    lockMessage.textContent =
                        "Päivitä sivu ja yritä uudelleen.";


                    firstMessageHistory.appendChild(
                        lockMessage
                    );

                }


                firstPasswordInput.disabled =
                    true;


                const firstRevealButton =
                    firstPasswordForm.querySelector(
                        ".reveal-button"
                    );


                if (firstRevealButton) {

                    firstRevealButton.style.display =
                        "none";

                }


                return;
            }


            firstPasswordInput.focus();

        }
    );

}


/* =========================================================
   SEGUNDA SENHA — RAKASTAN SINUA
   ========================================================= */

if (passwordForm) {

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


            /* -------------------------
               SENHA CORRETA
               ------------------------- */

            if (
                enteredPassword ===
                correctPassword
            ) {

                if (attempts <= 2) {

                    successMessage.textContent =
                        "AAH!! TIESIN, ETTÄ SAISIT SEN OIKEIN!!";

                } else {

                    successMessage.textContent =
                        "Huh! Kaiken tuon pähkäilyn jälkeen onnistuit viimein... Kestipä kauan, vai mitä???";

                }


                successMessage.classList.add(
                    "show"
                );


                site2.classList.add(
                    "show"
                );


                passwordInput.disabled =
                    true;


                const revealButton =
                    passwordForm.querySelector(
                        ".reveal-button"
                    );


                if (revealButton) {

                    revealButton.style.display =
                        "none";

                }


                site2.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


                return;
            }


            /* -------------------------
               SENHA ERRADA
               ------------------------- */

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
    );

}