import { Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'course-list',
        component: CourseListComponent
    },
    {
        path: 'create-course',
        component: CreateCourseComponent
    },
    {
        path: 'edit-course/:id',
        component: EditCourseComponent
    },
];