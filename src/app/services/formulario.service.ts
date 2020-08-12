import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }

  // Enviar formulario por form-data con una imagen
  crearCurso(archivo: File, curso: any) {
    console.log(archivo, curso);
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      formData.append('Imagen', archivo, archivo.name);
      formData.append('curso', JSON.stringify(curso));
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Imagen subida');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Fallo la solictud');
            reject(JSON.parse(xhr.response));
          }
        }
      };
      const url = environment.urlApiBase + 'Curso/CrearCurso';
      xhr.open('POST', url, true);
      xhr.setRequestHeader('token', (localStorage.getItem('token') == null ? '' : localStorage.getItem('token')));
      xhr.send(formData);
    });
  }

}
