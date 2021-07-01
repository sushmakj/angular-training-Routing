import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

export interface Server {
    name: string;
    id: number;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serverService: ServersService) { }
    resolve(route: ActivatedRouteSnapshot, status: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['id']);
    }
}