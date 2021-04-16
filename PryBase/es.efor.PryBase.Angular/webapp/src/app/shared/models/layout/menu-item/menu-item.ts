import { SetData } from '../../_basic/set-data';
import { LayoutMenuItem } from 'src/app/shared/api/models';

export class MenuItem extends SetData implements LayoutMenuItem {
    iconName?: null | string;
    iconPreffix?: null | string;
    routerLinkActiveExtact = false;
    routerLinkActiveCssClass = 'active';
    routerLinkCommands?: null | string[];
    routerLinkFragment?: null | string;
    children: MenuItem[] = [];

    label: string;
    get hasChildren() { return this.children && this.children.length > 0 }

    setData(newData: Partial<this>) {
        if (newData.children) {
            newData.children = newData.children
                .map(c => new MenuItem().setData(c));
        }

        return super.setData(newData);
    }
}
export class MenuItemWrapper extends SetData {
    routerLinkActive: string = 'primary-color text-white';
}
