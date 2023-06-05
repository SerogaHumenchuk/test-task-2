import { useState, useEffect } from 'react';
import { JobsListView } from './view';
import { getJobsList } from '../../api';
import {getJobsListByDepartmentId, normalizeJobsListResponse} from '../../utils';

export const JobsList = ({ selectedJobFilterId }) => {
    const [jobsList, setJobsList] = useState([]);
    useEffect(() => {
        const jobsListResponse = getJobsList();
        const normalizedJobsList = normalizeJobsListResponse(jobsListResponse);

        setJobsList(normalizedJobsList);
    }, []);

    const [filteredJobsList, setFilteredJobsList] = useState(jobsList);
    useEffect(() => {
        const filteredJobs = getJobsListByDepartmentId({ jobsList, id: selectedJobFilterId });
        setFilteredJobsList(filteredJobs);
    }, [selectedJobFilterId, jobsList])

    return <JobsListView jobsList={filteredJobsList}/>
};