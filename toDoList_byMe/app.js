let input = document.getElementById('task');
let output = document.getElementById('output');
const btn = document.getElementById('btn');

const addItem = () => {
    let li = document.createElement('li');
    let remove = document.createElement('button');
    remove.innerHTML = 'Remove';
    remove.classList.add('remove');
    li.innerText = `${input.value} `;
    li.appendChild(remove);
    ul.appendChild(li);
    remove.addEventListener('click', function () {
        li.style.display = 'none';
    });
}

let ul = document.createElement('ul');
output.appendChild(ul);

btn.addEventListener('click', addItem);
