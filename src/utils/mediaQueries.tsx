import { useMediaQuery } from '@uidotdev/usehooks';

export const useMobileMediaQuery = () => useMediaQuery('only screen and (max-width : 1023px)');
