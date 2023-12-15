const Card = ({card}) => {
    return(
        <div className="card">
            <div className="card-title">Status: {card.status}</div>
            <div>Product Description: {card.product_description}</div>
            <div>Reason for Reacll: {card.reason_for_recall}</div>
            {
                card.status === "Ongoing" ? <div>Recall initiation date: {card.recall_initiation_date}</div> : null
            }
        </div>
    )
}

export default Card;