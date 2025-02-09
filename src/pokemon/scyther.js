import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Scyther extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Scyther, { level, iv, ev });
  }
}
