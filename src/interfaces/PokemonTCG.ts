interface PokemonTCG {
    id: string,
    images :{
        symbol:string,
        logo:string,
    },
    legalities:{
        unlimited:string,
    },
    name: string,
    printedTotal: number,
    ptcgoCode: string,
    releaseDate: string,
    series: string,
    total: number,
    updatedAt:string,
}

// export interface Pokemon{
//     id: string;
//   images: ISetImage;
//   legalities: ILegality;
//   name:  string;
//   printedTotal: number;
//   ptcgoCode: string;
//   releaseDate: string;
//   series:  string;
//   total: number;
//   updatedAt: string;
// }