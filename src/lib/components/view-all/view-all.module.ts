/*******************************************************************************
 * Copyright IBM Corp. 2018
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WchNgComponentsModule } from '@ibm-wch-sdk/ng';
import { WchNgEditComponentsModule } from '@ibm-wch-sdk/ng-edit';
import { SiteCommonModule } from '@ibm-wch/components-ng-shared-utilities';

import { ViewAllComponent } from './view-all.component';

@NgModule({
    /**
    * TODO explicitly add those modules that are used by the layout
    */
    imports: [
        CommonModule,
        RouterModule,
        WchNgComponentsModule,
        WchNgEditComponentsModule,
        SiteCommonModule

    ],
    declarations: [ViewAllComponent],
    exports: [ViewAllComponent],
    entryComponents: [ViewAllComponent]
})
export class ViewAllModule {
}