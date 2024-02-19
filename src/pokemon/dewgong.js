import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Dewgong extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dewgong, { level, iv, ev });
  }
}
