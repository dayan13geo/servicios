import { TemplateRef, Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelp/prodctos.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productos: Productos[] = [];

  constructor( private storeService: StoreService ,     
    public modalService: BsModalService) { 
      this.productos = storeService.productos;
    }

    
ngOnInit(): void {
  }
  modalRef?: BsModalRef;
  posicionActualizar:number = 0;
  posicionVer:number =0;
  posicionAgregar =0;
  openModal(template: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template);
    this.posicionActualizar=position;
    this.d_nombre=this.productos[this.posicionActualizar].name;
    this.d_descripcionn=this.productos[this.posicionActualizar].descriptionn;
    this.d_Stoke=this.productos[this.posicionActualizar].stoke;
    this.d_Precio=this.productos[this.posicionActualizar].Precio;
  }
  openModal1(template1: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template1);
    this.posicionVer=position;
    this.d_descripcionn=this.productos[this.posicionVer].descriptionn;
    this.d_nombre=this.productos[this.posicionVer].name;
    this.d_Stoke=this.productos[this.posicionVer].stoke;
    this.d_Precio=this.productos[this.posicionVer].Precio;
  
  }
  openModal2(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2);
  }


  d_nombre: string ="";
  d_descripcionn: string="";
  d_Stoke: number = 0;
  d_Precio: number = 0;
  title = 'angular-tarea';



  addProducto(): void{
    const newProducto ={
      name: this.d_nombre,
      descriptionn: this.d_descripcionn,
      stoke: this.d_Stoke,
      Precio: this.d_Precio

    }

    this.productos.push(newProducto);
    this.d_nombre = "";
    this.d_descripcionn = "";
    this.d_Stoke=0;
    this.d_Precio=0;
  }

  actComprobante1(): void{
    
    const replace: any ={
      name: this.d_nombre,
      descriptionn: this.d_descripcionn,
      stoke: 100,
      Precio: 1000,
    }
    this.productos.splice(this.posicionActualizar,1,replace);
    this.d_descripcionn="";
    this.d_nombre="";
    this.d_Stoke=0;
    this.d_Precio=0;
    console.log(this.d_descripcionn)
    console.log(this.productos);
  }
  deleteProductos(position: number): void{
    this.productos.splice(position,1);
  }
}
