import { Component, signal, computed, effect } from '@angular/core';
import { Log } from './decorators/logger';
import { LogSimple } from './decorators/loggerSimple';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected name = signal("Pikachu");
  protected life = signal(21);
  protected doubleLife = computed(() => this.life() * 2);
  // Taille : .. Petit .. ]15 .. Moyen .. 25[ .. Grand ..
  protected taille = computed(() => this.life() <= 15 ? 'Petit' : this.life() >= 25 ? 'Grand' : 'Moyen');

  protected imgSrc = signal("img/pokemon/025_pikachu.png"); 

  protected propColSpan = signal(2);

  constructor() {
    effect(() => {
      console.log('Le compteur a été mis à jour : ', this.life(), ' ', this.doubleLife());
    });
  }

  //@LogSimple()
  public incrementLife() {
    this.life.update(n => n + 1);
  }

  //@Log()
  public decrementLife() {
    this.life.update(n => n - 1);
  }

  public reset() {
    this.life.set(21);
  }
}

