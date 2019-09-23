import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
    declarations: [
        StoreComponent, CustomerComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: 'stores', component: StoreComponent },
            { path: 'customers', component: CustomerComponent },
            { path: '**', redirectTo: 'stores' }
        ])
    ],
    exports: [
        RouterModule,
    ],
    providers: [],

})
export class AppRoutingModule { }


