import { StyledCard } from "./styles/Card.styled";

export default function Card({ item: { id, title, body, image } }) {
  return (
    //  if id is even,  then (&& is short for then for a ternary without an else). So, if that's true, we want to pass in "row-reverse"
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
