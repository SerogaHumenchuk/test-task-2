import styled from "@emotion/styled";
import { createTheme } from '@mui/material/styles';

export const AppWrapper = styled.div({
    maxWidth: 1024,
    margin: "auto"
})

export const theme = createTheme({
    components: {
        // Name of the component ⚛️
        MuiSelect: {
            styleOverrides: {
                // Name of the slot
                select: {
                    width: 240,
                    border: '2px solid #C1C4C9',
                    '&:hover': {
                        border: '2px solid #323232',
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides:  {
                root: {
                    "&.Mui-selected": {
                        fontWeight: 900,
                        background: 'transparent',
                    }
                }
            }
        }
    },
});