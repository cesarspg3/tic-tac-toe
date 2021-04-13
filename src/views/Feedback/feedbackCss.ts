import { Breakpoints } from '../../models/index';
import colors from '../../styles/colors-palette';

export const feedbackCss = {
    info: ({ device }: { device: Breakpoints }) => ({
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: device === Breakpoints.DESKTOP ? '8px 96px 8px 74px' : 0,
        '& > div': {
            display: 'flex',
            flexDirection: 'column',
            paddingRight: 16,
            paddingBottom: 16,
        },
    }),
    img: {
        width: 40,
        height: 40,
        padding: 16,
        marginTop: 10,
    },
    btnCont: ({ device }: { device: Breakpoints }) => ({
        height: 70,
        color: colors.red,
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: device === Breakpoints.DESKTOP ? 96 : 16,
        backgroundColor: colors.white,
        borderTop: `1px solid ${colors.ligthGrey}`,
        '& > span:hover': {
            opacity: 0.8,
            cursor: 'pointer',
        },
    }),
};

export default feedbackCss;
