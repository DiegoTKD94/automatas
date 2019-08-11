import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Estado {
  name: string;
  inicial: boolean;
  aceptacion: boolean;
}

export interface Simbolo {
  name: string;
}

@Component({
  selector: 'app-construir',
  templateUrl: './construir.component.html',
  styles: []
})

export class ConstruirComponent implements OnInit {

  // BLOQUE USADO EN EL CHIPS
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  estados: Estado[] = [];
  simbolos: Simbolo[] = [];

  constructor() { }

  estadoInicial = new FormControl('', [
    Validators.required,
  ]);

  estadosAceptacion = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.estados.push({name: value.trim(), inicial: false, aceptacion: false});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Estado): void {
    const index = this.estados.indexOf(fruit);

    if (index >= 0) {
      this.estados.splice(index, 1);
    }
  }

  addSimb(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.simbolos.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeSimb(simbolo: Simbolo): void {
    const index = this.simbolos.indexOf(simbolo);

    if (index >= 0) {
      this.simbolos.splice(index, 1);
    }
  }
}
