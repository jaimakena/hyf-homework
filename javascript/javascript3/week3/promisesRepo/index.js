//Getting into promises

const repo = ['simonreddy2001', 'greeshmarahool', 'sarulathaanbu'];
const body = document.querySelector('body');

async function getRepo(repo){
    const response = await fetch(`https://api.github.com/search/repositories?q=user:${repo}`);
    const data = await response.json();
    console.log(data); 
    const h2 = document.createElement('h2');
    h2.innerHTML = `${repo} Repository  `;
    body.appendChild(h2);
    const repositoryList = document.createElement('ul');
    h2.appendChild(repositoryList);
    data.items.map((item) => {
    const repositoryItem = document.createElement('li');
    const div = document.createElement('div');

    const name = document.createElement('p');
    name.innerHTML = `Name: ${item.name}`;
    div.appendChild(name);

    const owner = document.createElement('p');
    owner.innerHTML = `Owner: ${item.owner.login}`;
    div.appendChild(owner);

    const url = document.createElement('p');
    url.innerHTML = `Url: ${item.html_url}`;
    div.appendChild(url);
    
    repositoryItem.appendChild(div);
    repositoryList.appendChild(repositoryItem);
})
}


async function getAllRepos(){
    const data = Promise.all(
        [getRepo(repo[0])], 
        [getRepo(repo[1])],
        [getRepo(repo[2])])
    await data;
}
getAllRepos();

