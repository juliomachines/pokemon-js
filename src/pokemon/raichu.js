import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Raichu extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Raichu, { level, iv, ev });
  }
}
