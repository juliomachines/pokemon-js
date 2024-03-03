
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class HiJumpKick extends Move {
  constructor() {
    super(moves.HiJumpKick);
  }
}    
  