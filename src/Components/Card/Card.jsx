import styles from "./Card.module.css";

function Card({card}) {
  return (
    <div className={styles.card} style={{ backgroundColor: card.bgColor ,width:card.width}}>
      <div className={styles.cardImg} >
        <img src={card.img} />
      </div>
      <div className={styles.cardContent}>
        <p> {card.title}</p>
        {card.sub}
      </div>
    </div>
  );
}
export default Card;
