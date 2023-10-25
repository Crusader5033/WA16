document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const loginError = document.getElementById('loginError');
  const registerError = document.getElementById('registerError');

  loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        window.location.href = 'homepage.html';
      } else {
        loginError.textContent = 'Invalid username or password';
      }
    } catch (error) {
      console.error(error);
    }
  });

  registerForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(registerForm);
    const username = formData.get('username');
    const password = formData.get('password');
    const name = formData.get('name');

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, name }),
      });

      if (response.status === 200) {
        window.location.href = 'homepage.html';
      } else {
        registerError.textContent = 'Registration failed';
      }
    } catch (error) {
      console.error(error);
    }
  });
});

const blogForm = document.getElementById('blogForm');
const blogPosts = document.getElementById('blogPosts');

blogForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  const formData = new FormData(blogForm);
  const blogText = formData.get('blogText');
  const image = formData.get('image');

  if (image && image.size > 10 * 1024 * 1024) {
    alert('Image size must be less than 10MB.');
    return;
  }

  const blogPostElement = document.createElement('div');
  blogPostElement.className = 'blog-post';
  blogPostElement.textContent = blogText;

  if (image) {
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(image);
    imageElement.style.maxWidth = '100%';
    blogPostElement.appendChild(imageElement);
  }

  blogPosts.insertBefore(blogPostElement, blogPosts.firstChild);

  blogForm.reset();
});
