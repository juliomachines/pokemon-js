import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Bellsprout extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Bellsprout, { level, iv, ev });
  }
}
