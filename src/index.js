import './index.css';
import { getUsers, deleteUser } from './api/userApi';

getUsers().then(result => {
  let usersBody = result.map(
    u => `
    <tr>
      <td><a href="#" data-id="${u.id}" class="deleteUser">Delete</a></td>
      <td>${u.id}</td>
      <td>${u.firstName}</td>
      <td>${u.lastName}</td>
      <td>${u.email}</td>
    </tr>`
  );

  global.document.getElementById('users').innerHTML = usersBody.join('');

  const deleteLinks = document.querySelectorAll('.deleteUser');
  Array.from(deleteLinks, link => {
    link.onclick = e => {
      const ele = e.target;
      e.preventDefault();
      deleteUser(ele.dataset.id);
      const row = ele.parentNode.parentNode; // tr
      row.parentNode.removeChild(row);
    };
  });
});

/* eslint-disable no-console */
// import numeral from 'numeral';
// const value = numeral(1000).format('$0,0.00');
// debugger
// console.log(`I would pay ${value} for this course`);
