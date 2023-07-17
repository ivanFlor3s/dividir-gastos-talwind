import { Inject, Injectable } from '@angular/core';
import { MsgeError } from 'src/app/interfaces';
import { MSGE_ERROR_TOKEN } from '../errors.module';

@Injectable()
export class ValidationErrorMsgeService {
    constructor(@Inject(MSGE_ERROR_TOKEN) private config: MsgeError) {
        console.log('init service');
    }

    resolverErrorMessage(key: string): string | void {
        if (key) {
            console.log(key);
            return this.config[key];
        }
    }
}
