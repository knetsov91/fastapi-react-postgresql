import { useEffect, useState } from "react";
import { getItems } from "../../services/saleItemsService";
import SaleItem from "./SaleItem";

const SaleItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getItems()
        .then(data =>{ 
            setItems(data.data)
            console.log(data.data);}
            
        )
        .catch(err => console.log(err));
    }, []);


    return (
        <div className="saleItems">
            <h2>Items</h2>
            { items.map(item => <SaleItem price={item.price} description={item.description} /> ) }
           
        </div>
    );
}

export default SaleItems;