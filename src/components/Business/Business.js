import styles from "./Business.module.css";

function Business({ business }) {

    return (
        <div className={styles.business} >
            <img src={business.imageSrc} alt={business.name} />
            <div className={styles.name}>{business.name}</div>
            <div className={styles.left}>
                <div>{business.address}</div>
                <div>{business.city}</div>
                <div>{business.state} {business.zipCode}</div>
            </div>
            <div className={styles.right}>
                <div className={styles.category}>{business.category}</div>
                <div className={styles.rating}>{business.rating} stars</div>
                <div>{business.reviewCount} reviews</div>
            </div>
        </div>
    );
}

export default Business;