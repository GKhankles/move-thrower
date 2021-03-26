
/*
 * Would be a good idea to make a constants file that contains the below variables, this would allow for these
 * Constants to be accessed in other files, if we find that is needed later on
*/
export class moveCalculator {
    constructor () {
        this.moveCalculator = this.moveCalculator.bind(this);

        this.gen1matchups = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1],
                     [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5],
                     [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5],
                     [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5],
                     [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5],
                     [1, 1, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2],
                     [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1],
                     [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 2, 0.5, 0.5, 1],
                     [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1],
                     [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1],
                     [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1],
                     [1, 0.5, 1, 1, 2, 1, 0.5, 2, 1, 0.5, 2, 1, 1, 0.5, 1],
                     [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1],
                     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1],
                     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]];

        this.gen2to5matchups = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5],
                        [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2],
                        [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1],
                        [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1],
                        [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5],
                        [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5],
                        [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2],
                        [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0],
                        [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2],
                        [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5],
                        [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5],
                        [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5],
                        [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5],
                        [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
                        [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5]];

        this.gen6to8matchups = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],
                        [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
                        [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1],
                        [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
                        [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],
                        [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
                        [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],
                        [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
                        [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],
                        [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],
                        [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
                        [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],
                        [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
                        [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5],
                        [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],
                        [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1]];

        ////Currently set up so 1-9 are physical, 10+ are special ()
        this.elemental_types = {
            Normal: 1,
            Fire: 2,
            Water: 3,
            Electric: 4,
            Grass: 5,
            Ice: 6,
            Fight: 7,
            Poison: 8,
            Ground: 9,
            Flying: 10,
            Psychic: 11,
            Bug: 12,
            Rock: 13,
            Ghost: 14,
            Dragon: 15,
            Dark: 16,
            Steel: 17,
            Fairy: 18
	    };
        
        this.physical_types = [this.elemental_types.Normal, this.elemental_types.Fighting, 
            this.elemental_types.Flying, this.elemental_types.Poison, this.elemental_types.Ground, 
            this.elemental_types.Rock, this.elemental_types.Bug, this.elemental_types.Ghost, this.elemental_types.Steel];

        this.speical_types = [this.elemental_types.Fire, this.elemental_types.Water, 
            this.elemental_types.Grass, this.elemental_types.Electric, this.elemental_types.Psychic, 
            this.elemental_types.Ice, this.elemental_types.Dragon, this.elemental_types.Dark, this.elemental_types.Fairy];

        this.weather_types = {
            Clear: 1,
            Harsh_Sunlight: 2,
            Rain: 3,
            Sandstorm: 4,
            Hail: 5,
            Shadowy_Aura: 6,
            Fog: 7,
            Strong_Winds: 8
        };

        this.move_category = {
            Physical: 1,
            Special: 2
        };
    }

    //TODO: Test out with array of numbers or something like that
    moveCalculator(AtkPokemon, DefPokemon, generation, weather){
        //Array of the damage of every move. Retains the same index as the passed in Moves object
        let move_Damage = []
        AtkPokemon.Moves.forEach(move => {
            let damage = calculateDamage(move, AtkPokemon, DefPokemon, generation, weather)
            move_Damage.push({move: move, min_dmg: damage.min_damage, max_dmg: damage.max_damage})
        });

        //Sort list of moves by max_dmg key in descending order
        let optimalMoveList = move_Damage.sort((a,b) =>  b.max_dmg-a.max_dmg)
        return optimalMoveList
    }

//This function calculates the damage for each move (stage_cond is an object we havent made yet)
    calculateDamage(move, AtkPokemon, DefPokemon, generation, weather, stage_cond){

        // Modifier Variables (1 by default)
        let Targets_mod = 1;
        let Weather_mod = 1;
        let Badge_mod = 1;
        let Critical_mod = 1;
        //let Random_mod = 1;
        let Stab_mod = 1;
        let Type_mod = 1;
        let Burn_mod = 1;
        let Move_mod = 1;
        let Ability_mod = 1;
        let Item_mod = 1;

        let max_damage = 0;
        let min_damage = 0;

        //Ready to be tested
        if (generation == 1){
            let max_level = 2*AtkPokemon.level;
            let min_level = AtkPokemon.level;

            let power = move.power;

            let max_rand_mod = 1;
            let min_rand_mod = 217/255;

            //Chooses correct a and d based on type of move
            let a = 0;
            let d = 0;
            if (this.physical_types.indexOf(move.type) > -1) {
                a = AtkPokemon.attack;
                d = DefPokemon.defense;
            } else {
                a = AtkPokemon.special_attack;
                d = DefPokemon.special_defense;
            }

            //Assumes type is an arrray
            if(move.type.in(AtkPokemon.type)){
                Stab_mod = 1.5;
            }

            //Skipped type for now
            let max_modifier = Targets_mod*Weather_mod*Badge_mod*Critical_mod*Stab_mod*Type_mod*Burn_mod*Move_mod*Ability_mod*Item_mod;
            let min_modifier = Targets_mod*Weather_mod*Badge_mod*Critical_mod*Stab_mod*Type_mod*Burn_mod*Move_mod*Ability_mod*Item_mod;
            max_damage = (((2*max_level/5 + 2)*power*a/d)/50 + 2)*max_modifier;
            min_damage = (((2*min_level/5 + 2)*power*a/d)/50 + 2)*min_modifier;
        }

        if (generation == 2){
            let crit_level = 2*AtkPokemon.level
            let min_level = AtkPokemon.level

            let max_rand_mod = 1
            let min_rand_mod = 217/255

            //Chooses correct a and d based on type of move
            let a = 0
            let d = 0
            
            if (this.physical_types.indexOf(move.type) > -1) {
                a = AtkPokemon.attack
                d = DefPokemon.defense
            } else {
                a = AtkPokemon.special_attack
                d = DefPokemon.special_defense
            }

            // Weather
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Fire){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Water){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Water){
                Weather_mod = 0.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Fire){
                Weather_mod = 0.5
            }
        }

        if (generation == 3){
            let level = AtkPokemon.level
            let power = move.power
            
            //Chooses correct a and d based on type of move
            let a = 0
            let d = 0

            if (physical_types.indexOf(move.type) > -1) {
                a = AtkPokemon.baseStats.attack
                d = DefPokemon.baseStats.defense
            } else {
                a = AtkPokemon.baseStats.SpAtk
                d = DefPokemon.baseStats.SpDef
            }
        
            //Calculating Modifier Components
            // Weather
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Fire){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Water){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Water){
                Weather_mod = 0.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Fire){
                Weather_mod = 0.5
            }

            //Randomness
            let max_rand_mod = 1
            let min_rand_mod = 0.85
            //STAB
            if (move.type.in(AtkPokemon.type)){
                Stab_mod = 1.5
            }
            //Type effects (fix later) (check if second type is actual a thing)
            //This assumes move array has two vals, and second is null if pokemon only has one type
            Type_mod = this.gen2to5matchups[AtkPokemon.move.type][DefPokemon.type[0]]
            Type_mod *= DefPokemon.type[1] == null ? 1 : this.gen2to5matchups[AtkPokemon.move.type][DefPokemon.type[1]]
            
            let max_modifier = Targets_mod*Weather_mod*Badge_mod*Critical_mod*max_rand_mod*Stab_mod*Type_mod*Burn_mod*Move_mod*Ability_mod*Item_mod
            let min_modifier = Targets_mod*Weather_mod*Badge_mod*Critical_mod*min_rand_mod*Stab_mod*Type_mod*Burn_mod*Move_mod*Ability_mod*Item_mod
            
            max_damage = (((2*level/5 + 2)*power*a/d)/50 + 2)*max_modifier
            min_damage = (((2*level/5 + 2)*power*a/d)/50 + 2)*min_modifier
        }

        if (generation == 4){

            let max_rand_mod = 1
            let min_rand_mod = 0.85

            if (move.category <= this.move_category.Physical) {
                let a = AtkPokemon.attack
                let d = DefPokemon.defense
            } else if (move.category <= this.move_category.Special) {
                let a = AtkPokemon.special_attack
                let d = DefPokemon.special_defense
            }
            
            // Weather
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Fire){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Water){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Water){
                Weather_mod = 0.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Fire){
                Weather_mod = 0.5
            }
        }

        if (generation == 5){

            let max_rand_mod = 1
            let min_rand_mod = 0.85

            if (move.category <= this.move_category.Physical) {
                let a = AtkPokemon.attack
                let d = DefPokemon.defense
            } else if (move.category <= this.move_category.Special) {
                let a = AtkPokemon.special_attack
                let d = DefPokemon.special_defense
            }
            
            // Weather
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Fire){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Water){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Water){
                Weather_mod = 0.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Fire){
                Weather_mod = 0.5
            }
        }

        if (generation == 6){

            let max_rand_mod = 1
            let min_rand_mod = 0.85

            if (move.category <= this.move_category.Physical) {
                let a = AtkPokemon.attack
                let d = DefPokemon.defense
            } else if (move.category <= this.move_category.Special) {
                let a = AtkPokemon.special_attack
                let d = DefPokemon.special_defense
            }
            
            // Weather
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Fire){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Water){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Water){
                Weather_mod = 0.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Fire){
                Weather_mod = 0.5
            }
        } 

        if (generation == 7){

            let max_rand_mod = 1
            let min_rand_mod = 0.85

            if (move.category <= this.move_category.Physical) {
                let a = AtkPokemon.attack
                let d = DefPokemon.defense
            } else if (move.category <= this.move_category.Special) {
                let a = AtkPokemon.special_attack
                let d = DefPokemon.special_defense
            }
            
            // Weather
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Fire){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Water){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Water){
                Weather_mod = 0.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Fire){
                Weather_mod = 0.5
            }
        } 

        if (generation == 8){

            let max_rand_mod = 1
            let min_rand_mod = 0.85

            if (move.category <= this.move_category.Physical) {
                let a = AtkPokemon.attack
                let d = DefPokemon.defense
            } else if (move.category <= this.move_category.Special) {
                let a = AtkPokemon.special_attack
                let d = DefPokemon.special_defense
            }
            
            // Weather
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Fire){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Water){
                Weather_mod = 1.5
            }
            if (stage_cond.weather == this.weather_types.Harsh_Sunlight && move.type == this.elemental_types.Water){
                Weather_mod = 0.5
            }
            if (stage_cond.weather == this.weather_types.Rain && move.type == this.elemental_types.Fire){
                Weather_mod = 0.5
            }
        } 

        return {min_damage, max_damage}
    }
}

export default moveCalculator;