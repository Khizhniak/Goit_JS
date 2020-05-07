class Storage{
    constructor(args){
        this.item = args;
    }
    getItems(){
        return this.item
    }
    addItem(elem){
        this.item.push(elem)
    }
    removeItem(elem){
        if(this.item.includes(elem))
        this.item.splice(elem, 1)
    }
}

const storage = new Storage([
   'Нанитоиды',
   'Пролонгер',
   'Железные жупи',
   'Антигравитатор',
 ]);

 const items = storage.getItems();
 console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

 storage.addItem('Дроид');
 console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

 storage.removeItem('Пролонгер');
 console.log(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]