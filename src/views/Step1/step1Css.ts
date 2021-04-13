import colors from '../../styles/colors-palette';
import { Breakpoints } from '../../models/index';

export const step1Css = {
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
    imgAndDescCont: ({ device }: { device: Breakpoints }) => ({
        marginTop: 30,
        marginBottom: 30,
        display: 'flex',
        flexDirection: device === Breakpoints.DESKTOP ? 'row' : 'column',
        '& > div': {
            width: device === Breakpoints.DESKTOP ? '50%' : '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        '& > div > img': {
            height: 150,
        },
        '& > div > div': {
            padding: '0px 32px 0px 32px',
            lineHeight: 1.4,
        },
    }),
    titles: {
        color: colors.darkBlue,
    },
    check: ({ device }: { device: Breakpoints }) => ({
        marginTop: 30,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '& > input': {
            width: device === Breakpoints.DESKTOP ? 20 : 40,
            height: device === Breakpoints.DESKTOP ? 20 : 40,
            marginRight: 8,
            marginLeft: 8,
        },
    }),
    error: {
        color: colors.red,
        marginTop: 4,
    },
};

export default step1Css;
