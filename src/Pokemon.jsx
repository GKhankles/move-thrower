import React from 'react';
import Dropdown from './Dropdown.jsx';
import StatCalculator from './StatCalculator.js';
import pokedexGen1 from './pokedex_gen_1.txt';
import pokedexGen2 from './pokedex_gen_2.txt';
import pokedexGen3 from './pokedex_gen_3.txt';
import pokedexGen4 from './pokedex_gen_4.txt';
import pokedexGen5 from './pokedex_gen_5.txt';
import pokedexGen6 from './pokedex_gen_6.txt';
import pokedexGen7 from './pokedex_gen_7.txt';
import pokedexGen8 from './pokedex_gen_8.txt';
import './global.js';
import firebase from 'firebase';


export class Pokemon extends React.Component {
    constructor(props) {
        super(props);
		this.retrievePkmnFromList = this.retrievePkmnFromList.bind(this);
		this.updatePkmnInfo = this.updatePkmnInfo.bind(this);
		this.retrievePkmnInfo = this.retrievePkmnInfo.bind(this);
		this.updatePkmnEV = this.updatePkmnEV.bind(this);
		this.updatePkmnIV = this.updatePkmnIV.bind(this);
		this.updatePkmnLevel = this.updatePkmnLevel.bind(this);
		this.retrieveNatureFromList = this.retrieveNatureFromList.bind(this);
		this.retrieveStatusFromList = this.retrieveStatusFromList.bind(this);
		this.getTypeColor = this.getTypeColor.bind(this);
		this.genChangePokemonReset = this.genChangePokemonReset.bind(this);
		this.calcHPIV = this.calcHPIV.bind(this);

		this.natureList = ["Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", 
			"Relaxed", "Impish", "Lax", "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", 
			"Mild", "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy", "Careful", "Quirky"];
		
		this.statusList = ["Healthy","Badly Poisoned","Burn","Freeze","Paralysis","Poisoned","Sleep"];

		this.statCalculator = new StatCalculator();

		this.curGen = global.curGeneration;

        this.state = {
            uid: "",
			curPkmn: "Bulbasaur",
			baseStats: {			
				HP: 0,
				Atk: 0,
				SpAtk: 0,
				Def: 0,
				SpDef: 0,
				Spd: 0
			},
			ivInfo: {			
				HP: 0,
				Atk: 0,
				SpAtk: 0,
				Def: 0,
				SpDef: 0,
				Spd: 0
			},
			evInfo: {			
				HP: 0,
				Atk: 0,
				SpAtk: 0,
				Def: 0,
				SpDef: 0,
				Spd: 0
			},
			totalStats: {			
				HP: 0,
				Atk: 0,
				SpAtk: 0,
				Def: 0,
				SpDef: 0,
				Spd: 0
			},
			level: 1,
			nature: "Hardy",
			status: "Healthy",
			moves: [],
			types: [],
			pkmnImg: "",
			pokemonList: [],
			isAdvanced: true,
			readySwap: false,
			savedName: "",
			display : false,
			nameList: [],
			pkmnList: [],
			error: ""
        };
	}

	getTypeColor(type) {
		switch (type) {
			case "Fire":
				return "#EE8130";
			case "Water":
				return "#6390F0";
			case "Electric":
				return "#F7D02C";
			case "Grass":
				return "#7AC74C";
			case "Ice":
				return "#96D9D6";
			case "Fighting":
				return "#C22E28";
			case "Poison":
				return "#A33EA1";
			case "Ground":
				return "#E2BF65";
			case "Flying":
				return "#A98FF3";
			case "Psychic":
				return "#F95587";
			case "Bug":
				return "#A6B91A";
			case "Rock":
				return "#B6A136";
			case "Ghost":
				return "#735797";
			case "Dragon":
				return "#6F35FC";
			case "Dark":
				return "#705746";
			case "Steel":
				return "#B7B7CE";
			case "Fairy":
				return "#D685AD";
			default: //normal type
				return "#A8A77A";
		}
	}

