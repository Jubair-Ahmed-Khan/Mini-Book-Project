// interface PokemonTCG {
//     id: string,
//     images :{
//         symbol:string,
//         logo:string,
//     },
//     legalities:{
//         unlimited:string,
//     },
//     name: string,
//     printedTotal: number,
//     ptcgoCode: string,
//     releaseDate: string,
//     series: string,
//     total: number,
//     updatedAt:string,

import { ILegality, SetImage } from "pokemon-tcg-sdk-typescript/dist/sdk";

// }
export interface PokemonTCG {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: ILegality;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: SetImage;
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
