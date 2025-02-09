import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Nidoking extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Nidoking, { level, iv, ev });
  }
}
