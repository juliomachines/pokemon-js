import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Kabutops extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kabutops, { level, iv, ev });
  }
}
