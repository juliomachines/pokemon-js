import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Weepinbell extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Weepinbell, { level, iv, ev });
  }
}
