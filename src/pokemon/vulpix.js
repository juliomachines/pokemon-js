import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Vulpix extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Vulpix, { level, iv, ev });
  }
}
