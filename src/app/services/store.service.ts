import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Productos } from '../modelp/prodctos.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  productos: Productos[] = [{
    name: "parquet",
    descriptionn: "hola munfod",
    stoke: 100,
    Precio: 1000,
  }]

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
]

  constructor() { }
}
