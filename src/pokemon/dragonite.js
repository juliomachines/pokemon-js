import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Dragonite extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dragonite, { level, iv, ev });
  }
}
