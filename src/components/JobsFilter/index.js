import { useState, useEffect } from 'react';
import { JobsFilterView } from './view';
import { getJobsFilterMenuItems } from '../../api';
import { normalizeJobsFilterMenuItemsResponse } from '../../utils';

export const JobsFilter = (props) => {
    const [jobsFilterMenuItems, setJobsFilterMenuItems] = useState([]);

    useEffect(() => {
        const jobsFilterMenuItemsResponse = getJobsFilterMenuItems();
        const normalizedJobsFilterMenuItems = normalizeJobsFilterMenuItemsResponse(jobsFilterMenuItemsResponse);

        setJobsFilterMenuItems(normalizedJobsFilterMenuItems);
    }, [])

    return <JobsFilterView menuItems={jobsFilterMenuItems} {...props} />
};