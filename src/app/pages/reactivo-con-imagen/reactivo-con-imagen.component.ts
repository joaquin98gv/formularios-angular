import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormularioService } from '../../services/formulario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactivo-con-imagen',
  templateUrl: './reactivo-con-imagen.component.html',
  styleUrls: ['./reactivo-con-imagen.component.css']
})
export class ReactivoConImagenComponent {

  formulario: FormGroup;
  image: File;
  imageTemporal: any;
  constructor(  private fb: FormBuilder,
                private formularioS: FormularioService,
                private router: Router  ) {
    this.crearFormulario();
  }

  crearFormulario(): any{
    this.formulario = this.fb.group({
      Titulo: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      Descripcion: [''],
      EmailContacto: [''],
    });
  }

  guardar(): any{
    if (this.formulario.valid) {
      this.subir();
    }
  }

  subir() {
    this.formularioS.crearCurso(this.image, this.formulario.value)
      .then((x: any) => {
        if (x.status === 200) {
          console.log('Todo correcto');
          this.router.navigateByUrl('/');
        } else {
          console.error(x.message);
        }
      })
      .catch(resp => {
        console.log(resp);
      });
  }

  fileChange(archivo: File) {
    if (!archivo) {
      this.image = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      console.error('El archivo seleccionado no es admitido como imagen');
      this.image = null;
      return;
    }
    this.image = archivo;
    // console.log(this.image);

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imageTemporal = reader.result;
  }

}
