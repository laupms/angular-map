import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  //création du FormGroup avec chaque FormControl(champs)
  userForm: FormGroup = new FormGroup({

    nom : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    prenom : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    objet : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    msg : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),

    conditions : new FormControl(false, [Validators.requiredTrue])
  });

}
