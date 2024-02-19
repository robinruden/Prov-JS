// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


// Din kod här


async function getPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if(!response.ok) {
        throw new Error("Nätverksfel");
      }
      const posts = await response.json();
      const completedPosts = posts.filter(x => x.completed);
      console.log(completedPosts)
      const listElement = document.getElementById("posts");
      completedPosts.forEach(todo => {
        const listItem = document.createElement("li");
        listItem.textContent = todo.title;
        listElement.appendChild(listItem);
      })
    } catch(error) {
      console.log("Fel vid hämtning av data");
    }
  }
  getPosts();