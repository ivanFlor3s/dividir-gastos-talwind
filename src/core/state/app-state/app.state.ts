import { Injectable } from '@angular/core';
import { AuthService } from '@core/services';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { Login, Logout } from './app.actions';
import { tap } from 'rxjs';
import { Helper } from '@core/utils';
import Swal from 'sweetalert2';

export interface AppStateModel {
    token: string;
    expiration: string;
}

const defaultAppState: AppStateModel = {
    token: '',
    expiration: '',
};

@State<AppStateModel>({
    name: 'app',
    defaults: defaultAppState,
})
@Injectable()
export class AppState {
    @Selector()
    static token(state: AppStateModel) {
        return state.token;
    }

    @Selector([AppState.token])
    static validToken(state: AppStateModel) {
        return !!state.token && Helper.isACurrentDate(state.expiration);
    }

    constructor(private _authService: AuthService) {}

    @Action(Login)
    login(ctx: StateContext<AppStateModel>, { email, password }: Login) {
        return this._authService.login(email, password).pipe(
            tap({
                next(res) {
                    const { token, expiration } = res;
                    ctx.patchState({ token, expiration });
                },
                error(err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error al iniciar sesión',
                        text: err.error.error,
                    });
                },
            })
        );
    }

    @Action(Logout)
    logout({ setState }: StateContext<AppStateModel>) {
        setState(defaultAppState);
    }
}
