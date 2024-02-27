import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  formulaire = new FormGroup({
    email: new FormControl(''),
    expiration: new FormControl(''),

  })

// dans cette on stocke l'ensemble des fihciers à uploader
fichierTeleverser: File[] = [];

// Définir une méthode pour récupérer les fichiers selctionnés
onFilesSelected(event: any) {
  const files = event.target.files;
  for(const file of files) {
    this.fichierTeleverser.push(file) // Ajoute le ficher au tableau des fichiers à uploader
  }
}

// Définier une méthode qui va soumetre toutes les données du formulaire
onSubmit() {
  console.log(this.formulaire.value);
  }

}










