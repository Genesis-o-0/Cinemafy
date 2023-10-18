import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, NotFoundComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
})
export class SharedModule {}
