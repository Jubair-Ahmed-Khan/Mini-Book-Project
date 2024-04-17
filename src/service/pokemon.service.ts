import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

const getAllSets = async()=>{
  let allSets = await PokemonTCG.getAllSets();
  console.log("all sets ==== ",allSets)
  return allSets;
}

export default getAllSets;