	componentDidMount() {
		this.readPokemonFromFile();
		this.retrievePkmnInfo("Bulbasaur");
		if (typeof(global.pkmn1) === 'undefined') {
			global.pkmn1 = this;
		} else {
			global.pkmn2 = this;
		}
		//this.getSavedPokemon();
	}

	//Retrieve the nature from the nature list
	retrieveNatureFromList(selectedNature) {
		this.setState({
			nature: selectedNature
		});
		this.updateTotalStats(this.statCalculator.getStatTotals(this.state.baseStats, this.state.evInfo, this.state.ivInfo, this.state.level, selectedNature));
	}

	//Retrieve the status from the status list
	retrieveStatusFromList(selectedStatus) {
		this.setState({
			status: selectedStatus
		});
	}

	//Callback function passed to Dropdown to retrieve pokemon selected from the list
	retrievePkmnFromList(selectedPkmn) {
		this.setState({
			curPkmn: selectedPkmn
		});
		this.retrievePkmnInfo(selectedPkmn);
	}

	//Called after retrievePkmnFromList is called to update pokemon stats
	retrievePkmnInfo(pkmn) {
		//Call the PokeAPI here to update pokemon info
		if (this.state.pokemonList[7]) {
					let pkmnID = (this.state.pokemonList[7].indexOf(pkmn) + 1);
			let url = "https://pokeapi.co/api/v2/pokemon/" + pkmnID;
			fetch(url)
			.then(response => response.json())
			.then(pokemonInfo => pokemonInfo = this.updatePkmnInfo(pokemonInfo));
		} else {
			let pkmnName = pkmn.toLowerCase();
			let url = "https://pokeapi.co/api/v2/pokemon/" + pkmnName;
			fetch(url)
			.then(response => response.json())
			.then(pokemonInfo => pokemonInfo = this.updatePkmnInfo(pokemonInfo));
		}
	}

	updateTotalStats(newTotalStats) {
		this.setState({
			totalStats: newTotalStats
		});

		this.props.getPkmnInfo(this.state);
	}

	updatePkmnInfo(pkmnInfo) {
		let stats = pkmnInfo.stats;
		let newBaseStats = {
			HP: stats[0].base_stat,
			Atk: stats[1].base_stat,
			SpAtk: stats[3].base_stat,
			Def: stats[2].base_stat,
			SpDef: stats[4].base_stat,
			Spd: stats[5].base_stat,
		}

		let newMoves = pkmnInfo.moves;
		let newImg = pkmnInfo.sprites.front_default;
		let newTypes = [];
		let genNumber = global.curGeneration;

        if (pkmnInfo.past_types.length === 1) {
            if (genNumber === 1) {
                for (let i = 0; i < pkmnInfo.past_types[0].types.length; i++) {
                    newTypes.push(pkmnInfo.past_types[0].types[i].type.name);
                }
            } else if (genNumber >= 2 && genNumber <= 5 && pkmnInfo.past_types[0].generation.name === "generation-v") {
                for (let i = 0; i < pkmnInfo.past_types[0].types.length; i++) {
                    newTypes.push(pkmnInfo.past_types[0].types[i].type.name)
                }
            } else {
                for (let i = 0; i < pkmnInfo.types.length; i++) {
                    newTypes.push(pkmnInfo.types[i].type.name);
                }
            }
        } else {
            for (let i = 0; i < pkmnInfo.types.length; i++) {
                newTypes.push(pkmnInfo.types[i].type.name);
            }
        }

		for (let i = 0; i < newTypes.length; i++) {
			newTypes[i] = newTypes[i].charAt(0).toUpperCase() + newTypes[i].slice(1)
		}

		this.setState({
			baseStats: newBaseStats,
			moves: newMoves,
			pkmnImg: newImg,
			types: newTypes
		});

		this.updateTotalStats(this.statCalculator.getStatTotals(newBaseStats, this.state.evInfo, this.state.ivInfo, this.state.level, this.state.nature));
	}

