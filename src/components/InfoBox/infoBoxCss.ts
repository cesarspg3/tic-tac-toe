import { Breakpoints } from '../../models/index';
import colors from '../../styles/colors-palette';

export const infoBoxCss = {
    container: ({ device }: { device: Breakpoints }) => ({
        boxShadow: `0 -5px 2px -5px ${colors.blackTransparent}`,
        width: device === Breakpoints.DESKTOP ? 'calc(100% - 148px)' : 'calc(100% - 32px)',
        height: 'calc(100% - 207px)',
        backgroundColor: colors.white,
        paddingLeft: device === Breakpoints.DESKTOP ? 74 : 16,
        paddingRight: device === Breakpoints.DESKTOP ? 74 : 16,
        color: colors.blue2,
        fontWeight: 'bold',
        overflowY: 'auto',
        paddingBottom: 32,
    }),
    seaparator: {
        width: '100%',
        height: 25,
        boxShadow: `0 -5px 5px -5px ${colors.blackTransparent}`,
        backgroundColor: colors.white,
    },
};

export default infoBoxCss;
