//Create the same pokemon trainer with 6 pokemons
//Create a function that calculates the strongest pokemon (more attributes)
import { Bulbasaur } from "../src/pokemon/bulbasaur.js";
import { Charmander } from "../src/pokemon/charmander.js";
import { Magikarp } from "../src/pokemon/magikarp.js";
import { Mew } from "../src/pokemon/mew.js";
import { Mewtwo } from "../src/pokemon/mewtwo.js";
import { Hitmonchan } from "../src/pokemon/hitmonchan.js";
import { Abra } from "../src/pokemon/abra.js";
import { PokemonTrainer } from "../src/base/pokemonTrainer.js";

const iv = {
  hp: 15,
  attack: 10,
  def: 12,
  special: 14,
  speed: 10,
};

const ev = {
  hp: 0,
  attack: 0,
  def: 0,
  special: 0,
  speed: 0,
};

const Julio = new PokemonTrainer({ name: "Julio", party: [], money: 0 });
const bulbasaur = new Bulbasaur({ level: 5, iv, ev });
const charmander = new Charmander({ level: 5, iv, ev });
const magikarp = new Magikarp({ level: 1, iv, ev });
const mew = new Mew({ level: 40, iv, ev });
const mewtwo = new Mewtwo({ level: 80, iv, ev });
const hitmonchan = new Hitmonchan({ level: 40, iv, ev });
const abra = new Abra({ level: 15, iv, ev });

Julio.addPokemon(bulbasaur);
Julio.addPokemon(charmander);
Julio.addPokemon(magikarp);
Julio.addPokemon(mew);
Julio.addPokemon(mewtwo);
Julio.addPokemon(hitmonchan);
Julio.addPokemon(abra);



function getPowerfulPoke(){
    let powerfulPoke = Julio.party[0]; 

    for(const pokemon of Julio.party){
        if(powerfulPoke.level < pokemon.level){
            powerfulPoke = pokemon;
        }
    }
    console.log("Pokémon mais forte:", powerfulPoke.name, "Level:", powerfulPoke.level);
    return powerfulPoke; 
}

const powerfulPoke = getPowerfulPoke();

