import './styles/tabs.css'

class Tabs{
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => { // "tab.addEvenListener('click', e" в E передается информация о том куда мы кликнули, соответственно передается тот элемент на который мы кликнули
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        });
    }
    toggleTabs(e){
        //REMOVE CURRENT ACTIVE CLASSES
        this.tabs.forEach(tab => tab.classList.remove('active')); //для всех элементов убирает класс 'active'
        // add new active class to clicked
        e.target.classList.add('active'); //добавляет к тому элементу на который мы кликнули active
    } 
    toggleContent(e){
        //remove current active classes from content
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });
        //add new active class to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector); // выбираем тот элемент который имеет тот "data-target" id на который мы кликнули
        content.classList.add('active') // добавили класс active к тому элементу на который кликали
    }
}

export { Tabs as default };