import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Butterfree extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Butterfree, { level, iv, ev });
  }
}
