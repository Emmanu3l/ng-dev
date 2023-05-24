import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { IsAuthRouteGuard } from './IsAuthRouteGuard';
import { AdminAComponent } from './admin/admin-a/admin-a.component';
import { AdminBComponent } from './admin/admin-b/admin-b.component';
import { SkillsListComponent } from './skills/skills-list/skills-list.component';
import { SkillsEditComponent } from './skills/skills-edit/skills-edit.component';
import { SkillResolverService } from './skills/skill-resolver.service';
import { IsAdminGuard } from './IsAdminGuard';
import { CustomersComponent } from './customers/component/customer-list/customers.component';
import { CustomerEditComponent } from './customers/component/customer-edit/customer-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.module').then((m) => m.DemosModule),
  },
  {
    path: 'skills',
    component: SkillsListComponent,
  },
  {
    path: 'skills/:id',
    component: SkillsEditComponent,
    resolve: { skillData: SkillResolverService },
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'customers/:id',
    component: CustomerEditComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'admina',
        component: AdminAComponent,
      },
      {
        path: 'adminb',
        component: AdminBComponent,
      },
    ],
    // canActivate: [IsAuthRouteGuard],
  },
  {
    path: 'skills-old',
    redirectTo: 'skills',
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./statistics/statistics.module').then((m) => m.StatisticsModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
