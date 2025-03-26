const SaleItem = ({description, price}) => {
    return (
        <div className="saleItem">
            <div>Description: {description}</div>
            <div>Price: {price}</div>
        </div>
    );
}

export default SaleItem