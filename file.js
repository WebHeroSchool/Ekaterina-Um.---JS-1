let user = prompt('Введите имя пользователя:');
fetch(`https://api.github.com/users/${user}`)
	.then(res => res.json())
  .then(json => {
  	alert('Ссылка на аватар: ' + json.avatar_url + ', имя пользователя: ' + json.name + ', описание пользователя: ' + ', ссылка на страницу пользователя: ' + json.html_url + '.');

    let photo = new Image();
    photo.src = json.avatar_url;
        document.body.append(photo);

     let name = document.createElement('p');
        if (json.name != null) {
            name.innerHTML = json.name;
        } else {
            name.innerHTML = 'Имя пользователя не найдено.';
        }
    document.body.append(name);
 		name.addEventListener('click', () => location.href = json.html_url);

      let bio = document.createElement('p');
        if (json.bio != null) {
            bio.innerHTML = json.bio;
        } else {
            bio.innerHTML = 'Описание пользователя не найдено.';
        }
    document.body.append(bio);

   })
   .catch(err => document.body.append('Информация о пользователе не доступна'));
