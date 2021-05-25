export interface IDisc{
    id: number|undefined;
    title: string;
    price: number;
    description: string;
    image:string;
    type:string;
    artist: string;
    released:string;
    genre:string;
}

export interface IApiDiscResponse {
    success : boolean,
    message : string,
    data? : Array<IDisc>
}
