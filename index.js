const cardNumber = "2200 7005 4256 4561";

        function copyCardNumber() {
            navigator.clipboard.writeText(cardNumber).then(() => {
                const popup = document.getElementById("popup");
                popup.classList.add("show");

                setTimeout(() => {
                    popup.classList.remove("show");
                }, 3000);
            }).catch((err) => {
                console.error("Не удалось скопировать текст: ", err);
            });
        }