	//Updates the pokemons level, limit from 1-100
	updatePkmnLevel(event) {
		let nature = this.state.nature;
		let ivInfo = this.state.ivInfo;
		let baseStats = this.state.baseStats;
		let evInfo = this.state.evInfo;
		let tempLevel = parseInt(event.target.value);
		if (tempLevel >= 100) {
			tempLevel = 100;
		} else if (tempLevel <= 0) {
			tempLevel = 1;
		} else if (!tempLevel) {
			tempLevel = 1;
		}

		this.setState({
			level: tempLevel
		});

		this.updateTotalStats(this.statCalculator.getStatTotals(baseStats, evInfo, ivInfo, tempLevel, nature));
	}

	//Takes in event value as well as the stat it is to update PkmnEV value
	//Restricts EVs at 252 individually, with a minimum of 0. Then calls calculateStats
	updatePkmnEV(event, statType) {
		let level = this.state.level;
		let nature = this.state.nature;
		let ivInfo = this.state.ivInfo;
		let baseStats = this.state.baseStats;
		let tempEvInfo = this.state.evInfo;
		
		let newStat = parseInt(event.target.value);

		if (global.curGeneration === 2){
			if(newStat >= 65535) {
				newStat = 65535;
			} else if (newStat < 0) {
				newStat = 0;
			} else if (!newStat) {
				newStat = 0;
			}
		}else{
			if(newStat >= 252) {
				newStat = 252;
			} else if (newStat < 0) {
				newStat = 0;
			} else if (!newStat) {
				newStat = 0;
			}
		}

		if (global.curGeneration === 2) {
			if (statType === "HP") {
				tempEvInfo.HP = newStat;
			} else if (statType === "Atk") {
				tempEvInfo.Atk = newStat;
			} else if (statType === "SpAtk") {
				tempEvInfo.SpAtk = newStat;
				tempEvInfo.SpDef = newStat;
			} else if (statType === "Def") {
				tempEvInfo.Def = newStat;
			} else if (statType === "SpDef") {
				tempEvInfo.SpAtk = newStat;
				tempEvInfo.SpDef = newStat;
			} else if (statType === "Spd") {
				tempEvInfo.Spd = newStat;
			}
		} else {
			if (statType === "HP") {
				tempEvInfo.HP = newStat;
			} else if (statType === "Atk") {
				tempEvInfo.Atk = newStat;
			} else if (statType === "SpAtk") {
				tempEvInfo.SpAtk = newStat;
			} else if (statType === "Def") {
				tempEvInfo.Def = newStat;
			} else if (statType === "SpDef") {
				tempEvInfo.SpDef = newStat;
			} else if (statType === "Spd") {
				tempEvInfo.Spd = newStat;
			}
		}


		this.setState({
			evInfo: tempEvInfo
		});

		//Call function to update Total stats
		this.updateTotalStats(this.statCalculator.getStatTotals(baseStats, tempEvInfo, ivInfo, level, nature));
	}

	//Updates the Pokemon's IVs in state and calls calculateStats
	updatePkmnIV(event, statType) {
		let level = this.state.level;
		let nature = this.state.nature;
		let evInfo = this.state.evInfo;
		let baseStats = this.state.baseStats;
		let tempIvInfo = this.state.ivInfo;
		
		let newStat = parseInt(event.target.value);

		if (global.curGeneration === 2){
			if(newStat >= 15) {
				newStat = 15;
			} else if (newStat < 0) {
				newStat = 0;
			} else if (!newStat) {
				newStat = 0;
			}
		}else{
			if(newStat >= 31) {
				newStat = 31;
			} else if (newStat < 0) {
				newStat = 0;
			} else if (!newStat) {
				newStat = 0;
			}
		}

		if (global.curGeneration === 2) {
			if (statType === "Atk") {
				tempIvInfo.Atk = newStat;
			} else if (statType === "SpAtk") {
				tempIvInfo.SpAtk = newStat;
				tempIvInfo.SpDef = newStat;
			} else if (statType === "Def") {
				tempIvInfo.Def = newStat;
			} else if (statType === "SpDef") {
				tempIvInfo.SpAtk = newStat;
				tempIvInfo.SpDef = newStat;
			} else if (statType === "Spd") {
				tempIvInfo.Spd = newStat;
			}
		} else {
			if (statType === "HP") {
				tempIvInfo.HP = newStat;
			} else if (statType === "Atk") {
				tempIvInfo.Atk = newStat;
			} else if (statType === "SpAtk") {
				tempIvInfo.SpAtk = newStat;
			} else if (statType === "Def") {
				tempIvInfo.Def = newStat;
			} else if (statType === "SpDef") {
				tempIvInfo.SpDef = newStat;
			} else if (statType === "Spd") {
				tempIvInfo.Spd = newStat;
			}
		}

		if (statType === "HP") {
			tempIvInfo.HP = newStat;
		} else if (statType === "Atk") {
			tempIvInfo.Atk = newStat;
		} else if (statType === "SpAtk") {
			tempIvInfo.SpAtk = newStat;
		} else if (statType === "Def") {
			tempIvInfo.Def = newStat;
		} else if (statType === "SpDef") {
			tempIvInfo.SpDef = newStat;
		} else if (statType === "Spd") {
			tempIvInfo.Spd = newStat;
		}

		this.setState({
			ivInfo: tempIvInfo
		});

		//Call function to update Total stats
		this.updateTotalStats(this.statCalculator.getStatTotals(baseStats, evInfo, tempIvInfo, level, nature));
	}

