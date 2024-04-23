import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { PokemonTCG as PK } from "@/interfaces/PokemonTCG";

export const getAllSets = async (): Promise<PK[]> => {
  let allSets = await PokemonTCG.getAllSets();
  console.log("all sets ==== ", allSets);
  return allSets;
};

export const getSetsById = async (setId: string) => {
  let set = await PokemonTCG.findSetByID(setId);
  //console.log("all sets ==== ",allSets)
  return set;
};

// export default getAllSets;
