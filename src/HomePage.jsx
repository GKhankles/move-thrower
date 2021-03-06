import React from 'react';
import './App.css';
import SignIn from './SignIn.jsx';
import Pokemon from './Pokemon.jsx';
import moveCalculator from './moveCalculator.js';
import './global.js';
import Dropdown from './Dropdown';
import mainLogo from './Title.png';
import firebase from 'firebase';
//import createFirebase from './firebase.js';

export class HomePage extends React.Component {
    constructor (props) {
        super(props);
		this.retrieveAtkPokemonInfo = this.retrieveAtkPokemonInfo.bind(this);
		this.retrieveDefPokemonInfo = this.retrieveDefPokemonInfo.bind(this);
		this.calculateMoves = this.calculateMoves.bind(this);
		this.switchPokemon = this.switchPokemon.bind(this);
		this.advancedOptions = this.advancedOptions.bind(this);
		this.changeGeneration = this.changeGeneration.bind(this);
		this.getAtkPokemon = this.getAtkPokemon.bind(this);
		this.retrieveWeatherFromList = this.retrieveWeatherFromList.bind(this);
		this.retrieveTerrainFromList = this.retrieveTerrainFromList.bind(this);
		this.retrieveNumberFromList = this.retrieveNumberFromList.bind(this);
		this.resetSettings = this.resetSettings.bind(this);
		this.createMoveList = this.createMoveList.bind(this);
		this.setMoveFilter = this.setMoveFilter.bind(this);
		this.saveLeftPokemon = this.saveLeftPokemon.bind(this);
		this.saveRightPokemon = this.saveRightPokemon.bind(this);
		this.loadLeftPokemon = this.loadLeftPokemon.bind(this);
		this.loadRightPokemon = this.loadRightPokemon.bind(this);
		this.setLeftSavedPokemon = this.setLeftSavedPokemon.bind(this);
		this.setRightSavedPokemon = this.setRightSavedPokemon.bind(this);
		this.getSavedPokemon = this.getSavedPokemon.bind(this);
		this.deleteAll = this.deleteAll.bind(this);
		this.saveName = this.saveName.bind(this);
		this.setUid = this.setUid.bind(this);
		this.setNameList = this.setNameList.bind(this);
		this.setPkmnList = this.setPkmnList.bind(this);
		this.loadPokemon = this.loadPokemon.bind(this);

		this.moveCalculator = new moveCalculator();

		this.bulbasaurMoves = [
			{	
				"move": {
					"name": "sludge"
				}
			},
			{	
				"move": {
					"name": "strength"
				}
			},
			{	
				"move": {
					"name": "cut"
				}
			},
			{	
				"move": {
					"name": "headbutt"
				}
			},
			{	
				"move": {
					"name": "facade"
				}
			},
			{	
				"move": {
					"name": "tackle"
				}
			},
			{	
				"move": {
					"name": "snore"
				}
			},
			{	
				"move": {
					"name": "bind"
				}
			},
			{	
				"move": {
					"name": "rage"
				}
			},
			{	
				"move": {
					"name": "bide"
				}
			}
		];

		this.bulbasaurInfo = {
			curPkmn: "Bulbasaur",
			baseStats: {			
				HP: 45,
				Atk: 49,
				SpAtk: 65,
				Def: 49,
				SpDef: 65,
				Spd: 45
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
				HP: 11,
				Atk: 5,
				SpAtk: 6,
				Def: 5,
				SpDef: 6,
				Spd: 5
			},
			level: 1,
			nature: "Hardy",
			status: "Healthy",
			moves: this.bulbasaurMoves,
			types: ["Grass", "Poison"],
			pkmnImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        };
		
		this.weather_types = {
			"Clear": 1,
            "Harsh Sunlight": 2,
            "Rain": 3,
            "Sandstorm": 4,
            "Hail": 5,
            "Shadowy Aura": 6,
            "Fog": 7,
            "Strong Winds": 8,
			"Extremely Harsh Sunlight": 9,
			"Heavy Rain": 10
		};

		this.terrain_types = {
            "Normal" : 1,
            "Electric" : 2,
            "Grassy" : 3,
            "Misty" : 4,
            "Psychic" : 5
        };

		this.moveFilterList = [
			"None",
			"Normal",
            "Fire",
            "Water",
            "Electric",
            "Grass",
            "Ice",
            "Fighting",
            "Poison",
            "Ground",
            "Flying",
            "Psychic",
            "Bug",
            "Rock",
            "Ghost",
            "Dragon",
            "Dark",
            "Steel",
            "Fairy"
		];

		this.weatherList1 = ["Clear"];
		this.weatherList2 = ["Clear", "Harsh Sunlight", "Rain", "Sandstorm"];
		this.weatherList3 = ["Clear", "Harsh Sunlight", "Rain", "Sandstorm", "Hail", "Shadowy Aura"];
		this.weatherList45 = ["Clear", "Harsh Sunlight", "Rain", "Sandstorm", "Hail", "Fog"];
		this.weatherList678 = ["Clear", "Harsh Sunlight", "Rain", "Sandstorm", "Hail", "Fog", "Heavy Rain", "Extremely Harsh Sunlight", "Strong Winds"];

		this.weatherList = null;

		this.terrainList = ["Normal","Electric","Grassy","Misty","Psychic"]

		this.state = {
			uid:"",
			atkPkmnInfo: {},
			defPkmnInfo: {},
			isAdvanced: false,
			calculatedMoves: null,
			calculating: false,
			weather: "Clear",
			weatherList: null,
			switched: false,
			numberMoves: 4,
			moveFilter: "None",
			savedName: "",
			displayLeft : false,
			displayRight : false,
			nameList: [],
			pkmnList: [],
			error: ""
		};
		global.advancedToggle = false;
		global.curGeneration = 3;
	}

