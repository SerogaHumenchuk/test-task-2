import { Fragment } from 'react'
import { Container, Content } from "./styles";
import { JobItem } from "../";

export const JobsListView = ({ jobsList }) => {
    return (
        <Container>
            <Content>
                {jobsList.map((jobItem) => (
                    <Fragment key={jobItem.id}>
                        <JobItem jobItem={jobItem} />
                    </Fragment>
                ))}
            </Content>
        </Container>
    )
}