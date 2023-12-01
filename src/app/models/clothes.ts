export interface Clothes{
    id?: number;
    nombre?: string;
    categoria?: string;
    cantidad_existente?: number;
    precio?: number;
    imagen_base64?: string | ArrayBuffer | null;
}