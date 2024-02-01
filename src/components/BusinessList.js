import Business from "./Business"

function BusinessList({ results }) {
    return (
        <div className="Business-list">
            {results.map((business) => (
                <Business business={business} />
            ))}
        </div>
    );
}

export default BusinessList;