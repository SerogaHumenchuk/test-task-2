import { CardContainer, CardImage } from "./styles";

export const Card = ({ image }) => {
    return (
        <CardContainer>
            <CardImage src={image} alt='Carousel Item' />
        </CardContainer>
    );
}