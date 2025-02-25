import styles from "./CardContainer.module.css";
import Card from "../Card/Card.jsx";

function CardContainer({ cards, title ,bgcolor}) {
  return (
    <div className={styles.cardContainer}  style={{ backgroundColor: bgcolor }}>
      <h1 className={styles.heading}>{title}</h1>
      <div  className="flex justify-evenly ">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
