import { marker } from '@biesbjerg/ngx-translate-extract-marker';

/**
 * This function does nothing by itself, it is only used
 * to keep track of the errors the API returns and make sure
 * translations files are updated.
 */
export function markApiStrings() {
    markApiErrorStrings();
    markApiResponseStrings();
}
export function markApiErrorStrings() {
    marker('API.ERROR.AUTH.PASS.FAIL');
}
export function markApiResponseStrings() {
    marker('MENU.PAGE.HOME');

    marker('MENU.PAGE.INSURANCE.MAIN');
    marker('MENU.PAGE.INSURANCE.LIST');
    marker('MENU.PAGE.INSURANCE.DETAILS');
    marker('MENU.PAGE.INSURANCE.NEW');

    marker('MENU.PAGE.RCA.MAIN');

    marker('MENU.PAGE.ZITYENTITY.LIST');

    marker('MENU.PAGE.PROJECT.MAIN');
    marker('MENU.PAGE.PROJECT.LIST');
    marker('MENU.PAGE.PROJECT.DETAILS');
    marker('MENU.PAGE.PROJECT.NEW');
}
