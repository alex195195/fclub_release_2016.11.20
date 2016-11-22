import { Routes } from "@angular/router";

import { NoveltyStartComponent } from "./novelty-start.component";
import { NoveltyDetailComponent } from "./novelty-detail/novelty-detail.component";
import { NoveltyEditComponent } from "./novelty-edit/novelty-edit.component";

export const NOVELTY_ROUTES: Routes = [
  { path: '', component: NoveltyStartComponent },
  { path: 'new', component: NoveltyEditComponent },
  { path: ':id', component: NoveltyDetailComponent },
  { path: ':id/edit', component: NoveltyEditComponent }
];