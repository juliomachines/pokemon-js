import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Victreebel extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Victreebel, { level, iv, ev });
  }
}
