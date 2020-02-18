export class Producto {

    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    categoria: string;
    count: number;

    constructor(pId: number, pName: string, pDescription: string, pImage: string, pPrice: string, pCategoria: string, pCount: number) {
        this.id = pId;
        this.name = pName;
        this.description = pDescription;
        this.image = pImage;
        this.price = pPrice;
        this.categoria = pCategoria;
        this.count = pCount;
    }
}
