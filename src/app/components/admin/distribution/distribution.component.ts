import { Component, TemplateRef, OnInit} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss']
})
export class DistributionComponent implements OnInit {
 
 // constructor() {}
  constructor(public modalService: BsModalService){}
  ngOnInit(): void {
  }
  modalRef?: BsModalRef;
  posicionActualizar:number = 0;
  posicionVer:number =0;
  openModal(template: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template);
    this.posicionActualizar=position;
    this.d_descripcion=this.products[this.posicionActualizar].description;
    this.d_ruta=this.products[this.posicionActualizar].image;
    this.d_nombre=this.products[this.posicionActualizar].name;
    this.d_porcentaje=this.products[this.posicionActualizar].porcentaje;
    this.d_estado=this.products[this.posicionActualizar].estado;
  }
  openModal1(template1: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template1);
    this.posicionVer=position;
    this.d_descripcion=this.products[this.posicionVer].description;
    this.d_ruta=this.products[this.posicionVer].image;
    this.d_nombre=this.products[this.posicionVer].name;
    this.d_porcentaje=this.products[this.posicionVer].porcentaje;
    this.d_estado=this.products[this.posicionVer].estado;
    this.d_price=this.products[this.posicionVer].price;
  }
  d_descripcion: string="";
  d_ruta: string ="";
  d_nombre: string ="";
  d_porcentaje: string ="";
  d_estado: string ="";
  d_price: number = 0;


  title = 'angular-tarea';

  products: Product[] = [{
    name: "parquet",
    price: 28,
    image: "https://media.istockphoto.com/photos/sample-of-wood-chipboard-wooden-laminate-veneer-material-for-interior-picture-id1135678299?b=1&k=20&m=1135678299&s=612x612&w=0&h=JVmRpRls_0Pq9f5GT2EPtmWXbzlLMXGlKX6L4YOuKU8=",
    description: "Paquete de Parquet  x24 unidades",
    porcentaje: "100%",
    estado: "Entregado"
  },
  {
    name: "parquet",
    price: 28,
    image: "https://media.istockphoto.com/photos/sample-of-wood-chipboard-wooden-laminate-veneer-material-for-interior-picture-id1135678299?b=1&k=20&m=1135678299&s=612x612&w=0&h=JVmRpRls_0Pq9f5GT2EPtmWXbzlLMXGlKX6L4YOuKU8=",
    description: "Paquete de Parquet  x24 unidades",
    porcentaje: "100%",
    estado: "Entregado"
  }
];
actComprobante(): void{
    
  const replace: any ={
    name: this.d_nombre,
    price: 28,
    image: this.d_ruta,
    description: this.d_descripcion,
    porcentaje: this.d_porcentaje,
    estado: this.d_estado
  }
  this.products.splice(this.posicionActualizar,1,replace);
  this.d_descripcion="";
  this.d_ruta="";
  this.d_nombre="";
  this.d_porcentaje="";
  this.d_estado="";
  console.log(this.d_descripcion)
  console.log(this.products);
}
  
  
}
