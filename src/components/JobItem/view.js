import { CardContainer, JobCity, JobTitle, Button } from "./styles";
import { ReactComponent as ButtonIcon } from '../../images/buttonIcon.svg';
export const JobItemView = ({ jobItem }) => {
    const { city, jobPosition } = jobItem;

    return (
        <CardContainer>
            <JobTitle>
                {jobPosition}
            </JobTitle>
            <JobCity>
                {city}
            </JobCity>
            <Button>
                <ButtonIcon />
            </Button>
        </CardContainer>
    )
}