	setUid(setUid){
		this.setState({
			uid: setUid
		});
	}

	setNameList(newList){
		this.setState({
			nameList:newList
		})
	}

	setPkmnList(newList){
		this.setState({
			pkmnList:newList
		});
		let pkmnKeys = Object.keys(this.state.pkmnList);
		pkmnKeys.map((key) => {
			this.state.nameList.push( this.state.pkmnList[key].curPkmn)
		});
	}

	resetSettings() {
		if (typeof (global.pkmn1) === 'undefined' || typeof (global.pkmn2) === 'undefined') {
			return;
		}
		var base1 = global.pkmn1.state.baseStats;
		var nature1 = global.pkmn1.state.nature;
		var base2 = global.pkmn2.state.baseStats;
		var nature2 = global.pkmn2.state.nature;
		var clr1 = {
			HP: 0,
			Atk: 0,
			SpAtk: 0,
			Def: 0,
			SpDef: 0,
			Spd: 0
		};
		var clr2 = {
			HP: 0,
			Atk: 0,
			SpAtk: 0,
			Def: 0,
			SpDef: 0,
			Spd: 0
		};
		var clr3 = {
			HP: 0,
			Atk: 0,
			SpAtk: 0,
			Def: 0,
			SpDef: 0,
			Spd: 0
		};
		var clr4 = {
			HP: 0,
			Atk: 0,
			SpAtk: 0,
			Def: 0,
			SpDef: 0,
			Spd: 0
		};
		global.pkmn1.setState({
			ivInfo: clr1,
			evInfo: clr2,
			level: 1
		});
		global.pkmn2.setState({
			ivInfo: clr3,
			evInfo: clr4,
			level: 1
		});
		global.pkmn1.updateTotalStats(global.pkmn1.statCalculator.getStatTotals(base1, clr1, clr2, 1, nature1));
		global.pkmn2.updateTotalStats(global.pkmn2.statCalculator.getStatTotals(base2, clr3, clr4, 1, nature2));
    }

	//Sets the moveFilter in state to the specified type. Can only do one type at a time
	setMoveFilter(filterType) {
		this.setState({
			moveFilter: filterType
		});
	}
    
	
    /*The Idea here is that since our website is technically only one page, there is nearly 
	* no way that we can encounter the error that we were getting with Badger-Bytes. I think
	* the only situation that could cause us to call more than once would be when the user needs
	* to reset their password.
	*/
    componentDidMount() {
        /*let fbMenu = [];
        //call firebase here for menu info
        firebase.database().ref('Menu/').once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                let menuItem = {
                    iid: childKey,
                    name: childData.name,
                    picture: childData.picture,
                    price: childData.price,
                    availability: childData.availability
                };
                fbMenu.push(menuItem);
                 // ...
            });
			this.setState({
				hasData: true,
				menu: fbMenu,
				hasUpdated: true
			});
        });*/
		global.curGeneration = 3;
    }

