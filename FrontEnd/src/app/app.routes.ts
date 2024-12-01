import { Routes } from '@angular/router';
import { AddPropertiesComponent } from './property/add-properties/add-properties.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertiesDetailComponent } from './property/properties-detail/properties-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';



export const routes: Routes = [
    {path: '',component: PropertyListComponent},
    {path: 'add-property',component: AddPropertiesComponent},
    {path: 'rent-property',component: PropertyListComponent},
    {path: 'property-detail/:id',component: PropertiesDetailComponent},
    {path: 'user-login',component: UserLoginComponent},
    {path: 'user-registration',component: UserRegistrationComponent},
    // {path: 'user-logout',component: UserLogoutComponent},
];
