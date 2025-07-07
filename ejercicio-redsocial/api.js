const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_USERS = "https://jsonplaceholder.typicode.com/users";
const URL_PHOTOS = "https://jsonplaceholder.typicode.com/photos";
 
//posts, usuarios y fotos con métodos GET usando async/await
const obtenerDatos = async () => {
  try {
    const [postsRes, usersRes, photosRes] = await Promise.all([
      fetch(URL_POSTS),
      fetch(URL_USERS),
      fetch(URL_PHOTOS)
    ]);
 
    const posts = await postsRes.json();
    const users = await usersRes.json();
    const photos = await photosRes.json();
 
    mostrarPosts(posts.slice(0, 10), users, photos.slice(0, 10));
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
};
 
const mostrarPosts = (posts, users, photos) => {
  const contenedor = document.getElementById("posts");
  contenedor.innerHTML = "";
 
  posts.forEach((post, index) => {
    const usuario = users.find(u => u.id === post.userId);
    const { title, body } = post;
    const imagen = photos[index]?.thumbnailUrl || "https://via.placeholder.com/150";
 
    const html = `<div class="post">
                    <h3>${title}</h3>
                    <p><strong>Autor:</strong> ${usuario?.name || "Anonimo"}</p>
                    <img src="${imagen}" alt="Imagen post"/>
                    <p>${body}</p>
                    </div>`;

    contenedor.innerHTML += html;
  });
};
 
obtenerDatos();
