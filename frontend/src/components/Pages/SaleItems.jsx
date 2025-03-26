import { useEffect, useState } from "react";
import { getItems } from "../../services/saleItemsService";

const SaleItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getItems()
        .then(data => setItems(data.data))
        .catch(err => console.log(err));
    }, []);


    return (
        <div>
            {
                items.map(item => (
                    <div key={item.price}>
                    <span>Desc: {item.description}</span><br></br>
                    <span>Price:{item.price}</span>
                </div>
                )
            )
            }
           
        </div>
    );
}

export default SaleItems;