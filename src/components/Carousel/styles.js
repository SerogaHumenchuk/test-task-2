import styled from "@emotion/styled";

export const Wrapper = styled.div({
    width: '100%',
    height: 500,
    margin: '0 auto',
    '& > div > div': {
        opacity: '1!important',
    },
    "@media (max-width: 600px)": {
        height: 400,
    },
})

export const CardContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 460,
    height: 'fit-content',
    borderRadius: 15,
    "@media (max-width: 600px)": {
        width: 300,
    },
})

export const CardImage  = styled.img({
    width: '100%',
    borderRadius: 15,
})