	//Callback function sent to the Attacking Pokemon component to retrieve pokemon info
	retrieveAtkPokemonInfo(pkmnInfo) {
		this.setState({
			atkPkmnInfo: {...pkmnInfo}
		});
	}

	//Callback function sent to Defending Pokemon component to retrieve pokemon info
	retrieveDefPokemonInfo(pkmnInfo) {
		this.setState({
			defPkmnInfo: {...pkmnInfo}
		});
	}

	retrieveWeatherFromList(selectedWeather){
		this.setState({
			weather: selectedWeather
		});
	}
	
	retrieveTerrainFromList(selectedTerrain){
		this.setState({
			terrain: selectedTerrain
		});
	}

	retrieveNumberFromList(selectedNumber){
		this.setState({
			numberMoves: selectedNumber
		});
	}

	switchPokemon() {
		if (typeof (global.pkmn1) === 'undefined' || typeof (global.pkmn2) === 'undefined') {
			return;
		}
		this.setState(prevState => ({
			switched: !prevState.switched
		}));
		var tempState = global.pkmn1.state;
		global.pkmn1.setState({
		    uid: global.pkmn2.state.uid,
			curPkmn: global.pkmn2.state.curPkmn,
			baseStats: global.pkmn2.state.baseStats,
			ivInfo: global.pkmn2.state.ivInfo,
			evInfo: global.pkmn2.state.evInfo,
			totalStats: global.pkmn2.state.totalStats,
			level: global.pkmn2.state.level,
			nature: global.pkmn2.state.nature,
			status: global.pkmn2.state.status,
			moves: global.pkmn2.state.moves,
			types: global.pkmn2.state.types,
			pkmnImg: global.pkmn2.state.pkmnImg,
			isAdvanced: global.pkmn2.state.isAdvanced,
			readySwap: global.pkmn2.state.readySwap
		});
		global.pkmn2.setState({
			uid: tempState.uid,
			curPkmn: tempState.curPkmn,
			baseStats: tempState.baseStats,
			ivInfo: tempState.ivInfo,
			evInfo: tempState.evInfo,
			totalStats: tempState.totalStats,
			level: tempState.level,
			nature: tempState.nature,
			status: tempState.status,
			moves: tempState.moves,
			types: tempState.types,
			pkmnImg: tempState.pkmnImg,
			isAdvanced: tempState.isAdvanced,
			readySwap: tempState.readySwap
		});
	}
	
	getAtkPokemon(){
		return this.state.atkPkmnInfo;
	}



	//Returns a list of the best possible moves that can be used
	async calculateMoves(event) {
		this.setState({
			calculating: true
		});
		let calcMoves;
		
		if(this.state.switched) {
			calcMoves = await this.moveCalculator.moveCalculator(this.state.defPkmnInfo, this.state.atkPkmnInfo, global.curGeneration, 
				{weather: this.weather_types[this.state.weather], terrain: this.terrain_types[this.state.terrain]}, this.state.moveFilter);
		} else {
			calcMoves = await this.moveCalculator.moveCalculator(this.state.atkPkmnInfo, this.state.defPkmnInfo, global.curGeneration, 
				{weather: this.weather_types[this.state.weather], terrain: this.terrain_types[this.state.terrain]}, this.state.moveFilter);
		}
		calcMoves = calcMoves.slice(0, this.state.numberMoves);

		this.setState({
			calculatedMoves: calcMoves,
			calculating: false
		});
	}

	advancedOptions() {
		global.advancedToggle = !global.advancedToggle;
		this.forceUpdate();
	}

