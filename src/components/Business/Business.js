import styles from "./Business.module.css";

function Business({ business }) {

    return (
        <div className={styles.business} >
            <img src={business.image_url} alt={business.name} />
            <div className={styles.name}>{business.name}</div>
            <div className={styles.left}>
                <div>{business.location["address1"]}</div>
                <div>{business.location["city"]}</div>
                <div>{business.state} {business.location["zip_code"]}</div>
            </div>
            <div className={styles.right}>
                <div className={styles.category}>{business.categories[0]["title"]}</div>
                <div className={styles.rating}>{business.rating} stars</div>
                <div>{business.review_count} reviews</div>
            </div>
        </div>
    );
}

export default Business;