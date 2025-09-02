const AddedToCart = ({msg}) => {
    return (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
            {msg} Cart
        </div>
    )
}

export default AddedToCart;