import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ToolsComponent } from './views/tools/tools.component';

export const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'tools', component: ToolsComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Default redirect
      ]
    }
  ];
