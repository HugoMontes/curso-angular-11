import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor() {
    console.log('***ESTE ES EL CONSTRUCTOR DEL SERVICIO DEMO');
  }
}
