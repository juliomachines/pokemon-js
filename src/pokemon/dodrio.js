import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Dodrio extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dodrio, { level, iv, ev });
  }
}
