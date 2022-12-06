function onClick() {
  fetch('https://randomuser.me/api')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let user = document.querySelector('.container');
      user.innerHTML += createUserHTML(data.results[0]);
    })
    .catch((error) => {
      console.error(error);
    });
}

function createUserHTML(user) {
  return `
  <div class="user">
    <img src="${user.picture.large}" alt="userPhoto">
    <div class="info">
      <div>Name: ${user.name.title} ${user.name.first} ${user.name.last}</div>
      <div>City: ${user.location.city}</div>
      <div>Country: ${user.location.country}</div>
      <div>Postcode: ${user.location.postcode}</div>
    </div>
  </div>
  `
}