		//May have to change to George's CSV file with all pokemon later
    readPokemonFromFile() {
        fetch(pokedexGen1).then(response => response.text()).then(text => this.getPokemonHelper(text, 1));
		fetch(pokedexGen2).then(response => response.text()).then(text => this.getPokemonHelper(text, 2));
		fetch(pokedexGen3).then(response => response.text()).then(text => this.getPokemonHelper(text, 3));
		fetch(pokedexGen4).then(response => response.text()).then(text => this.getPokemonHelper(text, 4));
		fetch(pokedexGen5).then(response => response.text()).then(text => this.getPokemonHelper(text, 5));
		fetch(pokedexGen6).then(response => response.text()).then(text => this.getPokemonHelper(text, 6));
		fetch(pokedexGen7).then(response => response.text()).then(text => this.getPokemonHelper(text, 7));
		fetch(pokedexGen8).then(response => response.text()).then(text => this.getPokemonHelper(text, 8));
    }

	//Build pokemonList to be displayed
	generatePkmnList() {
		let tempPkmnList = this.state.pokemonList[global.curGeneration - 1];
		let displayList = [];
		if (tempPkmnList && tempPkmnList[0] !== undefined) {
			tempPkmnList.forEach(element => {
				displayList.push(
					<option name={element} key={element}>{element}</option>
				);
			});
		}

		return <div className="pokemonList">
				<select value={this.state.curPkmn} onChange={(event) => {this.retrievePkmnFromList(event.target.value)}}>
					{displayList}
				</select>
			</div>;
	}

    getPokemonHelper(text, generation) {
        let pokemonNames = [];
        pokemonNames = text.split("\n"); 
		//Seems hacky, but made a fix here that takes out all but the first form of a pokemon
		//And uses index+1 in the array as id to send to PokeAPI
		let newPokemonList = [];
		let tempID = 0;
		for (let i = 1; i < pokemonNames.length - 1; i++) {
			let tempList = pokemonNames[i].split("\t");
			if (tempList[0] === tempID) {
				continue;
			} else {
				tempID = tempList[0];
				newPokemonList.push(tempList[1]);
			}
		}

		let tempPkmnList = [];
		tempPkmnList = this.state.pokemonList;
		tempPkmnList[generation - 1] = newPokemonList;
		this.setState({
			pokemonList: tempPkmnList
		});
        return newPokemonList;
    }

	genChangePokemonReset() {
		this.curGen = global.curGeneration;
		this.retrievePkmnFromList("Bulbasaur");
	}

	calcHPIV() {
		let healthIV = 0;
		if (this.state.ivInfo.Atk % 2 === 1) {
			healthIV += 8;
		}
		if (this.state.ivInfo.Def % 2 === 1) {
			healthIV += 4;
		}
		if (this.state.ivInfo.Spd % 2 === 1) {
			healthIV += 2;
		}
		if (this.state.ivInfo.SpAtk % 2 === 1) {
			healthIV += 1;
		}
		return healthIV;
    }

