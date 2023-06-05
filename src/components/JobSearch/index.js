import { useState } from 'react';
import { JobsList, JobsFilter } from "../";

export const JobSearch = () => {
    const [selectedJobFilterId, setSelectedJobFilterId] = useState(0);

    return (
        <>
            <JobsFilter
                selectedJobFilterId={selectedJobFilterId}
                setSelectedJobFilterId={setSelectedJobFilterId}
            />
            <JobsList selectedJobFilterId={selectedJobFilterId}/>
        </>
    );
}