	changeGeneration(event) {
		global.curGeneration = parseInt(event.target.value);
		this.setState({
			weather: "Clear",
			atkPkmnInfo: {
			curPkmn: "Bulbasaur",
			baseStats: {			
				HP: 45,
				Atk: 49,
				SpAtk: 65,
				Def: 49,
				SpDef: 65,
				Spd: 45
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
				HP: 11,
				Atk: 5,
				SpAtk: 6,
				Def: 5,
				SpDef: 6,
				Spd: 5
			},
			level: 1,
			nature: "Hardy",
			status: "Healthy",
			moves: this.bulbasaurMoves,
			types: ["Grass", "Poison"],
			pkmnImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
			defPkmnInfo: {
			curPkmn: "Bulbasaur",
			baseStats: {			
				HP: 45,
				Atk: 49,
				SpAtk: 65,
				Def: 49,
				SpDef: 65,
				Spd: 45
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
				HP: 11,
				Atk: 5,
				SpAtk: 6,
				Def: 5,
				SpDef: 6,
				Spd: 5
			},
			level: 1,
			nature: "Hardy",
			status: "Healthy",
			moves: this.bulbasaurMoves,
			types: ["Grass", "Poison"],
			pkmnImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        }
		});
		this.forceUpdate();
		global.pkmn1.setState({
			curPkmn: "Bulbasaur",
			baseStats: {			
				HP: 45,
				Atk: 49,
				SpAtk: 65,
				Def: 49,
				SpDef: 65,
				Spd: 45
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
				HP: 11,
				Atk: 5,
				SpAtk: 6,
				Def: 5,
				SpDef: 6,
				Spd: 5
			},
			level: 1,
			nature: "Hardy",
			status: "Healthy",
			moves: this.bulbasaurMoves,
			types: ["Grass", "Poison"],
			pkmnImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        });
		global.pkmn2.setState({
			curPkmn: "Bulbasaur",
			baseStats: {			
				HP: 45,
				Atk: 49,
				SpAtk: 65,
				Def: 49,
				SpDef: 65,
				Spd: 45
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
				HP: 11,
				Atk: 5,
				SpAtk: 6,
				Def: 5,
				SpDef: 6,
				Spd: 5
			},
			level: 1,
			nature: "Hardy",
			status: "Healthy",
			moves: this.bulbasaurMoves,
			types: ["Grass", "Poison"],
			pkmnImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        });

		console.log("Bulbasaur moves", global.bulbasaurMoves);
		global.pkmn1.forceUpdate();
		global.pkmn2.forceUpdate();
	}

	getTypeColor(type) {
		switch (type) {
			case "Fire":
				return "rgba(238,129,48,1)";
			case "Water":
				return "rgba(99,144,240,1)";
			case "Electric":
				return "rgba(247,208,44,1)";
			case "Grass":
				return "rgba(122,199,76,1)";
			case "Ice":
				return "rgba(150,217,214,1)";
			case "Fighting":
				return "rgba(194,46,40,1)";
			case "Poison":
				return "rgba(163,62,161,1)";
			case "Ground":
				return "rgba(226,191,101,1)";
			case "Flying":
				return "rgba(169,143,243,1)";
			case "Psychic":
				return "rgba(249,85,135,1)";
			case "Bug":
				return "rgba(166,185,26,1)";
			case "Rock":
				return "rgba(182,161,54,1)";
			case "Ghost":
				return "rgba(115,87,151,1)";
			case "Dragon":
				return "rgba(111,53,252,1)";
			case "Dark":
				return "rgba(112,87,70,1)";
			case "Steel":
				return "rgba(183,183,206,1)";
			case "Fairy":
				return "rgba(214,133,173,1)";
			default: //normal type
				return "rgba(168,167,122,1)";
		}
	}

	createMoveList() {
		let calcMoveList = this.state.calculatedMoves;
		let displayList = [];
		calcMoveList.forEach(element => {
			let color = this.getTypeColor(element.move_type);
			let randomPlace = 1;//Math.floor(Math.random() * 3);// make this * 3
			let finalColor = "linear-gradient(to right, " + color;
			for (var i = 0; i < 3; i++) {
				if (i === randomPlace) {
					finalColor += ", white";
				} else {
					finalColor += ", " + color;
                }
			}
			finalColor += ", " + color + ")";
			displayList.push(
				<div key={element.move} className="moveItem" style={{ backgroundImage: finalColor }}>
					<b>{element.move}</b>
					<b>{element.min_dmg + "-" + element.max_dmg}</b>
					<b>{element.move_type}</b>
				</div>
			);
		});
		return displayList;
	}

	saveLeftPokemon() {
		let nmList = [];
		let prefList = {};
		if (this.state.uid !== "") {
			firebase.database().ref('users/' + this.state.uid + '/preference').on("value", snapshot => {
				prefList = {};
				console.log(snapshot.val())
				let data = snapshot.val() ? snapshot.val() : {};
				prefList = { ...data }
				let pkmnKeys = Object.keys(prefList);
				pkmnKeys.map((key) => {
					nmList.push( prefList[key].curPkmn)
				});
				console.log(nmList)
			});
			console.log(this.state.atkPkmnInfo.state);
			if(!this.state.switched){
				if(this.state.atkPkmnInfo){
					if(nmList.indexOf(this.state.atkPkmnInfo.curPkmn) <= -1){
						firebase.database().ref('users/' + this.state.uid + '/preference').push(this.state.atkPkmnInfo);
						this.setState({
							error: "Save successfully completed!"
						});
						return true;
					}else{
						this.setState({
							error: "Cannot save pokemon with existing name."
						});
						return false;
					}
				}
			}else{
				if(this.state.defPkmnInfo){
					if(nmList.indexOf(this.state.defPkmnInfo.curPkmn) <= -1){
						firebase.database().ref('users/' + this.state.uid + '/preference').push(this.state.defPkmnInfo);
						this.setState({
							error: "Save successfully completed!"
						});
						return true;
					}else{
						this.setState({
							error: "Cannot save pokemon with existing name."
						});
						return false;
					}
				}
			}
			
		} else {
			return false;
		}
	}

	saveRightPokemon() {
		let nmList = [];
		let prefList = {};
		if (this.state.uid !== "") {
			firebase.database().ref('users/' + this.state.uid + '/preference').on("value", snapshot => {
				prefList = {};
				console.log(snapshot.val())
				let data = snapshot.val() ? snapshot.val() : {};
				prefList = { ...data }
				let pkmnKeys = Object.keys(prefList);
				pkmnKeys.map((key) => {
					nmList.push( prefList[key].curPkmn)
				});
				console.log(nmList)
			});
			console.log(this.state.atkPkmnInfo.state);
			if(!this.state.switched){
				if(this.state.defPkmnInfo){
					if(nmList.indexOf(this.state.defPkmnInfo.curPkmn) <= -1){
						firebase.database().ref('users/' + this.state.uid + '/preference').push(this.state.defPkmnInfo);
						this.setState({
							error: "Save successfully completed!"
						});
						return true;
					}else{
						this.setState({
							error: "Cannot save pokemon with existing name."
						});
						return false;
					}
				}
			}else{
				if(this.state.atkPkmnInfo){
					if(nmList.indexOf(this.state.atkPkmnInfo.curPkmn) <= -1){
						firebase.database().ref('users/' + this.state.uid + '/preference').push(this.state.atkPkmnInfo);
						this.setState({
							error: "Save successfully completed!"
						});
						return true;
					}else{
						this.setState({
							error: "Cannot save pokemon with existing name."
						});
						return false;
					}
				}
			}
			
		} else {
			return false;
		}
	}

	deleteAll(){
		if (typeof this.state.uid != undefined && this.state.uid !== "") {
			firebase.database().ref('users/' + this.state.uid).update({"preference": ""});
			return true;
		}else{
			return false;
		}
	}

	getSavedPokemon() {
		let nmList = [];
		let prefList = {};
		if (this.state.uid !== "") {
			firebase.database().ref('users/' + this.state.uid + '/preference').on("value", snapshot => {
				prefList = {};
				console.log(snapshot.val())
				let data = snapshot.val() ? snapshot.val() : {};
				prefList = { ...data }
				let pkmnKeys = Object.keys(prefList);
				pkmnKeys.map((key) => {
					nmList.push( prefList[key].curPkmn)
				});
				console.log(nmList)
			});
			this.setState({
				nameList: nmList,
				pkmnList: prefList
			});
			console.log("pkm")
			console.log(this.state.nameList)
			console.log(this.state.pkmnList)
			return nmList;
		};
		return ["Abra"];
	}

	loadPokemon(){
		this.getSavedPokemon()
		this.setState({
			nameList: this.getSavedPokemon()
		})
	}

	//need to style.
	loadLeftPokemon() {
		this.getSavedPokemon()
		this.setState({
			displayLeft: true,
			nameList: this.getSavedPokemon()
		})
	}
	loadRightPokemon() {
		this.getSavedPokemon()
		this.setState({
			displayRight: true,
			nameList: this.getSavedPokemon()
		})
	}

	setLeftSavedPokemon(selectedPokemon) {
		let pkm = null;
		let pkmnKeys = Object.keys(this.state.pkmnList);
		pkmnKeys.map((key) => 
		{
			if(this.state.pkmnList[key].curPkmn === selectedPokemon){
				pkm = this.state.pkmnList[key];
			}
		}
		)
			global.pkmn1.setState({
				uid: pkm.uid,
				curPkmn: pkm.curPkmn,
				baseStats: pkm.baseStats,
				ivInfo: pkm.ivInfo,
				evInfo: pkm.evInfo,
				totalStats: pkm.totalStats,
				level: pkm.level,
				nature: pkm.nature,
				status: pkm.status,
				moves: pkm.moves,
				types: pkm.types,
				pkmnImg: pkm.pkmnImg
			});
			if(!this.state.switched){
				this.setState({
					atkPkmnInfo: {
						uid: pkm.uid,
						curPkmn: pkm.curPkmn,
						baseStats: pkm.baseStats,
						ivInfo: pkm.ivInfo,
						evInfo: pkm.evInfo,
						totalStats: pkm.totalStats,
						level: pkm.level,
						nature: pkm.nature,
						status: pkm.status,
						moves: pkm.moves,
						types: pkm.types,
						pkmnImg: pkm.pkmnImg
					}
				});
			}else{
				this.setState({
					defPkmnInfo: {
						uid: pkm.uid,
						curPkmn: pkm.curPkmn,
						baseStats: pkm.baseStats,
						ivInfo: pkm.ivInfo,
						evInfo: pkm.evInfo,
						totalStats: pkm.totalStats,
						level: pkm.level,
						nature: pkm.nature,
						status: pkm.status,
						moves: pkm.moves,
						types: pkm.types,
						pkmnImg: pkm.pkmnImg
					}
				});
			}
		}

		setRightSavedPokemon(selectedPokemon) {
			let pkm = null;
			let pkmnKeys = Object.keys(this.state.pkmnList);
			pkmnKeys.map((key) => 
			{
				if(this.state.pkmnList[key].curPkmn === selectedPokemon){
					pkm = this.state.pkmnList[key];
				}
			}
			)
				global.pkmn2.setState({
					uid: pkm.uid,
					curPkmn: pkm.curPkmn,
					baseStats: pkm.baseStats,
					ivInfo: pkm.ivInfo,
					evInfo: pkm.evInfo,
					totalStats: pkm.totalStats,
					level: pkm.level,
					nature: pkm.nature,
					status: pkm.status,
					moves: pkm.moves,
					types: pkm.types,
					pkmnImg: pkm.pkmnImg
				});
				if(!this.state.switched){
					this.setState({
						defPkmnInfo: {
							uid: pkm.uid,
							curPkmn: pkm.curPkmn,
							baseStats: pkm.baseStats,
							ivInfo: pkm.ivInfo,
							evInfo: pkm.evInfo,
							totalStats: pkm.totalStats,
							level: pkm.level,
							nature: pkm.nature,
							status: pkm.status,
							moves: pkm.moves,
							types: pkm.types,
							pkmnImg: pkm.pkmnImg
						}
					});
				}else{
					this.setState({
						atkPkmnInfo: {
							uid: pkm.uid,
							curPkmn: pkm.curPkmn,
							baseStats: pkm.baseStats,
							ivInfo: pkm.ivInfo,
							evInfo: pkm.evInfo,
							totalStats: pkm.totalStats,
							level: pkm.level,
							nature: pkm.nature,
							status: pkm.status,
							moves: pkm.moves,
							types: pkm.types,
							pkmnImg: pkm.pkmnImg
						}
					});
				}
			}


	saveName(event){
		this.setState({
			savedName: event.target.value,
		});
	}


    render () {
		let moveList = this.state.calculatedMoves ? this.createMoveList() : null;
		let calculateButton = !this.state.calculating ? <button className="button" onClick={this.calculateMoves} >CALCULATE</button> : <button className="button" disabled={true}>Calculating...</button>;
		let generationSelection = global.advancedToggle ? <div>
						<div className="generationRadio" onChange={this.changeGeneration} value={global.curGeneration}>
							<h4>Current Generation {global.curGeneration}</h4>
							<div>
								<input type="radio" value={2} name="generation"/> 2
								<input defaultChecked type="radio" value={3} name="generation" /> 3
								<input type="radio" value={4} name="generation" /> 4
							</div>
							<div>
								<input type="radio" value={5} name="generation"/> 5
								<input type="radio" value={6} name="generation" /> 6
								<input type="radio" value={7} name="generation" /> 7
							</div>
						</div>
					</div> : null;

		

		let numberMovesSelection = global.advancedToggle? 
		<div>
			<div className="numberMovesSelector" onChange={this.changeNumber}>
				<h4>Number of Moves</h4>
				<div>
					<Dropdown initial={4} names={[1,2,3,4,5,6,7,8,9,10]} getOption = {this.retrieveNumberFromList}/>
				</div>
			</div>
		</div>: null;

		let moveFilterSelection = global.advancedToggle ?
			<div>
				<h4>Filter by Type</h4>
				<div>
					<Dropdown initial={"None"} names={this.moveFilterList} getOption={this.setMoveFilter}/>
				</div>
			</div> : null;

		let weatherSelection1 = global.advancedToggle && global.curGeneration === 1? 
					<div>
						<div className="weatherDropDown" onChange={this.changeWeather}>
							<h4>Weather</h4>
							<Dropdown initial={this.state.weather} names={this.weatherList1} getOption={this.retrieveWeatherFromList}/>
						</div>
					</div>: null;

		let weatherSelection2 = global.advancedToggle && global.curGeneration === 2? 
					<div>
						<div className="weatherDropDown" onChange={this.changeWeather}>
							<h4>Weather</h4>
							<Dropdown initial={this.state.weather} names={this.weatherList2} getOption={this.retrieveWeatherFromList}/>
						</div>
					</div>: null;

		let weatherSelection3 = global.advancedToggle && global.curGeneration === 3? 
					<div>
						<div className="weatherDropDown" onChange={this.changeWeather}>
							<h4>Weather</h4>
							<Dropdown initial={this.state.weather} names={this.weatherList3} getOption={this.retrieveWeatherFromList}/>
						</div>
					</div>: null;

		let weatherSelection45 = global.advancedToggle && (global.curGeneration === 4 || global.curGeneration === 5)? 
					<div>
						<div className="weatherDropDown" onChange={this.changeWeather}>
							<h4>Weather</h4>
							<Dropdown initial={this.state.weather} names={this.weatherList45} getOption={this.retrieveWeatherFromList}/>
						</div>
					</div>: null;

		let weatherSelection678 = global.advancedToggle && (global.curGeneration === 6 || global.curGeneration === 7 || global.curGeneration === 8)? 
					<div>
						<div className="weatherDropDown" onChange={this.changeWeather}>
							<h4>Weather</h4>
							<Dropdown initial={this.state.weather} names={this.weatherList678} getOption={this.retrieveWeatherFromList}/>
						</div>
					</div>: null;
		
		let terrainSelection = global.advancedToggle && (global.curGeneration === 7 || global.curGeneration === 8)? 
		<div className="App-body">
			<div className="terrainDropDown" onChange={this.changeTerrain}>
				<h4>Terrain</h4>
				<Dropdown initial={this.state.terrain} names={this.terrainList} getOption={this.retrieveTerrainFromList}/>
			</div>
			</div> : null;

		let wholeList = this.state.calculatedMoves && this.state.calculatedMoves.length > 0 ?
			<div style={{padding:20}}>
				<b style={{ textDecoration: "underline" }}>Recommended Moves</b>
				<div className="moveList">
					{moveList}
				</div> 
			</div> : null;

		
		let disContLeft = this.state.displayLeft && this.state.nameList ? <Dropdown names = {this.state.nameList} getOption = {this.setLeftSavedPokemon}>Left Pokemon</Dropdown>: null;
		let disContRight = this.state.displayRight && this.state.nameList ? <Dropdown names = {this.state.nameList} getOption = {this.setRightSavedPokemon}>Right Pokemon</Dropdown>: null;
		let errorMessage = this.state.error;
		const saveError = errorMessage !== "" ? <p>{errorMessage}</p> : null;

		let saveLoad = (this.state.uid && this.state.uid.length > 0) ?
			<div className="App-login" style={{ minWidth: "100%", paddingLeft: "49%", paddingRight: "49%"}}>
			<b>Saved Pokemon </b>
			<div classname="App-hcontainer" style={{fontSize: 15}}>
				<b>You need to click this before loading: </b>
				<button onClick={this.loadPokemon}>Load Global Pokemon</button>
			</div>
			<div classname="App-hcontainer" style={{fontSize: 15}}>
				<button onClick={this.loadLeftPokemon}>Load Left pokemon</button>
			</div>
			<div classname="App-hcontainer" style={{fontSize: 15}}>
				{disContLeft}
			</div>
			<div classname="App-hcontainer" style={{fontSize: 15}}>
				<button onClick={this.loadRightPokemon}>Load Right pokemon</button>
			</div>
			<div classname="App-hcontainer" style={{fontSize: 15}}>
				{disContRight}
			</div>
			<div classname="App-hcontainer" style={{fontSize: 15}}>
				<button onClick={this.deleteAll}>Delete All Saved Pkmn</button>
			</div>
				<div classname="App-hcontainer" style={{display: "flex", flexDirection: "row"}}>
					<button onClick={this.saveLeftPokemon} style={{ fontSize: 10 }}>Save Left Pokemon</button>
					<input className="App-textBox" type="text" value={this.state.savedName} onChange={this.saveName} onBlur={this.saveName} style={{width: "50%", height: "80%"}}/>
					<button onClick={this.saveRightPokemon} style={{ fontSize: 10 }}>Save Right Pokemon</button>
			</div>
			<div classname="App-hcontainer" style={{fontSize: 15}}>
				{saveError}
			</div>
		</div> : null;

		if (this.state.weather === "Clear") {
			document.body.style.backgroundColor = "#aaf0d1";
		} else if (this.state.weather === "Harsh Sunlight") {
			document.body.style.backgroundColor = "#ffdd42";
		} else if (this.state.weather === "Rain") {
			document.body.style.backgroundColor = "#a1caf1";
		} else if (this.state.weather === "Sandstorm") {
			document.body.style.backgroundColor = "#ecd540";
		} else if (this.state.weather === "Hail") {
			document.body.style.backgroundColor = "#d3d3d3";
		} else if (this.state.weather === "Shadowy Aura") {
			document.body.style.backgroundColor = "#280c44";
		} else if (this.state.weather === "Fog") {
			document.body.style.backgroundColor = "#DCDBDF";
		} else if (this.state.weather === "Strong Winds") {
			document.body.style.backgroundColor = "#b9c4d6";
		} else if (this.state.weather === "Extremely Harsh Sunlight") {
			document.body.style.backgroundColor = "#ffae42";
		} else if (this.state.weather === "Heavy Rain") {
			document.body.style.backgroundColor = "#11416f";
		}

		return (
			<div className="App" style={{ fontSize: 25 }} >
				<div className="App-hcontainer">
					<header className="App-header">
						<img src={mainLogo} style={{ padding:20 }}/>
					</header>
					<div className="App-login">
						<SignIn retrieveUid = {this.setUid} setName = {this.setNameList} setPkmn = {this.setPkmnList}/>
					</div>
				</div>
				<div className="App-mid">
					<div className="App-body">
						<b>Attacking Pokemon</b>
						<Pokemon loc={0} getPkmnInfo={this.retrieveAtkPokemonInfo} />
					</div>
					<div className="App-body">
						<button className="button" style={{fontSize: 18, backgroundColor:"white"}} onClick={this.switchPokemon}>Switch Roles</button>
						<br/>
						<br/>
						<br/>
						{calculateButton}
						<br/>
						<br/>
						<b>Advanced Options</b>
						<input type="checkbox" style={{height: 20, width: 20, backgroundColor:"white"}} onChange={this.advancedOptions} />
						<br/>
						<br/>
						<button className="button" style={{ fontSize: 18, backgroundColor: "white" }} onClick={this.resetSettings}>Reset Settings</button>
						<div className="advancedBody">
							{generationSelection}
							{weatherSelection1}
							{weatherSelection2}
							{weatherSelection3}
							{weatherSelection45}
							{weatherSelection678}
						</div>
						<br/>
					</div>
					<div className="App-body">
						<b>Defending Pokemon</b>
						<Pokemon loc={1} getPkmnInfo={this.retrieveDefPokemonInfo}/>
					</div>
				</div>
				<div className="App-body" style={{ display: "flex", minWidth: "100%"}}>
					<div className="advancedBody2">
						{numberMovesSelection}
						{moveFilterSelection}
						{terrainSelection}
					</div>
					{wholeList}
				</div>
				<div className="advancedBody">
					{saveLoad}
				</div>
			</div>
        );
    }
}

export default HomePage;