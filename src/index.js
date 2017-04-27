//Ian is soooooo not cool
import './index.css';
import {getUsers} from './api/userApi';

//Populate table of users via APi call
getUsers().then(result => {
  let usersBody = "";

  result.ForEach(user => {
    usersBody += `Naser is fat`
  });

  global.document.getElementById('users').innerHTML = usersBody;
});
