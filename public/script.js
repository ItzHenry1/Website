

async function a() {
  const createForumButton = document.getElementById('createforum');
const resultMessage = document.getElementById('foroc');
await createForumButton.addEventListener('click', () => {
  // Make a POST request to /create-forum
  axios
    .post('/api/create-forum', {
      title: 'Mi foro', // Se pone un titulo de ejemplo por ahora xd
      description: 'A forum for discussing various topics.', // Igual con la desc
    })
    .then((response) => {
      // Display success message
      resultMessage.textContent = 'Foro creado correctamente!';
      resultMessage.style.color = 'green';
      setTimeout(() => {
        resultMessage.textContent = ''
      }, 5000)
    })
    .catch((error) => {
      // Display error message
      resultMessage.textContent = 'Error mientras creando el foro! Contacta con un ADMIN.';
      resultMessage.style.color = 'red';
      setTimeout(() => {
        resultMessage.textContent = '';
      }, 5000)
    });
});
}


// Fetcheamos
async function fetchAndDisplayForums() {
  let forumList = document.getElementById('forumList');
axios
  .get('/api/forums')
  .then((response) => {
    const forums = response.data;

    // Creamos un html nuevo
    let forumHTML = '<ul>';
    forums.forEach((forum) => {
      forumHTML += `<li>${forum.title}</li> <p>${forum.description}</p>`;
    });
    forumHTML += '</ul>';

    // Display the list of forums in the container
    forumList.innerHTML = forumHTML;
  })
  .catch((error) => {
    console.error('Error fetching forums:', error);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  a();
  fetchAndDisplayForums();
});