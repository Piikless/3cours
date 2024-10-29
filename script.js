document.getElementById('fetch-user').addEventListener('click', function() {
    fetch('https://randomuser.me/api')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const user = data.results[0];
            const userInfo = `
                <img src="${user.picture.large}" alt="User Picture">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>Місто: ${user.location.city}</p>
                <p>Країна: ${user.location.country}</p>
                <p>Поштовий індекс: ${user.location.postcode}</p>
            `;
            document.getElementById('user-info').innerHTML = userInfo;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});