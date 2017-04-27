import './index.css';
import {getUsers} from './api/userApi';

//Populate table of users via APi call
getUsers().then(result => {
  let usersBody = "";

  result.ForEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstname}</td>
    <td>${user.lastName}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;
});
