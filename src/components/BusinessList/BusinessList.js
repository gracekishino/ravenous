import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

function BusinessList({ results }) {
    return (
        <div className={styles.list}>
            {results.map((business, index) => (
                <Business business={business} key={index} />
            ))}
        </div>
    );
}

export default BusinessList;