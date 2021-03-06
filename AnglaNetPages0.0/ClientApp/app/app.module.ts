import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { MyPageComponent } from './components/mypage/mypage.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        MyPageComponent,
        LayoutComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'counter', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: MyPageComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'counter' }
        ])
    ]
})
export class AppModule {
}
