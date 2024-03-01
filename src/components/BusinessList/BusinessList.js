import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

function BusinessList({ results }) {
    return (
        <div className={styles.list}>
            {results.map((business) => (
                <Business business={business} />
            ))}
        </div>
    );
}

export default BusinessList;