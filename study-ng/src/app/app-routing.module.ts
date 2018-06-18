import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StylingComponent } from './styling/styling.component';
import { LoopsConditionalsComponent } from './loops-conditionals/loops-conditionals.component';

const routes: Routes = [
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'loops-conditionals/:choice', component: LoopsConditionalsComponent },
      { path: 'styling', component: StylingComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot
               (routes,
                {
                enableTracing: true, // <-- debugging purposes only
                //preloadingStrategy: SelectivePreloadingStrategy,
                useHash: true
                }        
               ) 
             ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

