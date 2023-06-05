import styled from "@emotion/styled";

export const CardContainer = styled.div({
    marginBottom: 16,
    height: 90,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 16px',
    border: '2px solid #ddd',
    borderRadius: 6,
    '&:hover': {
        border: '2px solid #323232',
        '& > button': {
            backgroundColor: '#472AFC',
            '& > svg': {
                transform: 'translate(5px)',
                transition: 'transform 0.25s'
            }
        }
    },
});

export const JobTitle = styled.p({
    width: '60%',
    fontSize: 25,
    fontWeight: 500,
    "@media (max-width: 600px)": {
        fontSize: 20,
    },
});

export const JobCity = styled.p({
    width: '20%',
    color: '#7b7d85',
    fontSize: 18,
    fontWeight: 400,
    "@media (max-width: 600px)": {
        fontSize: 16,
    },
});

export const Button = styled.button({
    backgroundColor: '#323232',
    border: 'none',
    borderRadius: 5,
    padding: '18.25px 40px',
    "@media (max-width: 600px)": {
        display: 'none',
    },
})


