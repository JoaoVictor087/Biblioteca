import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Register } from '../models/request/register';
import { Observable } from 'rxjs';
import { Login } from '../models/request/login';
import { RegisterResponse } from '../models/response/register-response';
import { LoginResponse } from '../models/response/login-response';
import { LivroModel } from '../models/response/livro-model';
import { ReservaResponse } from '../models/response/reserva';
import { Reserva } from '../models/request/reserva';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080';

  registerUser(dto: Register):Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.baseUrl + "/usuarios", dto)
  }

  login(dto: Login):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.baseUrl + "/login", dto)
  }

  getAllBooks(){
    return this.http.get<LivroModel[]>(this.baseUrl + "/livros")
  }

  reserveBook(dto: Reserva){
    return this.http.post(this.baseUrl +  "/reservas", dto)
  }

  getReservedBooks(idUsuario: number):Observable<ReservaResponse[]>{
    return this.http.get<ReservaResponse[]>(this.baseUrl + "/reservas" + "/usuario" + "/" + idUsuario);
  }

  devolverLivro(idReserva: number, reserve: ReservaResponse){
    return this.http.put(this.baseUrl + "/reservas" + "/" + idReserva + "/devolver", reserve);
  }
}
