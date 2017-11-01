import { Component, OnInit, Input } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

	@Input() contato:ContatoModel;
  constructor(private route:ActivatedRoute, private router :Router ) { }

  ngOnInit() {
  	let id = this.route.snapshot.paramMap.get('id');
  	console.log(id);
  	console.log("teste");
  }

}
