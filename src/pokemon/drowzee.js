import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Drowzee extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Drowzee, { level, iv, ev });
  }
}
