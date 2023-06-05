export const normalizeJobsFilterMenuItemsResponse = (departmentsResponse) => {
    const normalizedResponse =  Object.values(departmentsResponse)
        .map(({ id, title }) => ({ value: id, title }));
    const defaultItem = { value: 0, title: 'All departments' };

    return [defaultItem, ...normalizedResponse];
}


export const normalizeJobsListResponse = (jobsListResponse) => {
    return Object.values(jobsListResponse);
}

export const getJobsListByDepartmentId = ({ jobsList = [],  id }) => {
    if(!id) {
        return jobsList;
    }
    return jobsList.filter(job => job.departmentId === id)
}