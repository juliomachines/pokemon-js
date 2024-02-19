import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Ditto extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ditto, { level, iv, ev });
  }
}
