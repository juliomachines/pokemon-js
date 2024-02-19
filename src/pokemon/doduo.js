import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Doduo extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Doduo, { level, iv, ev });
  }
}
