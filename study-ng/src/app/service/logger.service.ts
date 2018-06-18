import { Injectable } from '@angular/core';

/**
 * export: angular module sisteminde bir class diğer bir class tarafından import edilerek kullanılabiliyor.
 * bunun olabilmesi için export edilecek class'ın başına export keyword'ü ekleniyor.
 * 
 * @Injectable: bu class inject edilebilir.
 */
@Injectable()
export class LoggerService {

    log(msg: any) { console.log(msg); }
    error(msg: any) { console.error(msg); }
    warn(msg: any) { console.warn(msg); }
}
