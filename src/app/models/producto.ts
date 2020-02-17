export class Producto {

    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    categoria: string;

    constructor(pId: number, pName: string, pDescription: string, pImage: string, pPrice: string, pCategoria: string) {
        this.id = pId;
        this.name = pName;
        this.description = pDescription;
        this.image = pImage;
        this.price = pPrice;
        this.categoria = pCategoria;
    }
}
