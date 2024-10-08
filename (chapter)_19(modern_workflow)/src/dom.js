console.log('dom file');

const body = document.querySelector('body');

const styleBody = () => {
    body.style.background = "peachpuff";
};

const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title)
};

const contact = 'mario@gmail.com'

export { styleBody, addTitle, contact} // более легкая версия что бы экспортировать обьекты просот перечислив их и не пистаь export перед каждым