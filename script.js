const variantNumber = 46;
const targetPosition = (variantNumber % 10) + 1;

let firstClick = true;

// Функція для зміни кольору елемента
function changeColor(element, color) {
    element.style.backgroundColor = color.background;
    element.style.color = color.text;
}

// Пошук елемента за номером порядку
function findElementByPosition(position) {
    const allElements = document.querySelectorAll("body *");
    if (position - 1 < allElements.length) {
        return allElements[position - 1];
    }
    return null;
}

document.addEventListener("DOMContentLoaded", () => {
    const targetElement = findElementByPosition(targetPosition);

    if (targetElement) {
        targetElement.addEventListener("click", () => {
            if (firstClick) {
                changeColor(targetElement, { background: "yellow", text: "red" });
                firstClick = false;
            } else {
                document.querySelector("body *").style.backgroundColor = "lightblue";
                document.querySelector("body *").style.color = "blue";
            }
        });
    } else {
        console.error("Елемент з такою позицією не знайдено.");
    }
});

// Змінна для збереження оригінального розміру зображення
let originalSize = 600; // початковий розмір ширини зображення

function addImage() {
    const img = document.createElement('img');
    img.src = 'kyiv2.jpg'; // вкажіть шлях до нового зображення
    img.alt = 'Нове зображення';
    img.width = 600; // задайте ширину нового зображення
    document.body.appendChild(img);
}

function increaseSize() {
    const image = document.getElementById('kyiv-image');
    if (image) {
        originalSize += 50; // збільшуємо на 50 пікселів
        image.width = originalSize;
    }
}

function decreaseSize() {
    const image = document.getElementById('kyiv-image');
    if (image) {
        originalSize = Math.max(100, originalSize - 50); // зменшуємо на 50 пікселів, але не менше 100
        image.width = originalSize;
    }
}

function removeImage() {
    const image = document.getElementById('kyiv-image');
    if (image) {
        image.parentNode.removeChild(image);
    }
}



