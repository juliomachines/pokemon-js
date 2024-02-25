import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Venonat extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Venonat, { level, iv, ev });
  }
}
