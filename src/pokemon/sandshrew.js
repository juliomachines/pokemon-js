import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Sandshrew extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Sandshrew, { level, iv, ev });
  }
}
