import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DashboardTarefasResponse } from "../models/dashboard-tarefas.response";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TarefasService {
    private url = environment.apiTarefas
    private http = inject(HttpClient)

    // Método para consultar o dashboard de tarefas
    obterDashboard() : Observable<DashboardTarefasResponse[]> {
        return this.http.get<DashboardTarefasResponse[]>(`${this.url}/dashboard`)
    }

}

