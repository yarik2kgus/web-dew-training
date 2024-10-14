import Tooltip from "./ninja-ui/tooltip"; //импортируем все модули, которые создали
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs'
import Snackbar from "./ninja-ui/snackbar";

//create a tooltip
const tooltip = new Tooltip (document.querySelector('.tooltip'));
tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown'); // отдает массив с элементами

dropdowns.forEach(dropdown => { //проходит по отданному массиву и для каждого элемента создает отдельный экземпляр класса, а потом запускает метод который ждет клика
    const instance = new Dropdown(dropdown);
    instance.init();
});

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('you clicked me :)');
});