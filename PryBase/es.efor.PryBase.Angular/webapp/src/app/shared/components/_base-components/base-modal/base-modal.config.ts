import { ModalOptions } from 'ngx-bootstrap/modal/public_api';
import { CompilerUtilities } from 'src/app/shared/_third-party/ep-components/utils/compiler-utils/compiler-utils';
import { SetData } from 'src/app/shared/models/_basic/set-data';

/**
 * Configuración por defecto para los modales de la plantilla.
 */
export class TemplateModalConfigDefault<Component> extends SetData<TemplateModalConfigDefault<Component>> implements ModalOptions {
    initialState: Partial<Component>;
    backdrop = false;
    class = 'modal-xl';
    keyboard = false;
    ignoreBackdropClick = true;
}
CompilerUtilities.applyMixins(TemplateModalConfigDefault, [ModalOptions, SetData]);