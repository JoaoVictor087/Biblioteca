import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const publicRoutes = ['/login', '/usuarios'];

  const url = new URL(req.url, window.location.origin);
  const path = url.pathname;

  const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

  const token = authService.token();

  if (isPublicRoute || !token) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authReq);
};
