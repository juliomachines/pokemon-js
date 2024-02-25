import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Wartortle extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Wartortle, { level, iv, ev });
  }
}
