import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Arbok extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Arbok, { level, iv, ev });
  }
}
