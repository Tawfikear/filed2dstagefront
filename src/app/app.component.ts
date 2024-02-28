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


fichierTeleverser: File[] = [];


onFilesSelected(event: any) {
  const files = event.target.files;
  for(const file of files) {
    this.fichierTeleverser.push(file)
  }
}

onSubmit() {
  const formData = new FormData();
    formData.append('email', this.formulaire.get('email').value)
    formData.append('expiration', this.formulaire.get('expiration').value)
    for (const fichier of this.fichierTeleverser) {
      formData.append('files', fichier, fichier.name)
    }
  }

}










