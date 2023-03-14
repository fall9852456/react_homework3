export default function ProductItem({ product }) {
    return (
        <div className="image_layout" >
            <div className="image">
                <a href=" " className="image__link">
                    <img src={product.image} alt={product.name} className="image__style" />

                </a>
                <p className="image_title">{product.name}</p>
            </div>
        </div>
    )
}