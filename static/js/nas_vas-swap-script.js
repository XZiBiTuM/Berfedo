
        document.addEventListener("DOMContentLoaded", function() {
            const wordElement = document.getElementById("word");
            const caretElement = document.getElementById("caret");
            const nasLetters = ['n', 'á', 'š', '?'];
            const vasLetters = ['v', 'á', 'š', '?'];
            let letters = [...nasLetters];
            let originalLetters = [...nasLetters];
            let index = 0;
            let isNas = true;

            function removeLetter() {
                if (index < letters.length) {
                    if (index === letters.length - 1) {
                        caretElement.style.display = 'inline-block';
                    }
                    letters[index] = '';
                    wordElement.innerHTML = letters.join('');
                    index++;
                    setTimeout(removeLetter, 100);
                } else {
                    setTimeout(typeLetters, 500); // Начать печатать через 1 секунду после удаления всех букв
                }
            }

            function typeLetters() {
                letters = [...originalLetters];
                index = 0;
                wordElement.innerHTML = '';

                function typeLetter() {
                    if (index < letters.length) {
                        wordElement.innerHTML += letters[index];
                        index++;
                        setTimeout(typeLetter, 100);
                    } else {
                        isNas = !isNas
                        originalLetters = isNas ? nasLetters : vasLetters;
                        index = 0;
                        setTimeout(function() {
                            removeLetter();
                        }, 2000); // Задержка перед началом нового цикла
                    }
                }
                setTimeout(function() {
                    typeLetter();
                }, 100); // Задержка перед началом набора
            }

            setTimeout(function() {
                removeLetter();
            }, 2000); // Задержка перед началом удаления 4 секунды
        });