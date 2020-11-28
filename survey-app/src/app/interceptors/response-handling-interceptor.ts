import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlingInterceptor {
  constructor(public toastr: ToastrService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((succses) =>{
      if(succses instanceof(HttpResponse)){
        if(succses.url.endsWith("add") || succses.url.endsWith("edit") || succses.url.endsWith("register") || succses.url.endsWith("login"))
        this.toastr.success(succses.body.message,"Success")
      }
    }),catchError((error)=>{
      this.toastr.error(error.error, "Error")
      throw error;
    }))
}}
