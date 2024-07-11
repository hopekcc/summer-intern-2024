// no props, just examples

function List() {
    const fruits = [{id: 1, name: 'apple', calories: 95}, 
                    {id: 2, name: 'banana', calories:105}, 
                    {id: 3, name: 'orange', calories: 45}, 
                    {id: 4, name: 'coconut', calories: 159}]

    fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); reverse alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); calories least to greatest

    const lowCalFruits = fruits.filter(fruit => fruit.calories <= 100)

    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                            {lowCalFruit.name}: &nbsp;
                                            <b>{lowCalFruit.calories}</b></li>);

    return(<ol>{listItems}</ol>);
}

export default List