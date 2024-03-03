import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Ponyta extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ponyta, { level, iv, ev });
  }
}
