import ItemList from '../ListProducts/ItemList'

const ItemListContainer = () =>{
    
    return (
        <div>
            <div>
                <h2 className="subtitle"> Estos son mis productos destacados! </h2>
            </div>     
            <ItemList />
        </div>
    )
}

export default ItemListContainer;