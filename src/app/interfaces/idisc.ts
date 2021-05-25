export interface IDisc{
    id: string;
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