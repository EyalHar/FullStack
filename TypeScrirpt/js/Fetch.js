fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => { return response.json(); })
    .then((data) => {
    const el = document.getElementById('body');
    const title = document.createElement('h1');
    title.textContent = data.title;
    const subtitle = document.createElement('p');
    subtitle.textContent = data.body;
    el.appendChild(title);
    el.appendChild(subtitle);
})
    .catch((err) => { console.log(err); });
//# sourceMappingURL=Fetch.js.map