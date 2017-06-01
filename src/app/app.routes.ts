import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const appRoutes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'products', canActivate: [AuthService], component: ProductsPageComponent },
    { path: 'product/:id', canActivate: [AuthService], component: ProductDetailsPageComponent },
    { path: 'cart', canActivate: [AuthService], component: CartPageComponent }
];

export const RoutingProviders: any[] = [

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);