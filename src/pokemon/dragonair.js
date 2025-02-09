import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Dragonair extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dragonair, { level, iv, ev });
  }
}
