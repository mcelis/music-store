
import {IApiDiscResponse, IDisc} from '../interfaces/idisc'
export class Disc implements IDisc{
    id: string;
    title: string;
    price: number;
    description: string;
    image:string;
    type:string;
    artist: string;
    released:string;
    genre:string;

    constructor(id:string,title:string,price:number,description:string,image:string,type:string,artist:string,released:string,genre:string){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.type = type;
        this.artist = artist;
        this.released = released;
        this.genre = genre;
    }
}

export class ApiDiscResponse implements IApiDiscResponse {
    success : boolean;
    message : string;
    data? : Array<IDisc>;

    constructor(
        success : boolean,
        message : string,
        data? : Array<IDisc>
    ){
        this.success = success;
        this.message = message;
        this.data = data;
    }
}