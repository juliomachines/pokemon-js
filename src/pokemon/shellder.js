import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Shellder extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Shellder, { level, iv, ev });
  }
}
