import { ChangeDetectorRef } from '@angular/core';

import * as moment from 'moment';

export class FormUtilities {
    /**
     * @param item The item whose property needs to be changed
     * @param $event The new Date value
     * @param propertyName The property of `item` where the value will be stored
     * @param changeDetector If using BsDatepicker and if detectChanges needs to be run, pass an
     * instance of the injected `ChangeDetectorRef`
     */
    static onDatepicketValueChange(item: object, $event: Date, propertyName: string, changeDetector?: ChangeDetectorRef) {
        if ($event == null && item[propertyName] != null) {
            item[propertyName] = null;
            if (changeDetector != null) { changeDetector.detectChanges(); }
        } else if ($event != null) {
            const asMoment = moment($event);
            const currentValue = moment(item[propertyName]);
            if (asMoment.isSame(currentValue)) { return; }

            item[propertyName] = asMoment.toDate();
        }
    }
}