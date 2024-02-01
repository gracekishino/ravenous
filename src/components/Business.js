function Business({ business }) {

    return (
        <div className="Business" >
            <img src={business.imageSrc} />
            <div className="business-name">{business.name}</div>
            <div className="left">
                <div>{business.address}</div>
                <div>{business.city}</div>
                <div>{business.state} {business.zipCode}</div>
            </div>
            <div className="right">
                <div className="category">{business.category}</div>
                <div className="rating">{business.rating} stars</div>
                <div>{business.reviewCount} reviews</div>
            </div>
        </div>
    );
}

export default Business;