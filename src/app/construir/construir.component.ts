import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

// Chips
export interface Estado {
  name: string;
}

export interface Simbolo {
  value: string;
}

@Component({
  selector: 'app-construir',
  templateUrl: './construir.component.html',
  styles: []
})
export class ConstruirComponent implements OnInit {
  // Chips
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  simbolosEntrada: Simbolo[] = [];

  estados: Estado[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  constructor() { }

  // simbolosEntrada = new FormControl('', [
  //   Validators.required,
  // ]);

  // estados = new FormControl('', [
  //   Validators.required,
  // ]);

  estadoInicial = new FormControl('', [
    Validators.required,
  ]);

  estadosAceptacion = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    console.log(event);
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.estados.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(estado: Estado): void {
    const index = this.estados.indexOf(estado);

    if (index >= 0) {
      this.estados.splice(index, 1);
    }
  }
}
