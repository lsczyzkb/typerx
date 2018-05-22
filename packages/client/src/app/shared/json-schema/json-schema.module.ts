import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DelonFormModule, WidgetRegistry } from '@delon/form';

import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
import { SearchWidgetComponent } from '@shared/json-schema/widgets/search/search.widget';
import { ListBoxWidgetComponent } from '@shared/json-schema/widgets/list-box/list-box';
import { DictWidgetComponent } from '@shared/json-schema/widgets/dict/search.widget';

export const SCHEMA_THIRDS_COMPONENTS = [
    TinymceWidget,
    UeditorWidget,
    SearchWidgetComponent,
    ListBoxWidgetComponent,
    DictWidgetComponent,
];

@NgModule({
    declarations: SCHEMA_THIRDS_COMPONENTS,
    entryComponents: SCHEMA_THIRDS_COMPONENTS,
    imports: [
        SharedModule,
        DelonFormModule.forRoot()
    ],
    exports: [
        ...SCHEMA_THIRDS_COMPONENTS
    ]
})
export class JsonSchemaModule {
    constructor(widgetRegistry: WidgetRegistry) {
        widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
        widgetRegistry.register(SearchWidgetComponent.KEY, SearchWidgetComponent);
        widgetRegistry.register(ListBoxWidgetComponent.KEY, ListBoxWidgetComponent);
        widgetRegistry.register(DictWidgetComponent.KEY, DictWidgetComponent);

    }
}
