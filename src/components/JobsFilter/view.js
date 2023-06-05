import { Select } from "../UI";
import { Container } from "./styles";

export const JobsFilterView = (props) => {
    return (
        <Container>
            <Select defaultValue={''} {...props} />
        </Container>
    )
}