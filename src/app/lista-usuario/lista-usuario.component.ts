import { Component, OnInit ,EventEmitter ,Output} from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
 
	listaDeContatos: ContatoModel [];
  @Output() idClicado = new EventEmitter(); 
  private result:any;
  constructor(private dataBaseService :ContatosDataBaseService , private http: HttpClient) { }

  ngOnInit() {
  	/*
    this.http.get('https://lucasp18.github.io/AngularLivroProjetoFinal/dist/teste.json').subscribe( data => {
      console.log('antes da request');
      console.log(data);
      this.result = data['nomes']; 
      console.log('depois da request');
    });
    */
    this.dataBaseService.enviarContato.subscribe(contatos => { this.listaDeContatos = contatos ; console.log("contatos"+contatos)});
    console.log(this.listaDeContatos);
  }

  contatoClicado(item:number){
  	console.log('zzzzzzzz ' +item);
  	return this.idClicado.emit(item);
  }
}
