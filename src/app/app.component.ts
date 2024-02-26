import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  formulaire = new FormGroup({
    email: new FormControl(''),
    expiration: new FormControl(''),

  })

  fichierAUpload: File[] = [];


  onFilesSelected(event: any) {
    const files = event.target.files;
    for(const file of files) {
      this.fichierAUpload.push(file)
    }
  }


  onSubmit() {

    const formData = new FormData();
    
  }

}


