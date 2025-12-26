import { Routes } from '@angular/router';

// Auth
import { SigninComponent } from './signin-component/signin-component';

// Admin


// Public
import { Home } from './public/home/home';
import { Formations } from './public/formations/formations';
import { Dashboard } from './administration/dashboard/dashboard';
import { Condidatslist } from './administration/condidat/condidatslist/condidatslist';
import { Condidatform } from './administration/condidat/condidatform/condidatform';
import { Formateurlist } from './administration/formateur/formateurlist/formateurlist';
import { Formateurform } from './administration/formateur/formateurform/formateurform';
import { Formationlist } from './administration/formation/formationlist/formationlist';
import { Formationform } from './administration/formation/formationform/formationform';
import { Sessionlist } from './administration/session/sessionlist/sessionlist';
import { Sessionform } from './administration/session/sessionform/sessionform';
import { Adminlayout } from './administration/adminlayout/adminlayout';
import { FormationsDetails } from './public/formations-details/formations-details';
import { Formationdetails } from './administration/formation/formationdetails/formationdetails';

export const routes: Routes = [
  // Public
  { path: '', component: Home },
  { path: 'formations', component: Formations },
  { path: 'formation/:id', component: FormationsDetails },

  // Auth
  { path: 'signin', component: SigninComponent },

  // Admin
  {
  path: 'admin-space',
  component: Adminlayout,
  children: [

    // Dashboard
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },

    // Candidats
    { path: 'condidates', component: Condidatslist },
    { path: 'condidates/add', component: Condidatform },
    { path: 'condidates/edit/:id', component: Condidatform },

    // Formateurs
    { path: 'trainers', component: Formateurlist },
    { path: 'trainers/add', component: Formateurform },
    { path: 'trainers/edit/:id', component: Formateurform },

    // Formations
    { path: 'formations', component: Formationlist },
    { path: 'formations/add', component: Formationform },
    { path: 'formations/edit/:id', component: Formationform },
    { path: 'formations/details/:id', component: Formationdetails },

    // Sessions
    { path: 'sessions', component: Sessionlist },
    { path: 'sessions/add', component: Sessionform },
    { path: 'sessions/edit/:id', component: Sessionform },
  ]
}
];
