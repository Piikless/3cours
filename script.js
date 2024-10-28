function validateForm() {
    // Отримуємо значення полів форми
    const pib = document.getElementById('pib');
    const variant = document.getElementById('variant');
    const group = document.getElementById('group');
    const phone = document.getElementById('phone');
    const idCard = document.getElementById('idCard');

    // Регулярні вирази для перевірки
    const pibPattern = /^[А-ЯІЇЄҐ][а-яіїєґ]{1,6} [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/; // ПІБ: ТТТТТТ Т.Т.
    const variantPattern = /^\d{2}$/; // Варіант: ЧЧ
    const groupPattern = /^[А-ЯІЇЄҐ]{2}-\d{2}$/; // Група: ТТ-ЧЧ
    const phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/; // Телефон: (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ
    const idCardPattern = /^[А-ЯІЇЄҐ]{2} №\d{6}$/; // ID-card: ТТ №ЧЧЧЧЧЧ

    // Скидаємо стилі помилок
    pib.classList.remove("error");
    variant.classList.remove("error");
    group.classList.remove("error");
    phone.classList.remove("error");
    idCard.classList.remove("error");

    let isValid = true;

    // Перевірка кожного поля
    if (!pibPattern.test(pib.value)) {
        pib.classList.add("error");
        isValid = false;
    }
    if (!variantPattern.test(variant.value)) {
        variant.classList.add("error");
        isValid = false;
    }
    if (!groupPattern.test(group.value)) {
        group.classList.add("error");
        isValid = false;
    }
    if (!phonePattern.test(phone.value)) {
        phone.classList.add("error");
        isValid = false;
    }
    if (!idCardPattern.test(idCard.value)) {
        idCard.classList.add("error");
        isValid = false;
    }

    // Виведення результатів
    if (isValid) {
        const result = `
            ПІБ: ${pib.value}\n
            Варіант: ${variant.value}\n
            Група: ${group.value}\n
            Телефон: ${phone.value}\n
            ID-card: ${idCard.value}
        `;
        alert("Введена інформація:\n" + result);
    } else {
        alert("Будь ласка, перевірте правильність введених даних.");
    }
}