document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('myTable');
    const colorPicker = document.getElementById('colorPicker');
    let startCell = null;

    // Створення таблиці 6x6
    for (let i = 0; i < 6; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 6; j++) {
            const cell = row.insertCell();
            cell.textContent = i * 6 + j + 1;

            // Подія наведення
            cell.addEventListener('mouseenter', () => {
                if (cell.textContent == 46) { // Заміна 46 на ваш варіант
                    cell.style.backgroundColor = getRandomColor();
                }
            });

            // Подія кліка
            cell.addEventListener('click', () => {
                cell.style.backgroundColor = colorPicker.value;
                startCell = cell; // Запам'ятовуємо вибрану клітинку
            });

            // Подія подвійного кліка
            cell.addEventListener('dblclick', () => {
                if (startCell) {
                    const startRow = startCell.parentNode.rowIndex;
                    const startCol = startCell.cellIndex;

                    for (let r = startRow; r < 6; r++) {
                        for (let c = startCol; c < 6; c++) {
                            table.rows[r].cells[c].style.backgroundColor = colorPicker.value;
                        }
                    }
                }
            });
        }
    }

    // Функція для генерації випадкового кольору
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
