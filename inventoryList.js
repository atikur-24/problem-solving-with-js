function inventoryList() {
    let items = [];

    const add = (item) => {
        if (!items.includes(item) && items.length < 10) {
            items.push(item);
        }
    };

    const remove = (item) => {
        items = items.filter((i) => i !== item);
    };
    const getList = () => {
        return items;
    };

    return { add, remove, getList };
}

// Sample Test
const obj = inventoryList();
obj.add("Shirt");
obj.add("Trouser");
console.log(obj.getList());
obj.remove("Shirt");
console.log(obj.getList());