	render() {
		/*if (this.curGen > global.curGeneration) {
			this.genChangePokemonReset();
		}*/


		let IVEV = <div className="advancedStat">
							<b className="statText">IV</b>
							<b className="statText">EV</b>
						</div>;

		let gen = 3;
		if (global.curGeneration !== null && global.curGeneration > 0) {
			gen = global.curGeneration;
        }

		let pkmnImg = this.state.pkmnImg ? <img className="pkmnImg" style={{minHeight:"175px"}} src={this.state.pkmnImg} alt="pokemonImage"/> : null;
		let hpAdvanced = gen > 2 ? <div className="advancedStat">
			<input className="App-textBox" type="number" value={this.state.ivInfo.HP} onChange={(e) => this.updatePkmnIV(e, "HP")} onBlur={(e) => this.updatePkmnIV(e, "HP")} />
							<input className="App-textBox" type="number" value={this.state.evInfo.HP} onChange={(e) => this.updatePkmnEV(e, "HP")} onBlur={(e) => this.updatePkmnEV(e, "HP")} />
		</div> : <div className="advancedStat">
				<input disabled className="App-textBox" type="number" value={this.calcHPIV()} onBlur={(e) => this.updatePkmnIV(e, "HP")} />
				<input className="App-textBox" type="number" value={this.state.evInfo.HP} onChange={(e) => this.updatePkmnEV(e, "HP")} onBlur={(e) => this.updatePkmnEV(e, "HP")} />
			</div>;;

		let atkAdvanced = <div className="advancedStat">
							<input className="App-textBox" type="number" value={this.state.ivInfo.Atk} onChange={(e) => this.updatePkmnIV(e, "Atk")} onBlur={(e) => this.updatePkmnIV(e, "Atk")} />
							<input className="App-textBox" type="number" value={this.state.evInfo.Atk} onChange={(e) => this.updatePkmnEV(e, "Atk")} onBlur={(e) => this.updatePkmnEV(e, "Atk")} />
						</div>;

		let defAdvanced = <div className="advancedStat">
							<input className="App-textBox" type="number" value={this.state.ivInfo.Def} onChange={(e) => this.updatePkmnIV(e, "Def")} onBlur={(e) => this.updatePkmnIV(e, "Def")} />
							<input className="App-textBox" type="number" value={this.state.evInfo.Def} onChange={(e) => this.updatePkmnEV(e, "Def")} onBlur={(e) => this.updatePkmnEV(e, "Def")} />
						</div>;

		let SpAtkAdvanced = <div className="advancedStat">
							<input className="App-textBox" type="number" value={this.state.ivInfo.SpAtk} onChange={(e) => this.updatePkmnIV(e, "SpAtk")} onBlur={(e) => this.updatePkmnIV(e, "SpAtk")} />
							<input className="App-textBox" type="number" value={this.state.evInfo.SpAtk} onChange={(e) => this.updatePkmnEV(e, "SpAtk")} onBlur={(e) => this.updatePkmnEV(e, "SpAtk")} />
						</div>;

		let SpDefAdvanced = <div className="advancedStat">
							<input className="App-textBox" type="number" value={this.state.ivInfo.SpDef} onChange={(e) => this.updatePkmnIV(e, "SpDef")} onBlur={(e) => this.updatePkmnIV(e, "SpDef")} />
							<input className="App-textBox" type="number" value={this.state.evInfo.SpDef} onChange={(e) => this.updatePkmnEV(e, "SpDef")} onBlur={(e) => this.updatePkmnEV(e, "SpDef")} />
						</div>;

		let SpdAdvanced = <div className="advancedStat">
							<input className="App-textBox" type="number" value={this.state.ivInfo.Spd} onChange={(e) => this.updatePkmnIV(e, "Spd")} onBlur={(e) => this.updatePkmnIV(e, "Spd")} />
							<input className="App-textBox" type="number" value={this.state.evInfo.Spd} onChange={(e) => this.updatePkmnEV(e, "Spd")} onBlur={(e) => this.updatePkmnEV(e, "Spd")} />
						</div>;

		let status = global.advancedToggle ? <div className="status">
		<b>Status: </b><Dropdown initial={this.state.status} names={this.statusList} getOption={this.retrieveStatusFromList}/> </div>: null;
		
		let pkmnDropDown = this.generatePkmnList();

		let advancedStats = global.advancedToggle ? <div className="statCol">
								{IVEV}
								{hpAdvanced}
								{atkAdvanced}
								{defAdvanced}
								{SpAtkAdvanced}
								{SpDefAdvanced}
								{SpdAdvanced}
							</div> : null;
							
		var styleWidth = global.advancedToggle ? "repeat(2, 1fr)" : "repeat(1, 1fr)";

		var styleTypeWidth = "repeat(" + this.state.types.length + ", 1fr)";
		
		var capFirst = this.state.types.length > 0 ? this.state.types[0].charAt(0).toUpperCase() + this.state.types[0].slice(1) : null;
		var capSecond = this.state.types.length > 1 ? this.state.types[1].charAt(0).toUpperCase() + this.state.types[1].slice(1) : null;

		let type2 = this.state.types.length > 1 ? <b className="type" style={{backgroundColor: this.getTypeColor(this.state.types[1])}}>{capSecond}</b> : null;

		let typeDisplay = this.state.types.length > 0 ? <div className="typeRow" style={{gridTemplateColumns: styleTypeWidth}}>
								<b className="type" style={{backgroundColor: this.getTypeColor(this.state.types[0])}}>{capFirst}</b>
								{type2}
							</div> : null;
		
		
		let errorMessage = this.state.error;
        const saveError = errorMessage !== "" ? <p>{errorMessage}</p> : null;

		let loadmessage = (this.props.loc === 0) ? "Load Global Data": "Load Saved Pokemon";
		let deleteButton = (this.props.loc === 1) ? <button onClick={this.deleteAll}>delete all</button>: null;

		/*
		let serverPokemon = typeof (this.state.uid) !== 'undefined' && this.state.uid.length > 0 ? 
		<div className="App-login">
			<b>Saved Pokemon </b>
			<div classname="App-hcontainer" style={{fontSize: 15}}>
				<button onClick={this.loadPokemon}>{loadmessage}</button>
				{deleteButton}
			</div>
			<div classname="App-hcontainer" style={{fontSize: 15}}>
				{disCont}
			</div>
			<div classname="App-hcontainer">
				<input className="App-textBox" type="text" value={this.state.savedName} onChange={this.saveName} onBlur={this.saveName} style={{width: "50%", height: "80%"}}/>
				<button onClick={this.savePokemon}>Save</button>
			</div>
			<div classname="App-hcontainer" style={{fontSize: 15}}>
				{saveError}
			</div>
		</div> : null;
		*/

        return (
            <div className = "pokemon">
				{pkmnDropDown}
				<br/>
				{pkmnImg}
				<br/>
				{typeDisplay}
				<div className="pkmnLevel">
					<b>Level:</b>
					<input type="number" value={this.state.level} onChange={this.updatePkmnLevel} onBlur={this.updatePkmnLevel}/>
				</div>
				<div className="nature">
					<b>Nature: </b>
					<Dropdown names={this.natureList} initial={this.state.nature} getOption={this.retrieveNatureFromList}/>
				</div>
				{status}
				<div className="statRow" style={{gridTemplateColumns: styleWidth}}>
					<div className="statCol">
						<b className="statText">Stats</b>
						<br/>
						<b className="statText">HP: {this.state.totalStats.HP}</b>
						<br/>
						<b className="statText">ATK: {this.state.totalStats.Atk}</b>
						<br/>
						<b className="statText">DEF: {this.state.totalStats.Def}</b>
						<br/>
						<b className="statText">SP ATK: {this.state.totalStats.SpAtk}</b>
						<br/>
						<b className="statText">SP DEF: {this.state.totalStats.SpDef}</b>
						<br/>
						<b className="statText">SPD: {this.state.totalStats.Spd}</b>
					</div>
					{advancedStats}
				</div>
				{/*serverPokemon*/}
            </div>
        );
    }
}

export default Pokemon;