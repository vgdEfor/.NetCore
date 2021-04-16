import { SetData } from 'src/app/shared/models/_basic/set-data';

export class DtCheckboxConfig extends SetData<DtCheckboxConfig> {
    /**
     * Wether on checkbox toggle the click event should be propagates.
     * If true, it will propage to the row click event.
     */
    propagateClick = false;
    /**
     * The name of the property where the checked status will be saved.
     */
    selectedProperty = '_isSelected';
    /**
     * Current value of the `[disabled]` property for the checkbox.
     * Has a higher priority over `disabledProperty`.
     */
    disabled = false;
    /**
     * The name of the property containing a boolean value that will set the `[disabled]` property for the checkbox
     */
    disabledProperty = '_isDisabled';
    /**
     * The value that the property will adquire on checked = true status.
     */
    selectedValueChecked: any = true;
    /**
     * The value that the property will adquire on checked = false status.
     */
    selectedValueUnchecked: any = false;
}
