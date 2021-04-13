import colors from '../../styles/colors-palette';
import { Breakpoints } from '../../models/index';

export const step2Css = {
    title: {
        marginTop: 0,
        marginBottom: 4,
        paddingTop: 4,
        color: colors.darkBlue,
    },
    lineTitle: {
        width: 55,
        height: 3,
        backgroundColor: colors.blue,
        borderRadius: 50,
    },
    info: {
        marginTop: 28,
        marginBottom: 20,
    },
    passWordsCont: ({ device }: { device: Breakpoints }) => ({
        display: 'flex',
        flexDirection: device === Breakpoints.DESKTOP ? 'row' : 'column',
        '& > div:last-child': {
            marginTop: device === Breakpoints.DESKTOP ? 0 : 8,
        },
    }),
    error: {
        color: colors.red,
    },
};

export default step2Css;
