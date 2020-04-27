import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PomodoroComponent } from "./pomodoro/pomodoro.component";
import { HomeComponent } from "./home/home.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";

const routes: Routes = [
  { path: "pomodoro", component: PomodoroComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot", component: ForgotComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
