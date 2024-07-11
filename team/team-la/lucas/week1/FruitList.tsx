type FruitListProps = {
    items?: {
        id: number,
        name: string,
        calories: number,
    }[]
    category?: string
}


function FruitList(props: FruitListProps){

    const { items = [] } = props // for default values
    const { category = 'None' } = props

    const listItems = items.map(item => <li key={item.id}>
                                {item.name}: &nbsp;
                                <b>{item.calories} cal</b></li>)

    return(<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>)
}
export default FruitList