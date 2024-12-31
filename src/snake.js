   var snake = [];
    var score = 0;
    var scoreBefore = [0,0];
    var scoreBeforeLimit = [0,0];
    var playgroundLimit = [16, 10];
    var playgroundLevel = [
   	{
        "ID" : 0,
        "nextLevelID" : 1,
        "levelName" : "Stage 1",
        "scoreLimit" : 30,
        "playgroundLimit" : [16, 10],
        "scoreBefore" : [3,5],
        "snakeStartPos" : [8, 5],
        "snakeInitLength" : 4,
        "snakeInitDirection" : "Left",
        "leaderboard" : [
            ["Player 1", 30],
            ["Player 2", 25],
            ["Player 3", 20],
            ["Player 4", 15],
            ["Player 5", 10],
            ["Player 6", 5],
            ["Player 7", 4],
            ["Player 8", 3],
            ["Player 9", 2],
            ["Player 10", 1]
            ]

    },
    {
        "ID" : 1,
        "nextLevelID" : 2,
        "levelName" : "Stage 2",
        "scoreLimit" : 30,
        "playgroundLimit" : [16, 10],
        "scoreBefore" : [3,5],
        "snakeStartPos" : [8, 5],
        "snakeInitLength" : 4,
        "snakeInitDirection" : "Left",
    	"voidCases" : [
    				[1,5], [1,6], [1,7], 
    				[2,5], [2,6], [2,7], 
    				[3,5], [3,6], [3,7], 
    				[4,5], [4,6], [4,7], 
    				[5,5], [5,6], [5,7], 
    				[12,5], [12,6], [12,7],
    				[13,5], [13,6], [13,7],
    				[14,5], [14,6], [14,7],
    				[15,5], [15,6], [15,7],
    				[16,5], [16,6], [16,7]
    				],
        "leaderboard" : [
            ["Player 1", 30],
            ["Player 2", 25],
            ["Player 3", 20],
            ["Player 4", 15],
            ["Player 5", 10],
            ["Player 6", 5],
            ["Player 7", 4],
            ["Player 8", 3],
            ["Player 9", 2],
            ["Player 10", 1]
            ]
    },
    {
        "ID" : 2,
        "nextLevelID" : 3,
        "levelName" : "Stage 3",
        "scoreLimit" : 30,
        "playgroundLimit" : [16, 10],
        "scoreBefore" : [3,5],
        "snakeStartPos" : [8, 5],
        "snakeInitLength" : 4,
        "snakeInitDirection" : "Left",
    	"voidCases" : [
    				[1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9], [1,10], 
    				[2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9],
    				[3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8],
    				[4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7],
    				[5,1], [5,2], [5,3], [5,4], [5,5], [5,6],
    				[6,1], [6,2], [6,3], [6,4], [6,5],
    				[7,1], [7,2], [7,3], [7,4],
    				[8,1], [8,2], [8,3],
    				[9,1], [9,2],
    				[10,1],
    				],
        "leaderboard" : [
            ["Player 1", 30],
            ["Player 2", 25],
            ["Player 3", 20],
            ["Player 4", 15],
            ["Player 5", 10],
            ["Player 6", 5],
            ["Player 7", 4],
            ["Player 8", 3],
            ["Player 9", 2],
            ["Player 10", 1]
            ]
    },
    {
        "ID" : 3,
        "nextLevelID" : "N/A",
        "levelName" : "Stage 4",
        "scoreLimit" : 10,
        "playgroundLimit" : [16, 10],
        "scoreBefore" : [3,5],
        "snakeStartPos" : [8, 5],
        "snakeInitLength" : 4,
        "snakeInitDirection" : "Left",
    	"voidCases" : [
    				[4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [4,9], [4,10],
    				[13,1], [13,2], [13,3], [13,4], [13,5], [13,6], [13,7], [13,8], [13,9], [13,10]
    				],
    	"tmpVoidCases" : [
    				[4,5], [4,6], [4,7],
    				[13,5], [13,6], [13,7]
    				],
        "leaderboard" : [
            ["Player 1", 10],
            ["Player 2", 9],
            ["Player 3", 9],
            ["Player 4", 8],
            ["Player 5", 8],
            ["Player 6", 7],
            ["Player 7", 5],
            ["Player 8", 4],
            ["Player 9", 2],
            ["Player 10", 1]
            ]
    }
    ];

    function download(content, mimeType, filename){
        var a = document.createElement('a')
        var blob = new Blob([content], {type: mimeType})
        var url = URL.createObjectURL(blob);
        a.setAttribute('href', url);
        a.setAttribute('download', filename);
        a.click();
    }

    var saveObj = null;
    var importButton = document.querySelector("#importData");
    var importFile = document.querySelector("#importFile");

    importFile.addEventListener("change", function () {
        readInputFile(this);
    });

    function readFile(file) {
  return new Promise((resolve, reject) => {
    let freader = new FileReader();
    freader.onload = x => resolve(freader.result);
    freader.readAsText(file);
  })
}

async function readInputFile(input) {
      try {
            console.log(input);
            console.log(input.files);
            console.log(input.files[0]);
            console.log(input.files[0].type);
          if (input.files[0].type === "text/plain" || input.files[0].type === "application/json") {
      var fileContent = await readFile(input.files[0]);

      dataObj = JSON.parse(fileContent);
  saveObj =  dataObj;
  console.log(selectDataOption);
  if (selectDataOption === "importLevel") {
        console.log("CUSTOM LEVEL IMPORT");
        loadData("level");
    }
    } else {
                dataMsg.classList.add("show");
                dataMsg.classList.add("error");
                dataMsg.classList.add("errorHighlight");
                dataMsg.innerHTML = "File type is not supported. The file type supported are <span class='highlightInfo'>.txt</span> and <span class='highlightInfo'>.json</span>";
                setTimeout(function () {
                    dataMsg.classList.remove("show");
                    dataMsg.classList.remove("error");
                    dataMsg.classList.remove("errorHighlight");
                    dataMsg.innerHTML = "";
                }, 4000);
    }
}
catch(err) {
                console.error(err.message);
                    dataMsg.classList.add("show");
                dataMsg.classList.add("error");
                dataMsg.classList.add("errorHighlight");
                dataMsg.innerHTML = err.message;
                setTimeout(function () {
                    dataMsg.classList.remove("show");
                    dataMsg.classList.remove("error");
                    dataMsg.classList.remove("errorHighlight");
                    dataMsg.innerHTML = "";
                }, 4000);
}
}

function checkImport(importType) {
     if (importType === "level") {
        var levelFields = [{"ID" : "number"}, 
            {"levelName" : "string"}, 
            {"scoreLimit" : "number"}, 
            {"foodLifespan" : "number"},
            {"playgroundLimit" : ["Array", 1, 2]},
            {"playgroundBgColor" : "string"}, 
            {"scoreBefore" : ["Array", 1, 2]}, 
            {"bonusLifespan" : "number"},
            {"tmpVoidLifespan" : "number"},
            {"snakeInitLength" : "number"}, 
            {"snakeInitDirection" : "string"}, 
            {"nextLevelID" : "number"}, 
            {"snakeStartPos" : ["Array", 1, 2]},
            {"voidCases" : ["Array", 2, null]},
            {"tmpVoidCases" : ["Array", 2, null]},
            {"haveLeaderboard" : "boolean"},
            {"leaderboard" : ["Array", 2, 10]}
            ];

        var checkLevel = JSON.parse(saveObj);
        var testLevel = {};
        var levelTab = [];
        var test = [];
        checkLevel.forEach(function (itemLevel, indexLevel) {
            console.groupCollapsed(itemLevel.levelName);

            for (var [data, value] of Object.entries(itemLevel)) {
                test[indexLevel] = false;
                levelFields.forEach(function (item, index) {

                    if (data === Object.keys(item)[0]) {
                        console.groupCollapsed(data);
                        console.log("data : "+ data);
                        console.log("value : "+ value);
                        if (Array.isArray(value) === true) {

                            console.log("Array.isArray(value) : " + Array.isArray(value));
                            if (Object.values(item)[0][0] === "Array") {
                                //check if value of item is array
                                console.log("Object.values(item)[0][0] : " + Object.values(item)[0][0]);
                                if (Array.isArray(value[0]) === false && value.length === Object.values(item)[0][2]) {
                                    //check if elem of value is not array && value size is  equal to value of item size 
                                    console.log("not array");
                                    console.log("Array.isArray(value[0]) : " + Array.isArray(value[0]));
                                    console.log("value.length : " + value.length);
                                    console.log("Object.values(item)[0][2] : " + Object.values(item)[0][2]);
                                    var testArrayVal = false;
                                    for (var e=0; e < value.length; e++) {
                                        if (!isNaN(value[e]))  {
                                            testArrayVal = true;
                                        }
                                    }
                                    if (testArrayVal === true) {
                                        test[indexLevel] = true;
                                    }
                                } else if (Array.isArray(value[0]) === true && value[0].length === Object.values(item)[0][1]) {

                                    console.log("array");
                                    console.log("Array.isArray(value[0]) : " + Array.isArray(value[0]));
                                    console.log("value[0].length : " + value[0].length);
                                    console.log("Object.values(item)[0][1] : " + Object.values(item)[0][1]);
                                    var testArrayVal = false;
                                    for (var e=0; e < value[0].length; e++) {
                                        if (data !== "leaderboard" && !isNaN(value[0][e]))  {
                                            testArrayVal = true;
                                        } else if (data === "leaderboard" && isNaN(value[0][e])) {
                                            testArrayVal = true;
                                        }
                                    }
                                    if (testArrayVal === true) {
                                        test[indexLevel] = true;
                                    }
                                }
                            }
                        } else {
                            console.log("typeof value : " + typeof value);
                            console.log("Object.values(item)[0] : " + Object.values(item)[0]);
                            if (typeof value === Object.values(item)[0]) {
                                test[indexLevel] = true;
                            }
                        }
                        if (test[indexLevel] === true) {
                            switch(data) {
            case "ID" :
                if (value !== 0 && value !== 1 && value !== 2 && value !== 3 && !isNaN(value)) {
                    testLevel.ID = value;
                } else {
                    testLevel.ID = generateID();
                }
                break;
            case "levelName":
   
                if (value !== "") {
                    testLevel.levelName = value;
                } else {
                    testLevel.levelName = "Another snake level";
                }
                break;
            case "scoreLimit":
                if (value >= 0 && !isNaN(value)) {
                    testLevel.scoreLimit = value;
                } else {
                    testLevel.scoreLimit = 0;
                }
                break;
            case "foodLifespan" :
                if (value >= 1 && value <= 60 && !isNaN(value)) {
                    testLevel.foodLifespan = value;
                } else {
                    testLevel.foodLifespan = 10;
                }
                break;
            case "playgroundLimit":
                if (value.length === 2 && value[0] >= 5 && value[0] <= 30 && value[1] >= 5 && value[1] <= 30 && !isNaN(value[0]) && !isNaN(value[1])) {
                    testLevel.playgroundLimit = value;
                } else {
                    testLevel.playgroundLimit = [16, 10]
                }
                break;
            case "playgroundBgColor":
                var regex = /^#(?:[0-9a-f]{3}){1,2}$/i;
                if (value.match(regex)) {
                    testLevel.playgroundBgColor = value;
                } else {
                    testLevel.playgroundBgColor = "#ffffff";
                }
                break;
            case "scoreBefore":
                if (value.length === 2 && value[0] >= 0 && value[1] >= 0 && !isNaN(value[0]) && !isNaN(value[1])) {
                    testLevel.scoreBefore = value;
                } else {
                    testLevel.scoreBefore = [3, 5];
                }
                break;
            case "bonusLifespan" :
                if (value >= 1 && value <= 60 && !isNaN(value[0]) && !isNaN(value[1])) {
                testLevel.bonusLifespan = value;
                } else {
                    testLevel.bonusLifespan = 8;
                }
                break;
            case "tmpVoidLifespan" :
                if (value >= 1 && value <= 60 && !isNaN(value[0]) && !isNaN(value[1])) {
                testLevel.tmpVoidLifespan = value;
                } else if (itemLevel.tmpVoidCases && itemLevel.tmpVoidCases.length > 0) {
                    testLevel.tmpVoidLifespan = 5;
                }
                break;
            case "snakeInitLength":
                if (value >= 2 && value <= 10 && !isNaN(value[0]) && !isNaN(value[1])) {
                testLevel.snakeInitLength = value;
                } else {
                    testLevel.snakeInitLength = 4;
                }
                break;
            case "snakeInitDirection":
                if (value === "Left" || value === "Right" || value === "Top" || value === "Bottom") {
                    testLevel.snakeInitDirection = value;
                } else {
                    testLevel.snakeInitDirection = "Left";
                }
                break;
            case "nextLevelID":
                if (value !== 0 && value !== 1 && value !== 2 && value !== 3 && !isNaN(value) || value === "N/A") {
                    testLevel.nextLevelID = value;
                } else {
                    testLevel.nextLevelID = "N/A";
                }
                break;
            case "snakeStartPos":
                if (value.length === 2 && value[0] >= 0 && value[0] <= 30 && value[1] >= 0 && value[1] <= 30 && !isNaN(value[0]) && !isNaN(value[1])) {
                    testLevel.snakeStartPos = value;
                } else {
                    testLevel.snakeStartPos = [8, 5];
                }
                break;
            case "voidCases":
                var checkTab = [];
                if (value.length > 0) {
                    value.forEach(function (item) {
                        if (item.length === 2 && item[0] >= 0 && item[0] <= 30 && item[1] >= 0 && item[1] <= 30 && !isNaN(item[0]) && !isNaN(item[1])) {
                            checkTab.push(item);
                        }
                    }) 
                }
                if (checkTab.length > 0) {
                    testLevel.voidCases = checkTab;
                }
                break;
            case "tmpVoidCases":
                var checkTab = [];
                if (value.length > 0) {
                    value.forEach(function (item) {
                        if (item.length === 2 && item[0] >= 0 && item[0] <= 30 && item[1] >= 0 && item[1] <= 30 && !isNaN(item[0]) && !isNaN(item[1])) {
                            checkTab.push(item);
                        }
                    }); 
                }
                if (checkTab.length > 0) {
                    testLevel.tmpVoidCases = checkTab;
                }
                break;
            case "haveLeaderboard":
                if (value === false || value === true) {
                    testLevel.haveLeaderboard = value;
                }
                break;
            case "leaderboard":
                var checkTab = [];
                if (value.length <= 10) {
                    value.forEach(function (item) {
                        if (item.length === 2 && item[0].length > 0 && item[1] >= 0) {
                            checkTab.push(item);
                        }
                    }); 
                }
                if (checkTab.length > 0) {
                    testLevel.leaderboard = checkTab;
                }
                break;
            default:
        } 
                        }
                        console.groupEnd();
                    }
                });
            }
            console.log("checkImport testLevel");
            console.log(testLevel);
            console.groupEnd();
            console.log("indexLevel : "+indexLevel);
            console.log("test : ");
            console.log(test);
            levelTab.push(testLevel);
            testLevel = {};
        });
            console.log("checkImport levelTab");
            console.log(levelTab);
            return levelTab;
    }
}

function loadData(loadType) {  
    console.log("LOAD");
    console.log(saveObj);
    if (loadType === "level") {
            console.log("level data loading");
            dataLevel = checkImport(loadType);
            console.log("loadData dataLevel");
            console.log(dataLevel);
            importData(dataLevel)
        }
}

function importData(dataImportLevel) {
                console.log("dataImportLevel : ");
                console.log(dataImportLevel);
                if (localStorage.getItem("customMaps")) {
                /* add custom level to the custom level list */
                var customMapTab = JSON.parse(localStorage.getItem("customMaps"));
                var newCustomMap = dataImportLevel;
                var duplicateMap = false;
                newCustomMap.forEach(function (item, index) {
                    duplicateMap = false;
                    customMapTab.forEach(function (item2, index2) {
                        if (item.ID === item2.ID) {
                            duplicateMap = true;
                        }
                    });
                    if (duplicateMap === false) {
                        customMapTab.push(item);
                    }
                });
                localStorage.setItem("customMaps", JSON.stringify(customMapTab));
            } else {
                /* create the custom level list */
                var customMapTab = dataImportLevel;
                console.log("/****/");
                console.log(customMapTab);
                localStorage.setItem("customMaps", JSON.stringify(customMapTab));
            }
                dataMsg.classList.add("show");
                dataMsg.classList.add("success");
                dataMsg.classList.add("successHighlight");
                dataMsg.innerHTML = "Custom levels have been imported";
                updateCustomMapList();
                setTimeout(function () {
                    dataMsg.classList.remove("show");
                    dataMsg.classList.remove("success");
                    dataMsg.classList.remove("successHighlight");
                    dataMsg.innerHTML = "";
                }, 4000);
}

/* 
src : https://www.delftstack.com/fr/howto/javascript/open-local-text-file-using-javascript/
*/

      var playgroundCustomLevel = [];

var highScoreCustom = [];
    if (localStorage.getItem("customMaps")) {
        playgroundCustomLevel = JSON.parse(localStorage.getItem("customMaps"));
        var maxCustomLevel = playgroundCustomLevel.length;
        if (localStorage.getItem("highscoreCustom")) {
            highScoreCustom = JSON.parse(localStorage.getItem("highscoreCustom"));
            playgroundCustomLevel.forEach(function(item, index) {
                if (!highScoreCustom[index]) {
                    highScoreCustom.push({"levelID" : item.ID, "highscore" : 0});
                }
            });
        } else {
            playgroundCustomLevel.forEach(function(item, index) {
                highScoreCustom.push({"levelID" : item.ID, "highscore" : 0});
            });
        }
        /* */
        var playgroundPreviewsBlock = document.querySelector("#previewPlaygrounds");
        var previewContainer = document.querySelector("#levelSelectBlock");
        var previewInstruction = document.querySelector("#levelSelectBlock .instruction");
        /* */
        var classicLevelTitle = document.createElement("h3");
        classicLevelTitle.setAttribute("id", "classicTitle");
        classicLevelTitle.innerHTML = "Classic Level";
        previewContainer.insertBefore(classicLevelTitle, playgroundPreviewsBlock);
        /* */
        var customLevelTitle = document.createElement("h3");
        customLevelTitle.setAttribute("id", "customTitle");
        customLevelTitle.innerHTML = "Custom Level";
        previewContainer.insertBefore(customLevelTitle, previewInstruction);
        /* */
        var previewCustomPlayground = document.createElement("div");
        previewCustomPlayground.setAttribute("id", "previewCustomPlaygrounds");
        previewContainer.insertBefore(previewCustomPlayground, previewInstruction);

    } else {
        var exportLevelButton = document.querySelector("#dataMenu .exportLevelButton");
        exportLevelButton.classList.add("offline");
    }
    var prevLevelData = {};
    var nextLevelData = {};
        var currentLevel = 0;
        var currentCustomLevel = null;
        var levelSelectedNum = 0;
    var maxLevel = playgroundLevel.length;
    var levelLeaderboard = [];
    var levelCustomLeaderboard = [];
    
        var highScore = [];
            if (localStorage.getItem("highscore")) {
            highScore = JSON.parse(localStorage.getItem("highscore"));
            playgroundLevel.forEach(function(item, index) {
                if (!highScore[index]) {
                    highScore.push({"levelID" : item.ID, "highscore" : 0});
                }
            });
        } else {
            playgroundLevel.forEach(function(item, index) {
                highScore.push({"levelID" : item.ID, "highscore" : 0});
            });
        }
    var playgroundElem = document.querySelector("#playground");
    var playgroundGame = document.querySelector("#game");
    var scoreElem = document.querySelector("#currentScore");
    var highscoreElem = document.querySelector("#highScore");
    var resultElem = document.querySelector("#result");
    var resultHighElem = document.querySelector("#resultHighscore");
    var unlockMsgElem = document.querySelector("#unlockMsg");
    var levelSelector = document.querySelector("#levelSelectBlock");
    var gameOutro = document.querySelector("#outro");
    var gameOutroAction = document.querySelector("#outro .actionMsg");
    var stageName = document.querySelector("#stageName");
    var objStage = document.querySelector("#objStage");
    var objStageLimit = document.querySelector("#objScore");
    var objNextLevel = document.querySelector("#objNextLevel");
    var objNextLevelBlock = document.querySelector("#objNextLevelBlock");
    var gamePanel = document.querySelector("#panel");
    var gameIntro = document.querySelector("#intro");
    var gamePausePanel = document.querySelector("#pause");
    var gameLevelSelect = document.querySelector("#playPanel");
    var gameOptions = document.querySelector("#optionsPanel");
    var stageInfo = document.querySelector("#stageInfo");
    var gameInfo = document.querySelector("#gameInfo");
    var infoPanel = document.querySelector("#info");
    var scorePanel = document.querySelector("#score");
    var editorTools = document.querySelector("#editorTools");
    var levelSetting = document.querySelector("#levelSetting");
            var musicVolume = document.querySelector("#musicVolume");
        var musicVolumeBar = document.querySelector("#musicVolume .volumebar");
        var soundVolume = document.querySelector("#soundVolume");
        var soundVolumeBar = document.querySelector("#soundVolume .volumebar");
    var creditsPanel = document.querySelector("#credits");
    var dataPanel = document.querySelector("#gameData");
    var loadGamePanel = document.querySelector("#loadGame");
    var snakeDirection = null;
    var gameover = true;
    var gameLoop;
    var gamePaused = false;

    var miamAudio = new Audio('./assets/sound/Devour.flac');
    var crashAudio = new Audio('./assets/sound/RockHeavyBashFlesh1.flac');
    var screamAudio = new Audio('./assets/sound/WingedSerpentDeath.flac');
    var cheerAudio = new Audio('./assets/sound/cheer.mp3');
    var spawnAudio = new Audio('./assets/sound/ThunderClapCaster.flac');
    var spawn2Audio = new Audio('./assets/sound/PolymorphDone.flac');
    var spawn3Audio = new Audio('./assets/sound/HolyBolt.flac');
    var SpawnSoundset = {
        food : spawn2Audio,
        bonus : spawn3Audio,
        wall : spawnAudio,
    }
    var cutSnakeAudio = new Audio('./assets/sound/MetalHeavySliceFlesh1.flac');
    var disappearAudio = new Audio('./assets/sound/PurgeTarget1.flac');
    var boomWall = new Audio('./assets/sound/BuildingDeathSmallHuman3.flac')
    var jungleMusic = new Audio('./assets/music/jungle.mp3');
    var musicVol = 100;
        if (localStorage.getItem("musicVol")) {
            musicVol = localStorage.getItem("musicVol");
            volumeChange(musicVol, musicVolume, musicVolumeBar);
        }
    var soundVol = 100;
           if (localStorage.getItem("soundVol")) {
            soundVol = localStorage.getItem("soundVol");
            volumeChange(soundVol, soundVolume, soundVolumeBar);
        }
    var leftKey = "q";
    var rightKey = "s";
    var pauseKey = " ";
    var infoKey = "d";
    var cancelKey = "Escape";
    var restoreControlKey = "a";
    var editButton = false;
    var foodTimer;
    var foodTimerRespawn;
    var bonusTimer;
    var tmpVoidLoop;
    var menu = "main";
    var prevMenu = null;
    var menuOptions = {
        main : ["play", "options", "data", "editor", "credits"],
        pause : ["resume", "options", "main"],
        data : ["importLevel", "exportLevel"]
    };
    var selectMenuOption = null;
    var selectDataOption = null;
    var alertLoop;
    var voidTimeState = 0;
    var foodTimeState = 0;
    var alertTimeState = 0;
    var foodLifespan = 10;
    var bonusLifespan = 8;
    var tmpVoidLifespan = 5;
    var playgroundColor = "#FFFFFF";

    jungleMusic.loop = true;

    function updateSaveData() {
        if (localStorage.getItem("musicVol")) {
            musicVol = localStorage.getItem("musicVol");
            volumeChange(musicVol, musicVolume, musicVolumeBar);
        }
        if (localStorage.getItem("soundVol")) {
            soundVol = localStorage.getItem("soundVol");
            volumeChange(soundVol, soundVolume, soundVolumeBar);
        }
        /****/
                        if (localStorage.getItem("leaderboard")) {
                    levelLeaderboard = JSON.parse(localStorage.getItem("leaderboard"));
                    playgroundLevel.forEach(function(item, index) {
                        playgroundLevel.forEach(function(itemLeaderboard, indexLeaderboard) {
                        if (levelLeaderboard[indexLeaderboard] && levelLeaderboard[indexLeaderboard].levelID === item.ID) {
                            item.leaderboard = levelLeaderboard[indexLeaderboard].scoreTab;
                        }
                        });
                    });
                }
                if (localStorage.getItem("leaderboardCustom")) {
                    levelCustomLeaderboard = JSON.parse(localStorage.getItem("leaderboardCustom"));
                    playgroundCustomLevel.forEach(function(itemCustomLevel, indexCustomLevel) {
                        playgroundCustomLevel.forEach(function(itemCustomLeaderboard, indexCustomLeaderboard) {
                        if (levelCustomLeaderboard[indexCustomLeaderboard] && levelCustomLeaderboard[indexCustomLeaderboard].levelID === itemCustomLevel.ID) {
                            itemCustomLevel.leaderboard = levelCustomLeaderboard[indexCustomLeaderboard].scoreTab;
                        }
                        });
                    });
                }
        /****/
                            if (localStorage.getItem("highscore")) {
            highScore = JSON.parse(localStorage.getItem("highscore"));
            playgroundLevel.forEach(function(item, index) {
                if (!highScore[index]) {
                    highScore.push({"levelID" : item.ID, "highscore" : 0});
                }
            });
        } else {
            playgroundLevel.forEach(function(item, index) {
                highScore.push({"levelID" : item.ID, "highscore" : 0});
            });
        }
        /****/
        if (localStorage.length > 0) {
            var exportSaveButton = document.querySelector("#dataMenu .exportSaveButton");
            exportSaveButton.classList.remove("offline");
        }
        /****/
        if (localStorage.getItem("lastPlayed")) {
            var lastPlayedObj =  JSON.parse(localStorage.getItem("lastPlayed"));
            levelSelectedNum = lastPlayedObj.selected;
            currentLevel = lastPlayedObj.classic;
            currentCustomLevel = lastPlayedObj.custom;
            var playgroundFree = document.querySelectorAll(".levelItem:not(.lockedLevel)");
            playgroundFree[levelSelectedNum].classList.add("selectedPlayground");
                if (currentLevel === null) {
                    setLevel(currentCustomLevel, highScoreCustom, playgroundCustomLevel);
                    generateCase(playgroundCustomLevel[currentCustomLevel].playgroundLimit[0], playgroundCustomLevel[currentCustomLevel].playgroundLimit[1], playgroundElem);
                    generateLevel(currentCustomLevel, "playground", playgroundCustomLevel);
                } else {
                    setLevel(currentLevel, highScore, playgroundLevel);
                    generateCase(playgroundLevel[currentLevel].playgroundLimit[0], playgroundLevel[currentLevel].playgroundLimit[1], playgroundElem);
                    generateLevel(currentLevel, "playground", playgroundLevel);
                }
        }
        gameControlOptions();
    }

    function updateCustomMapList() {
    if (localStorage.getItem("customMaps")) {
        playgroundCustomLevel = JSON.parse(localStorage.getItem("customMaps"));
        var maxCustomLevel = playgroundCustomLevel.length;
        if (localStorage.getItem("highscoreCustom")) {
            highScoreCustom = JSON.parse(localStorage.getItem("highscoreCustom"));
            playgroundCustomLevel.forEach(function(item, index) {
                if (!highScoreCustom[index]) {
                    highScoreCustom.push({"levelID" : item.ID, "highscore" : 0});
                }
            });
        } else {
            playgroundCustomLevel.forEach(function(item, index) {
                highScoreCustom.push({"levelID" : item.ID, "highscore" : 0});
            });
        }
        /* */
        var playgroundPreviewsBlock = document.querySelector("#previewPlaygrounds");
        var previewContainer = document.querySelector("#levelSelectBlock");
        var previewInstruction = document.querySelector("#levelSelectBlock .instruction");
        /* */
        var classicLevelTitle = document.querySelector("#classicTitle");
        if (!classicLevelTitle) {
        classicLevelTitle = document.createElement("h3");
        classicLevelTitle.setAttribute("id", "classicTitle");
        classicLevelTitle.innerHTML = "Classic Level";
        previewContainer.insertBefore(classicLevelTitle, playgroundPreviewsBlock);
        }
        /* */
        var customLevelTitle = document.querySelector("#customTitle");
        if (!customLevelTitle) {
            customLevelTitle = document.createElement("h3");
            customLevelTitle.setAttribute("id", "customTitle");
            customLevelTitle.innerHTML = "Custom Level";
            previewContainer.insertBefore(customLevelTitle, previewInstruction);
        }
        /* */
        var previewCustomPlayground = document.querySelector("#previewCustomPlaygrounds");
        if (!previewCustomPlayground) {
            previewCustomPlayground = document.createElement("div");
            previewCustomPlayground.setAttribute("id", "previewCustomPlaygrounds");
            previewContainer.insertBefore(previewCustomPlayground, previewInstruction);
        } else {
            previewCustomPlayground.innerHTML = "";
        }

          if (playgroundCustomLevel.length > 0) {
            levelPreviews("previewCustomPlaygrounds", "previewCustomPlayground", playgroundCustomLevel, maxCustomLevel, highScoreCustom, "highscoreCustom");
            var exportLevelButton = document.querySelector("#dataMenu .exportLevelButton");
            exportLevelButton.classList.remove("offline");
        }

    }
    }

    function generateCase(x, y, playground) {
        playground.innerHTML = "";
        for (var i = 0; i < y; i++) {
            var gameRow = document.createElement("div");
            gameRow.classList.add("row");
            playground.appendChild(gameRow);
            for (var j = 0; j < x; j++) {
                var gameBlock = document.createElement("div");
                gameBlock.classList.add("block");
                gameRow.appendChild(gameBlock);
            }
        }
        playgroundElem = document.querySelector("#playground");
        var playgroundScore = document.querySelector("#score");
        var playgroundInfo = document.querySelector("#info");
        var playgroundGame = document.querySelector("#game");

        if (playgroundElem.offsetWidth > (window.document.body.clientWidth - (playgroundScore.offsetWidth + playgroundInfo.offsetWidth)) || playgroundElem.offsetHeight > window.document.body.clientHeight) {
            playgroundGame.classList.add("big");
            playgroundScore.style.top = "calc((100% - "+playgroundScore.offsetHeight+"px)/2)";
            playgroundInfo.style.top = "calc((100% - "+playgroundInfo.offsetHeight+"px)/2)";
        } else {
            playgroundGame.classList.remove("big");
            playgroundScore.style.top = "";
            playgroundInfo.style.top = "";
        }
    }

    function generateLevel(mapId=0, playground, snakeLevelList) {
        if (snakeLevelList[mapId].voidCases) {
            var voidPosX;
            var voidPosY;
            for (var k=0; k < snakeLevelList[mapId].voidCases.length; k++) {
        	   voidPosX = snakeLevelList[mapId].voidCases[k][0];
        	   voidPosY = snakeLevelList[mapId].voidCases[k][1];
        	   var voidCase = document.querySelector("#"+playground+" .row:nth-child(" + voidPosY + ") .block:nth-child(" + voidPosX + ")");
        	   voidCase.classList.add("void");
            }
         }
        if (snakeLevelList[mapId].tmpVoidCases) {
                var tmpvoidPosX;
                var tmpvoidPosY;
                for (var t = 0; t < snakeLevelList[mapId].tmpVoidCases.length; t++) {
                        tmpvoidPosX = snakeLevelList[mapId].tmpVoidCases[t][0];
                        tmpvoidPosY = snakeLevelList[mapId].tmpVoidCases[t][1];
                        var tmpvoidCase = document.querySelector("#"+playground+" .row:nth-child(" + tmpvoidPosY + ") .block:nth-child(" + tmpvoidPosX + ")");
                        tmpvoidCase.classList.add("void");
                        tmpvoidCase.classList.add("tmpvoid");
                }
            }
        
    }

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
        );
    }

    function caseIsFree (caseElem) {
        if (caseElem.classList.contains("snake") === false && caseElem.classList.contains("food") === false && caseElem.classList.contains("wall") === false && caseElem.classList.contains("bonus") === false && caseElem.classList.contains("void") === false) {
            return true;
        }
        return false;
    }

    function generateElem(type) {
        var elemPosX;
        var elemPosY;

        if (currentLevel === null) {
            elemPosX = Math.ceil(Math.random() * playgroundCustomLevel[currentCustomLevel].playgroundLimit[0]);
            elemPosY = Math.ceil(Math.random() * playgroundCustomLevel[currentCustomLevel].playgroundLimit[1]);
        } else {
            elemPosX = Math.ceil(Math.random() * playgroundLevel[currentLevel].playgroundLimit[0]);
            elemPosY = Math.ceil(Math.random() * playgroundLevel[currentLevel].playgroundLimit[1]);
        }

        var selectedCase = document.querySelector("#playground .row:nth-child(" + elemPosY + ") .block:nth-child(" + elemPosX + ")");
        var caseIsVisible = isInViewport(selectedCase);
        var freeCase = caseIsFree(selectedCase);
  
        if (type === "food") {
            clearInterval(foodTimer);
            if (gameover === false && gamePaused === false) {
                foodTimer = launchLoop("food");
            }
        } else if (type === "bonus") {
            clearTimeout(bonusTimer);
            if (gameover === false && gamePaused === false) {
                bonusTimer = launchTimer("bonus", selectedCase);
            }
        }
        if (caseIsVisible && freeCase) {
            selectedCase.classList.add(type+"Loc");
            setTimeout(function () {
                switch (type) {
                    case "food" :
                        SpawnSoundset.food.play();
                        break;
                    case "bonus" :
                        SpawnSoundset.bonus.play();
                        break;
                    case "wall" :
                        SpawnSoundset.wall.play();
                        break;
                    default:
                        break;
                }
                selectedCase.classList.remove(type+"Loc");
                selectedCase.classList.add(type);
                collisionSnake();
            }, 300);
        } else {
            console.error(type + " can't be generated at this position");
            if (gameover === false && gamePaused === false) {
                generateElem(type);
            }
        }
    }

    function launchTimer(Elem, selectedCase) {
        var lifespanTime = bonusLifespan*1000;
    	if (Elem === "bonus") {
        	    customTimer = setTimeout(function () {
                	selectedCase.classList.remove(Elem);
                    selectedCase.classList.add("disappearLoc");
                	disappearAudio.play();
                    setTimeout(function() {
                        selectedCase.classList.remove("disappearLoc");
                    }, 300);
                }, lifespanTime);
        }

        return customTimer;
    }

    function launchLoop(Elem) {
        var customLoop = null;
    	if (Elem === "tmpvoid") {
    		        var selectedAllCase = document.querySelectorAll("#playground ."+Elem);
                	if (selectedAllCase.length > 0) {
                	customLoop = setInterval(function() {
                		if (voidTimeState === tmpVoidLifespan) {
                			for (var v = 0; v < selectedAllCase.length; v++) {
                				var selectedCase = selectedAllCase[v];
                				selectedCase.classList.toggle("off");
                			}
                			voidTimeState = 0;

                		} else if ((tmpVoidLifespan <= 5 && voidTimeState > (tmpVoidLifespan/2)) || (tmpVoidLifespan > 5 && voidTimeState > (tmpVoidLifespan - 4))) {
							launchAlert(selectedAllCase);
                		}
                        voidTimeState++;
                	}, 1000);
    				}
    	} else if (Elem === "food") {
    		   	customLoop = setInterval(function () {
    		   		if (foodTimeState === foodLifespan) {
    		   			foodTimeState = 0;
                        var selectedCase = document.querySelector("#playground ."+Elem);
    		   			if (selectedCase) {
                			selectedCase.classList.remove(Elem);
                			disappearAudio.play();
                            selectedCase.classList.add("disappearLoc");
                            setTimeout(function () {
                                selectedCase.classList.remove("disappearLoc");
                            }, 300)
                			clearInterval(customLoop);
                			foodTimerRespawn = setTimeout(function () {
                                if (gameover === false && gamePaused === false) {
                				generateElem(Elem);
                                }
                			}, 1000);
                		}
                	}
                    foodTimeState++;
                }, 1000);
    	} 
    	return customLoop;
    }

    function generateSnake(length) {
        snake = [];
        if (currentLevel === null) {
            snakePosX = Math.ceil(playgroundCustomLevel[currentCustomLevel].snakeStartPos[0]);
            snakePosY = Math.ceil(playgroundCustomLevel[currentCustomLevel].snakeStartPos[1]);
        } else {
            snakePosX = Math.ceil(playgroundLevel[currentLevel].snakeStartPos[0]);
            snakePosY = Math.ceil(playgroundLevel[currentLevel].snakeStartPos[1]);
        }
        for (var i = 0; i < length; i++) {
            TestCase = document.querySelector("#playground .row:nth-child(" + snakePosY + ") .block:nth-child(" + snakePosX + ")");
            TestCaseLeft = document.querySelector("#playground .row:nth-child(" + snakePosY + ") .block:nth-child(" + (snakePosX + 1) + ")");
            TestCaseUp = document.querySelector("#playground .row:nth-child(" + (snakePosY + 1) + ") .block:nth-child(" + snakePosX + ")");
            TestCaseRight = document.querySelector("#playground .row:nth-child(" + snakePosY + ") .block:nth-child(" + (snakePosX - 1) + ")");
            TestCaseDown = document.querySelector("#playground .row:nth-child(" + (snakePosY - 1) + ") .block:nth-child(" + snakePosX + ")");
            switch (snakeDirection) {
            case "Left" :
                if (TestCaseLeft && !TestCaseLeft.classList.contains("void") && !TestCaseLeft.classList.contains("snake")) {
                    snakePosX++;
                } else if (TestCaseDown && !TestCaseDown.classList.contains("void") && !TestCaseDown.classList.contains("snake")) {
                    snakePosY--;
                } else if (TestCaseUp && !TestCaseUp.classList.contains("void") && !TestCaseUp.classList.contains("snake")) {
                    snakePosY++;
                } else if (TestCaseRight && !TestCaseRight.classList.contains("void") && !TestCaseRight.classList.contains("snake")) {
                    snakePosX--;
                }
                break;
            case "Up" :
                if (TestCaseUp && !TestCaseUp.classList.contains("void") && !TestCaseUp.classList.contains("snake")) {
                    snakePosY++;
                } else if (TestCaseRight && !TestCaseRight.classList.contains("void") && !TestCaseRight.classList.contains("snake")) {
                    snakePosX--;
                } else if (TestCaseLeft && !TestCaseLeft.classList.contains("void") && !TestCaseLeft.classList.contains("snake")) {
                    snakePosX++;
                } else if (TestCaseDown && !TestCaseDown.classList.contains("void") && !TestCaseDown.classList.contains("snake")) {
                    snakePosY--;
                }
                break;
            case "Right" :
                if (TestCaseRight && !TestCaseRight.classList.contains("void") && !TestCaseRight.classList.contains("snake")) {
                    snakePosX--;
                } else if (TestCaseUp && !TestCaseUp.classList.contains("void") && !TestCaseUp.classList.contains("snake")) {
                    snakePosY++;
                } else if (TestCaseDown && !TestCaseDown.classList.contains("void") && !TestCaseDown.classList.contains("snake")) {
                    snakePosY--;
                } else if (TestCaseLeft && !TestCaseLeft.classList.contains("void") && !TestCaseLeft.classList.contains("snake")) {
                    snakePosX++;
                }
                break;
            case "Down" :
                if (TestCaseDown && !TestCaseDown.classList.contains("void") && !TestCaseDown.classList.contains("snake")) {
                    snakePosY--;
                } else if (TestCaseRight && !TestCaseRight.classList.contains("void") && !TestCaseRight.classList.contains("snake")) {
                    snakePosX++;
                } else if (TestCaseLeft && !TestCaseLeft.classList.contains("void") && !TestCaseLeft.classList.contains("snake")) {
                    snakePosX--;
                } else if (TestCaseUp && !TestCaseUp.classList.contains("void") && !TestCaseUp.classList.contains("snake")) {
                    snakePosY++;
                }
                break;
            default: 
            }
            snake.push([snakePosY, snakePosX]);

            graficSnake(length, i, snakePosX, snakePosY);
        }

        updateSnake();
    }

    function graficSnake(elemSize, tabIndex, posX, posY) {
    	var selectedSnakeCase = document.querySelector("#playground .row:nth-child(" + posY + ") .block:nth-child(" + posX + ")");
    	if (selectedSnakeCase) {
            selectedSnakeCase.classList.add("snake");
            if (tabIndex === 0) {
                selectedSnakeCase.classList.add("head");
                switch (snakeDirection) {
                            case "Left":
                                selectedSnakeCase.classList.add("headLeft");
                                window.scrollTo((selectedSnakeCase.offsetLeft - 250), (selectedSnakeCase.offsetTop - 250));
                                break;
                            case "Right":
                                selectedSnakeCase.classList.add("headRight");
                                window.scrollTo((selectedSnakeCase.offsetLeft - 250), (selectedSnakeCase.offsetTop - 250));
                                break;
                            case "Up":
                                selectedSnakeCase.classList.add("headUp");
                                window.scrollTo((selectedSnakeCase.offsetLeft - 250), (selectedSnakeCase.offsetTop - 250));
                                break;
                            case "Down":
                                selectedSnakeCase.classList.add("headDown");
                                window.scrollTo((selectedSnakeCase.offsetLeft - 250), selectedSnakeCase.offsetTop - 250);
                                break;
                            default:
                }
            } else if (tabIndex === (elemSize - 1)) {
                selectedSnakeCase.classList.add("tail");
                    var prevSnakeCase = document.querySelector("#playground .row:nth-child(" + snake[tabIndex-1][0] + ") .block:nth-child(" + snake[tabIndex-1][1] + ")");
                    if (prevSnakeCase) {
                	if (prevSnakeCase.classList.contains("LtU") === true || prevSnakeCase.classList.contains("LtD") === true || snake[tabIndex-1][1] - snake[tabIndex][1] === -1) {
                		selectedSnakeCase.classList.add("tailLeft");
                	} else if (prevSnakeCase.classList.contains("RtU") === true || prevSnakeCase.classList.contains("RtD") === true || snake[tabIndex-1][1] - snake[tabIndex][1] === 1) {
                		selectedSnakeCase.classList.add("tailRight");
                	} else if (prevSnakeCase.classList.contains("DtR") === true || prevSnakeCase.classList.contains("DtL") === true || snake[tabIndex-1][0] - snake[tabIndex][0] === -1) {
                		selectedSnakeCase.classList.add("tailDown");
                	} else if (prevSnakeCase.classList.contains("UtR") === true || prevSnakeCase.classList.contains("UtL") === true || snake[tabIndex-1][0] - snake[tabIndex][0] === 1) {
                		selectedSnakeCase.classList.add("tailUp");
                	}
                }
            } else {
                selectedSnakeCase.classList.add("test");
                    if (snake[tabIndex-1][0] === snake[tabIndex][0]) {
                    	selectedSnakeCase.classList.add("horizontal");
                    } else if (snake[tabIndex-1][1] === snake[tabIndex][1]) {
                    	selectedSnakeCase.classList.add("vertical");
                    }
            }
        }
    }

    function clearElem(Elem) {
        var elemCases = document.querySelectorAll(Elem);
        for (var i = 0; i < elemCases.length; i++) {
        	if (Elem === ".snake") {
        		caseClass = "";
        		if (elemCases[i].classList.contains("block") === true) {
        				caseClass += "block ";
        			if (elemCases[i].classList.contains("void") === true) {
        				caseClass += "void ";
        			}
        			if (elemCases[i].classList.contains("tmpvoid") === true) {
        				caseClass += "tmpvoid ";
        				if (elemCases[i].classList.contains("off") === true) {
        					caseClass += "off ";
        				} else {
        					cutSnake();
        				}
        				if (elemCases[i].classList.contains("alert") === true) {
        					caseClass += "alert ";
        				}
        			}
        		}
        		elemCases[i].setAttribute("class", caseClass);
        	} else {
 				elemCases[i].setAttribute("class", "block");
 			}
        }
    }

    function updateSnake() {
        var diffX;
        var diffY;
        for (var i = 0; i < snake.length; i++) {
            if ((i + 2) < snake.length) {
                diffX = snake[i][0] - snake[i + 2][0];
                diffY = snake[i][1] - snake[i + 2][1];
                if (Math.abs(diffX) === 1 || Math.abs(diffY) === 1) {
                    var casePos = snake[i + 1];
                    if (snake[i + 1][0] === 0) {
                        casePos[0] = 1;
                    } 
                    if (snake[i + 1][1] === 0) {
                        casePos[1] = 1;
                    }
                    var selectedAngleCase = document.querySelector("#playground .row:nth-child(" + casePos[0] + ") .block:nth-child(" + casePos[1] + ")");
                    selectedAngleCase.classList.add("angle");
                    if (diffX === 1 && diffY === 1) {
                        if (snake[i + 1][0] > snake[i + 2][0]) {
                            selectedAngleCase.classList.add("UtR");
                        } else {
                            selectedAngleCase.classList.add("RtD");
                        }
                    } else if (diffX === 1 && diffY === -1) {
                        if (snake[i + 1][1] < snake[i + 2][1]) {
                            selectedAngleCase.classList.add("LtD");
                        } else {
                            selectedAngleCase.classList.add("UtL");
                        }
                    } else if (diffX === -1 && diffY === 1) {
                        if (snake[i + 1][1] > snake[i + 2][1]) {
                            selectedAngleCase.classList.add("RtU");
                        } else {
                            selectedAngleCase.classList.add("DtR");
                        }
                    } else if (diffX === -1 && diffY === -1) {
                        if (snake[i + 1][0] < snake[i + 2][0]) {
                            selectedAngleCase.classList.add("DtL");
                        } else {
                            selectedAngleCase.classList.add("LtU");
                        }
                    }
                }
            }

            graficSnake(snake.length, i, snake[i][1], snake[i][0]);
        }
    }

    function cutSnake() {
    	var newSnake = [];
    	for (var i = 0; i < snake.length; i++) {
    		var selectedCase = document.querySelector("#playground .row:nth-child(" + snake[i][0] + ") .block:nth-child(" + snake[i][1] + ")");
    		newSnake.push([snake[i][0], snake[i][1]]);
    		if (selectedCase.classList.contains("head") === false && selectedCase.classList.contains("tmpvoid") === true && selectedCase.classList.contains("off") === false) {
    			score -= (snake.length - newSnake.length);
    			scoreElem.innerHTML = score;
    			snake = newSnake;
    			cutSnakeAudio.play();
    			break;
    		} 
    	}
    }

    function moveSnake() {
        clearElem(".snake");
        var snakeCopy = [];
        for (var j = 0; j < snake.length; j++) {
            snakeCopy[j] = snake[j];
            if (j === 0) {
                switch (snakeDirection) {
                    case "Left":
                        snake[j] = [snake[j][0], (snake[j][1] - 1)];
                        break;
                    case "Right":
                        snake[j] = [snake[j][0], (snake[j][1] + 1)];
                        break;
                    case "Up":
                        snake[j] = [(snake[j][0] - 1), snake[j][1]];
                        break;
                    case "Down":
                        snake[j] = [(snake[j][0] + 1), snake[j][1]];
                        break;
                    default:
                }
            }
            if (j > 0) {
                snake[j] = [snakeCopy[j - 1][0], (snakeCopy[j - 1][1])];
            }

        }
        updateSnake();
    }

    function collisionSnake() {
        var HeadSnakeCase = document.querySelector("#playground .row:nth-child(" + snake[0][0] + ") .block:nth-child(" + snake[0][1] + ")");
        if (HeadSnakeCase && HeadSnakeCase.classList.contains("food") === true) {
            var snakePosX;
            var snakePosY;
            HeadSnakeCase.classList.remove("food");
            if ((snake[snake.length - 1][0] + 1) < playgroundLimit[0]) {
                snakePosX = (snake[snake.length - 1][0] + 1);
                snakePosY = (snake[snake.length - 1][1]);
            } else if ((snake[snake.length - 1][0] - 1) > 0) {
                snakePosX = (snake[snake.length - 1][0] - 1);
                snakePosY = (snake[snake.length - 1][1]);
            } else if ((snake[snake.length - 1][1] + 1) < playgroundLimit[1]) {
                snakePosY = (snake[snake.length - 1][1] + 1);
                snakePosX = (snake[snake.length - 1][0]);
            } else if ((snake[snake.length - 1][1] - 1) > 0) {
                snakePosY = (snake[snake.length - 1][1] - 1);
                snakePosX = (snake[snake.length - 1][0]);
            }
            score++;
            scoreBefore[0]++;
            scoreBefore[1]++;
            scoreElem.innerHTML = score;
            snake.push([snakePosX, snakePosY]);
            console.log("MIAM");
            clearInterval(foodTimer);
            miamAudio.pause();
            miamAudio.currentTime = 0;
            miamAudio.play();
            foodTimeState = 0;
            setTimeout(function () {
                if (gameover === false && gamePaused === false) {
            	generateElem("food");
                }
            }, 1000);
            if ((currentLevel !== null && scoreBefore[0] === playgroundLevel[currentLevel].scoreBefore[0]) || (currentLevel === null && scoreBefore[0] === playgroundCustomLevel[currentCustomLevel].scoreBefore[0])) {
            	scoreBefore[0]=0;
            	setTimeout(function () {
                    if (gameover === false && gamePaused === false) {
            		  generateElem("wall");
                    }
            	}, 1000);
            }
            if ((currentLevel !== null && scoreBefore[1] === playgroundLevel[currentLevel].scoreBefore[1]) || (currentLevel === null && scoreBefore[1] === playgroundCustomLevel[currentCustomLevel].scoreBefore[1])) {
            	scoreBefore[1]=0;
            	setTimeout(function () {
                    if (gameover === false && gamePaused === false) {
            		  generateElem("bonus");
                    }
            	}, 1000);
            }

        }

        if (HeadSnakeCase && HeadSnakeCase.classList.contains("bonus") === true) {
            HeadSnakeCase.classList.remove("bonus");  
            chooseWall();
            console.log("MIAM MIAM");
            clearInterval(bonusTimer);
            miamAudio.pause();
            miamAudio.currentTime = 0;
            miamAudio.play();
        }

        if (!HeadSnakeCase || (HeadSnakeCase && (HeadSnakeCase.classList.contains("test") === true || HeadSnakeCase.classList.contains("tail") === true || HeadSnakeCase.classList.contains("wall") === true || (HeadSnakeCase.classList.contains("void") === true && HeadSnakeCase.classList.contains("off") === false)))) {
            if (HeadSnakeCase !== null && (HeadSnakeCase.classList.contains("test") === true || HeadSnakeCase.classList.contains("tail") === true)) {
                screamAudio.play();
            } else {
                crashAudio.play();
            }
            gameOver();
        }
    }

    function chooseWall() {
        var wallCases = document.querySelectorAll("#playground .wall");
        var random = Math.ceil(Math.random() * (wallCases.length - 1))
        var caseIsVisible = isInViewport(wallCases[random]);
        if (caseIsVisible) {
            wallCases[random].classList.add("boom");
            wallCases[random].classList.remove("wall");
            boomWall.play();
            setTimeout(function () {
                wallCases[random].classList.remove("boom");
            }, 500);
        } else {
            chooseWall();
        }
    }

    function controlSnake() {
        document.addEventListener("keydown", function(e) {
            if (gameover === false && gamePaused === false && editButton === false) {
                switch (e.key) {
                    case rightKey:
                        switch (snakeDirection) {
                            case "Left":
                                snakeDirection = "Up";
                                break;
                            case "Right":
                                snakeDirection = "Down";
                                break;
                            case "Up":
                                snakeDirection = "Right";
                                break;
                            case "Down":
                                snakeDirection = "Left";
                                break;
                            default:
                        }
                        break;
                    case leftKey:
                        switch (snakeDirection) {
                            case "Left":
                                snakeDirection = "Down";
                                break;
                            case "Right":
                                snakeDirection = "Up";
                                break;
                            case "Up":
                                snakeDirection = "Left";
                                break;
                            case "Down":
                                snakeDirection = "Right";
                                break;
                            default:
                        }
                        break;
                    case infoKey :
                        var playgroundGame = document.querySelector("#game");
                        if (playgroundGame.classList.contains("big") === true) {
                            var infoScore = document.querySelector("#score");
                            var infoTips = document.querySelector("#info");
                            infoScore.classList.toggle("close");
                            infoTips.classList.toggle("close");
                        }
                        break;
                    default:
                }
            }
        });
    }

    var currentLeaderboard = [];
    function loadCurrentLeaderboard(leaderboardType, level) {
        var leaderboardList;
        var leaderboardTitle = document.querySelector("#leaderboardTitle");
        currentLeaderboard = [];
        if (localStorage.getItem(leaderboardType)) {
            leaderboardList = JSON.parse(localStorage.getItem(leaderboardType));
            leaderboardList.forEach(function (item) {
                if (item.leaderboardLevelID === level.ID) {
                    currentLeaderboard = item.leaderboardTable;
                }
            });
            if (currentLeaderboard.length === 0 && currentLevel !== null) {
                currentLeaderboard = playgroundLevel[currentLevel].leaderboard;
            }
        } else if (currentLevel !== null) {
            currentLeaderboard = playgroundLevel[currentLevel].leaderboard;
        }
        leaderboardTitle.innerHTML = level.levelName+" leaderboard";
    }

    function start() {
                    if (currentLevel === null) {
                        snakeDirection = playgroundCustomLevel[currentCustomLevel].snakeInitDirection
                        generateSnake(playgroundCustomLevel[currentCustomLevel].snakeInitLength);
                        loadCurrentLeaderboard("leaderboardCustom", playgroundCustomLevel[currentCustomLevel]);
                        foodLifespan = playgroundCustomLevel[currentCustomLevel].foodLifespan;
                        bonusLifespan = playgroundCustomLevel[currentCustomLevel].bonusLifespan;
                        tmpVoidLifespan = playgroundCustomLevel[currentCustomLevel].tmpVoidLifespan;
                    } else {
                        snakeDirection = playgroundLevel[currentLevel].snakeInitDirection
                        generateSnake(playgroundLevel[currentLevel].snakeInitLength);
                        loadCurrentLeaderboard("leaderboard", playgroundLevel[currentLevel]);
                        foodLifespan = 10;
                        bonusLifespan = 8;
                        tmpVoidLifespan = 5;
                    }
                    var lastPlayedObj = {"selected" : levelSelectedNum, "classic": currentLevel, "custom" : currentCustomLevel};
                    localStorage.setItem("lastPlayed", JSON.stringify(lastPlayedObj));
                    crashAudio.pause();
                    crashAudio.currentTime = 0;
                    screamAudio.pause();
                    screamAudio.currentTime = 0;
                    cheerAudio.pause();
                    cheerAudio.currentTime = 0;
                    boomWall.pause();
                    boomWall.currentTime = 0;
                    jungleMusic.play();
                    gamePanel.classList.add("hide");
                    gameLevelSelect.classList.add("hide");
                    gameIntro.classList.add("hide");
                    gamePausePanel.classList.add("hide");
                    gameOutro.classList.add("hide");
                    resultHighElem.classList.remove("hide");
                    unlockMsgElem.innerHTML = "";
                    gameover = false;
                    gamePaused = false;
                    menu = false;
                    if (gameover === false && gamePaused === false) {
                        generateElem("food");
                    }
                    gameLoop = setInterval(function() {
                        moveSnake();
                        collisionSnake();
                    }, 400);
                    var selectedAllCase = document.querySelectorAll("#playground .tmpvoid");
                    if (selectedAllCase.length > 0) {
                        tmpVoidLoop = launchLoop("tmpvoid");
                    }
            
    }

    function pauseGame () {
            if (menu === false) {
                    selectMenuOption = "resume";
                    selectedMenuOption = document.querySelector("#pauseMenu .resumeButton");
                    if (selectedMenuOption) {
                        selectedMenuOption.classList.add("selectedOption");
                    }
                    gamePanel.classList.remove("hide");
                    gamePausePanel.classList.remove("hide");
                    clearInterval(gameLoop);
                    clearInterval(foodTimer);
                    clearTimeout(bonusTimer);
                    clearInterval(tmpVoidLoop);
                    clearInterval(alertLoop);
                    clearTimeout(foodTimerRespawn); 
                    menu = "pause";
                    gamePaused = true;
                } else if (menu === "pause") {
                    gamePanel.classList.add("hide");
                    gamePausePanel.classList.add("hide");

                    gameLoop = setInterval(function() {
                        moveSnake();
                        collisionSnake();
                    }, 400);
                    var foodElem = document.querySelector("#playground .food");
                    if (foodElem) {
                        foodTimer = launchLoop("food");
                    } else {
                        generateElem("food");
                    }
                    var bonusElem = document.querySelector("#playground .bonus");
                    if (bonusElem) {
                    bonusTimer = launchTimer("bonus", bonusElem);
                    }
                    var selectedAllCase = document.querySelectorAll("#playground .tmpvoid");
                    if (selectedAllCase.length > 0) {
                        tmpVoidLoop = launchLoop("tmpvoid");
                    }
                    menu = false;
                    gamePaused = false;
                }
    }


    function menuNav() {
        var menuOptionsSelected = 0;
        var optionItemSelected = 0;
        var menuDataSelected = 0;
        selectMenuOption = "play";
        selectedMenuOption = document.querySelector("#mainMenu .playButton");
        if (selectedMenuOption) {
            selectedMenuOption.classList.add("selectedOption");
        }
        var selectedOptionList = document.querySelectorAll("#optionsPanel .gameOption");
        if (selectedOptionList[0]) {
            selectedOptionList[0].classList.add("selectedOption");
        }

        var selectedDataList = document.querySelectorAll("#gameData .dataOption:not(.offline)");
        if (selectedDataList[0]) {
            selectedDataList[0].classList.add("selectedOption");
        }

        document.addEventListener("keydown", function(e) {
            if (e.key === pauseKey) {
                e.preventDefault();
                if (menu === "main") {
                    var selectedMenuOption = document.querySelector("#mainMenu .selectedOption");
                    if (selectedMenuOption) {
                        selectedMenuOption.classList.remove("selectedOption");
                    }
                    if (selectMenuOption === "play") {
                        prevMenu = "main";
                        menu = "selectLevel";
                        gameIntro.classList.add("hide");
                        gameLevelSelect.classList.remove("hide");
                        selectMenuOption = null;
                    } else if (selectMenuOption === "options") {
                        prevMenu = "main";
                        menu = "options";
                        gameIntro.classList.add("hide");
                        gameOptions.classList.remove("hide");
                        if (selectedOptionList[optionItemSelected]) {
                            selectedOptionList[optionItemSelected].classList.remove("selectedOption");
                        }
                        if (selectedOptionList[0]) {
                            selectedOptionList[0].classList.add("selectedOption");
                        }
                        selectMenuOption = null;
                    } else if (selectMenuOption === "editor") {
                        prevMenu = null;
                        menu = null;
                        selectMenuOption = null;
                        gamePanel.classList.add("hide");
                        stageInfo.classList.add("hide");
                        gameInfo.classList.add("hide");
                        playgroundElem.classList.add("snakeEditorMap");
                        infoPanel.classList.add("snakeEditor");
                        scorePanel.classList.add("editSetting");
                        editorTools.classList.remove("hide");
                        levelSetting.classList.remove("hide");
                        document.body.classList.remove("gaming");
                        clearInterval(gameLoop);
                        clearInterval(foodTimer);
                        clearTimeout(bonusTimer);
                        clearInterval(tmpVoidLoop);
                        voidTimeState = 0;
                        foodTimeState = 0;
                        alertTimeState = 0;
                        score = 0;
                        scoreBefore = [0,0];
                        scoreElem.innerHTML = score;
                        jungleMusic.pause();
                        jungleMusic.currentTime = 0;
                        clearElem("#playground .block");
                        initEditor();
                    } else if (selectMenuOption === "credits") {
                        prevMenu = "main";
                        menu = "credits";
                        creditsPanel.classList.remove("hide");
                        gameIntro.classList.add("hide");
                        selectMenuOption = null;
                    } else if (selectMenuOption === "data") {
                        prevMenu = "main";
                        menu = "data";
                        dataPanel.classList.remove("hide");
                        gameIntro.classList.add("hide");
                        selectMenuOption = null;
                        selectDataOption = "importLevel";
                        selectedDataOption = document.querySelector("#dataMenu .importLevelButton");
                        if (selectedDataOption) {
                            selectedDataOption.classList.add("selectedOption");
                        }
                    }
                } else if (menu === "pause") {
                    var selectedMenuOption = document.querySelector("#pauseMenu .selectedOption");
                    if (selectedMenuOption) {
                        selectedMenuOption.classList.remove("selectedOption");
                    }
                    if (selectMenuOption === "resume" || selectMenuOption === null) {
                        pauseGame();
                    } else if (selectMenuOption === "options") {
                        prevMenu = "pause";
                        menu = "options";
                        gamePausePanel.classList.add("hide");
                        gameOptions.classList.remove("hide");
                        if (selectedOptionList[optionItemSelected]) {
                            selectedOptionList[optionItemSelected].classList.remove("selectedOption");
                        }
                        if (selectedOptionList[0]) {
                            selectedOptionList[0].classList.add("selectedOption");
                        }
                    } else if (selectMenuOption === "main") {
                        prevMenu = "pause";
                        menu = "main";
                        selectMenuOption = "play";
                        selectedMenuOption = document.querySelector("#mainMenu .playButton");
                        if (selectedMenuOption) {
                            selectedMenuOption.classList.add("selectedOption");
                        }
                        menuOptionsSelected = 0
                        gamePausePanel.classList.add("hide");
                        gameIntro.classList.remove("hide");
                        clearInterval(gameLoop);
                        clearInterval(foodTimer);
                        clearTimeout(bonusTimer);
                        clearInterval(tmpVoidLoop);
                        voidTimeState = 0;
                        foodTimeState = 0;
                        alertTimeState = 0;
                        score = 0;
                        scoreBefore = [0,0];
                        scoreElem.innerHTML = score;
                        jungleMusic.pause();
                        jungleMusic.currentTime = 0;
                        clearElem("#playground .block");
                        if (currentLevel === null) {
                            snakeDirection = playgroundCustomLevel[currentCustomLevel].snakeInitDirection
                            generateLevel(currentCustomLevel, "playground", playgroundCustomLevel);
                        } else {
                            snakeDirection = playgroundLevel[currentLevel].snakeInitDirection
                            generateLevel(currentLevel, "playground", playgroundLevel);
                        }
                    }
                } else if (menu === false) {
                        pauseGame();
                        selectMenuOption = null;
                } else if (menu === "gameover") {
                        prevMenu = "gameover";
                        menu = "selectLevel";
                        gameOutro.classList.add("hide");
                        gameLevelSelect.classList.remove("hide");
                        selectMenuOption = null;  
                        menuOptionsSelected = 0;
                        optionItemSelected = 0; 
                        if (currentLevel === null) {
                            leaderboardUpdate (currentCustomLevel, playgroundCustomLevel, levelCustomLeaderboard, "leaderboardCustom");
                        } else {
                            leaderboardUpdate (currentLevel, playgroundLevel, levelLeaderboard, "leaderboard");
                        }

                } else if (menu === "selectLevel") {
                    menu = false;
                    start();
                } else if (menu === "options") {
                        switch (optionItemSelected) {
                            case 0:
                                selectedOptionList[optionItemSelected].classList.add("editing");
                                selectedOptionList.forEach(function (item, index) {
                                    if (index !== optionItemSelected) {
                                        item.classList.add("offline");
                                    }
                                });
                                gameOptions.classList.add("edit");
                                var musicVolInfo = document.querySelector("#musicVolInfo");
                                musicVolInfo.classList.add("show");
                                break;
                            case 1:
                                selectedOptionList[optionItemSelected].classList.add("editing");
                                selectedOptionList.forEach(function (item, index) {
                                    if (index !== optionItemSelected) {
                                        item.classList.add("offline");
                                    }
                                });
                                gameOptions.classList.add("edit");
                                var soundVolInfo = document.querySelector("#soundVolInfo");
                                soundVolInfo.classList.add("show");
                                break;
                            case 2:
                                editLeftButton();
                                break;
                            case 3:
                                editRightButton();
                                break;
                            case 4:
                                editInfoButton();
                                break;
                            case 5:
                                editPauseButton();
                                break;
                            default:
                        }
                } else if (menu === "data") {
                    switch (menuDataSelected) {
                            case 0:
                                importFile.click();
                                break;
                            case 1:
                                if (localStorage.getItem("customMaps")) {
                                    var saveDoc = JSON.stringify(localStorage.getItem("customMaps"));
                                    download(saveDoc, 'text/plain', 'Snake_CustomMaps.txt');
                                    dataMsg.classList.add("show");
                                    dataMsg.classList.add("success");
                                    dataMsg.classList.add("successHighlight");
                                    dataMsg.innerHTML = "Custom levels have been exported, the file 'Snake_CustomMaps.txt' can be find in the Download directory.";
                                    setTimeout(function () {
                                        dataMsg.classList.remove("show");
                                        dataMsg.classList.remove("success");
                                        dataMsg.classList.remove("successHighlight");
                                        dataMsg.innerHTML = "";
                                    }, 10000);
                                } else {

                                }
                                break;
                            
                            default:
                        }
                }
            } else if (e.key !== pauseKey) {
                if (menu === "selectLevel") {
                    var playgroundFree = document.querySelectorAll(".levelItem:not(.lockedLevel)");

                    if (playgroundFree.length === 1) {
                        levelSelector.classList.add("hide");
                    }
                    if (e.key === rightKey) {
                        if ((levelSelectedNum+1) > (playgroundFree.length-1)) {
                            levelSelectedNum = 0;
                        } else {
                            levelSelectedNum++;
                        }
                    } else if (e.key === leftKey) {
                        if ((levelSelectedNum-1) < 0) {
                            levelSelectedNum = (playgroundFree.length-1);
                        } else {
                            levelSelectedNum--;
                        }
                    } else if (e.key === cancelKey) {
                        prevMenu = null;
                        menu = "main";
                        gameIntro.classList.remove("hide");
                        gameLevelSelect.classList.add("hide");
                        selectMenuOption = "play";
                        selectedMenuOption = document.querySelector("#mainMenu .playButton");
                            if (selectedMenuOption) {
                                selectedMenuOption.classList.add("selectedOption");
                            }
                    }

                    for (var i = 0; i < playgroundFree.length; i++) {
                        playgroundFree[i].classList.remove("selectedPlayground");
                    }
                    playgroundFree[levelSelectedNum].classList.add("selectedPlayground");

                    if (playgroundFree[levelSelectedNum].id.indexOf("previewPlayground") !== -1) {
                        currentLevel = parseInt(playgroundFree[levelSelectedNum].id.split("previewPlayground")[1]);
                        currentCustomLevel = null;
                    } else if (playgroundFree[levelSelectedNum].id.indexOf("previewCustomPlayground") !== -1) {
                        currentCustomLevel = parseInt(playgroundFree[levelSelectedNum].id.split("previewCustomPlayground")[1]);
                        currentLevel = null;
                    }

                    var playgroundGame = document.querySelector("#game");
                    var infoScore = document.querySelector("#score");
                    var infoTips = document.querySelector("#info");
                    if (playgroundGame.classList.contains("big") === false) {
                        infoScore.classList.remove("close");
                        infoTips.classList.remove("close");
                    }

                    selectLevel();
            } else if (menu === "main") {
                    var selectedMenuOption = document.querySelector("#mainMenu .selectedOption");
                    if (selectedMenuOption) {
                        selectedMenuOption.classList.remove("selectedOption");
                    }
                if (e.key === leftKey) {
                    menuOptionsSelected--;
                    if (menuOptionsSelected < 0) {
                        menuOptionsSelected = (menuOptions.main.length-1);
                    }
                } else if (e.key === rightKey) {
                    menuOptionsSelected++;
                    if (menuOptionsSelected > (menuOptions.main.length-1)) {
                        menuOptionsSelected = 0;
                    }
                }
                selectMenuOption = menuOptions.main[menuOptionsSelected];
                selectedMenuOption = document.querySelector("#mainMenu ."+menuOptions.main[menuOptionsSelected]+"Button");
                if (selectedMenuOption) {
                    selectedMenuOption.classList.add("selectedOption");
                }
            } else if (menu === "pause") {
                    var selectedMenuOption = document.querySelector("#pauseMenu .selectedOption");
                    if (selectedMenuOption) {
                        selectedMenuOption.classList.remove("selectedOption");
                    }
               if (e.key === leftKey) {
                    menuOptionsSelected--;
                    if (menuOptionsSelected < 0) {
                        menuOptionsSelected = (menuOptions.pause.length-1);
                    }
                } else if (e.key === rightKey) {
                    menuOptionsSelected++;
                    if (menuOptionsSelected > (menuOptions.pause.length-1)) {
                        menuOptionsSelected = 0;
                    }
                }
                selectMenuOption = menuOptions.pause[menuOptionsSelected];
                selectedMenuOption = document.querySelector("#pauseMenu ."+menuOptions.pause[menuOptionsSelected]+"Button");
                if (selectedMenuOption) {
                    selectedMenuOption.classList.add("selectedOption");
                }
            } else if (menu === "data") {
                selectedDataList = document.querySelectorAll("#gameData .dataOption:not(.offline)");

                var selectedDataOption = document.querySelector("#dataMenu .selectedOption");
                if (e.key === leftKey) {
                    if (selectedDataOption) {
                        selectedDataOption.classList.remove("selectedOption");
                    }
                    menuDataSelected--;
                    if (menuDataSelected < 0) {
                        menuDataSelected = (selectedDataList.length-1);
                    }
                    selectedDataOption = selectedDataList[menuDataSelected];
                    selectDataOption = menuOptions.data[menuDataSelected]
                    if (selectedDataOption) {
                        selectedDataOption.classList.add("selectedOption");
                    }
                } else if (e.key === rightKey) {
                    if (selectedDataOption) {
                        selectedDataOption.classList.remove("selectedOption");
                    }
                    menuDataSelected++;
                    if (menuDataSelected > (selectedDataList.length-1)) {
                        menuDataSelected = 0;
                    }
                    selectedDataOption = selectedDataList[menuDataSelected];
                    selectDataOption = menuOptions.data[menuDataSelected]
                    if (selectedDataOption) {
                        selectedDataOption.classList.add("selectedOption");
                    }
                } else if (e.key === cancelKey) {
                      prevMenu = null;
                        menu = "main";
                        dataPanel.classList.add("hide");
                        gameIntro.classList.remove("hide");
                        selectMenuOption = "data";
                        selectedMenuOption = document.querySelector("#mainMenu .dataButton");
                            if (selectedMenuOption) {
                                selectedMenuOption.classList.add("selectedOption");
                            }
                }
            } else if (menu === "options") {
                    if (e.key === leftKey) {
                        if (gameOptions.classList.contains("edit") === false) {
                            var selectedOptionItem = document.querySelector("#optionsPanel .selectedOption");
                            if (selectedOptionItem) {
                                selectedOptionItem.classList.remove("selectedOption");
                            }
                            optionItemSelected--;
                            if (optionItemSelected < 0) {
                                optionItemSelected = (selectedOptionList.length-1);
                            }
                            selectedOptionList[optionItemSelected].classList.add("selectedOption");
                        } else {
                            if (optionItemSelected === 0) {
                                musicVol--;
                                if (musicVol < 0) {
                                    musicVol = 0;
                                }
                                volumeChange(musicVol, musicVolume, musicVolumeBar);
                            } else if (optionItemSelected === 1) {
                                soundVol--;
                                if (soundVol < 0) {
                                    soundVol = 0;
                                }
                                volumeChange(soundVol, soundVolume, soundVolumeBar);
                            }
                        }
                    } else if (e.key === rightKey) {
                        if (gameOptions.classList.contains("edit") === false) {
                        var selectedOptionItem = document.querySelector("#optionsPanel .selectedOption");
                        if (selectedOptionItem) {
                            selectedOptionItem.classList.remove("selectedOption");
                        }
                         optionItemSelected++;
                        if (optionItemSelected > (selectedOptionList.length-1)) {
                            optionItemSelected = 0;
                        }
                        selectedOptionList[optionItemSelected].classList.add("selectedOption");
                        } else {
                            if (optionItemSelected === 0) {
                                musicVol++;
                                if (musicVol > 100) {
                                    musicVol = 100;
                                }
                                volumeChange(musicVol, musicVolume, musicVolumeBar);
                            } else if (optionItemSelected === 1) {
                                soundVol++;
                                if (soundVol > 100) {
                                    soundVol = 100;
                                }
                                volumeChange(soundVol, soundVolume, soundVolumeBar);
                            }
                        }
                    } else if (e.key === cancelKey) {
                        if (gameOptions.classList.contains("edit") === false) {
                            selectMenuOption = "options";
                            if ((localStorage.getItem("musicVol") && musicVol !== localStorage.getItem("musicVol")) || (!localStorage.getItem("musicVol") && musicVol !== 1)) {
                                localStorage.setItem("musicVol", parseInt(musicVol));
                            }
                            if ((localStorage.getItem("soundVol") && soundVol !== localStorage.getItem("soundVol")) || (!localStorage.getItem("soundVol") && soundVol !== 1)) {
                                localStorage.setItem("soundVol", parseInt(soundVol));
                            }
                            if (prevMenu === "main") {
                                menu = "main";
                                gameIntro.classList.remove("hide");
                                selectedMenuOption = document.querySelector("#mainMenu .optionsButton");
                                if (selectedMenuOption) {
                                    selectedMenuOption.classList.add("selectedOption");
                                }
                         } else if (prevMenu === "pause") {
                               menu = "pause";
                              gamePausePanel.classList.remove("hide");
                              selectedMenuOption = document.querySelector("#pauseMenu .optionsButton");
                             if (selectedMenuOption) {
                                   selectedMenuOption.classList.add("selectedOption");
                                }
                            }
                            gameOptions.classList.add("hide");
                            selectedOptionList.forEach(function (item, index) {
                                    item.classList.remove("selectedOption");
                            });
                            optionItemSelected = 0;
                        } else if (gameOptions.classList.contains("edit") === true) {
                            selectedOptionList[optionItemSelected].classList.remove("editing");
                            selectedOptionList.forEach(function (item, index) {
                                if (index !== optionItemSelected) {
                                    item.classList.remove("offline");
                                }
                            });
                            gameOptions.classList.remove("edit");
                            switch (optionItemSelected) {
                                case 0:
                                    var musicVolInfo = document.querySelector("#musicVolInfo");
                                    musicVolInfo.classList.remove("show");
                                    break;
                                case 1:
                                    var soundVolInfo = document.querySelector("#soundVolInfo");
                                    soundVolInfo.classList.remove("show");
                                    break;
                                default:
                            }
                        }
                    }
            } else if (menu === "credits") {
                    if (e.key === cancelKey) {
                            prevMenu = null;
                            menu = "main";
                            creditsPanel.classList.add("hide");
                            gameIntro.classList.remove("hide");
                            selectMenuOption = "credits";
                            selectedMenuOption = document.querySelector("#mainMenu .creditsButton");
                                if (selectedMenuOption) {
                                    selectedMenuOption.classList.add("selectedOption");
                                }
                    } 
            }

            }
        });
    }

    function leaderboardUpdate (levelIndex, Plevel, Lleaderboard, type) {
                        var newScoreName = document.querySelector("#newScoreName");
                        if (newScoreName) {
                            if (newScoreName.value === "") {
                                updateLeaderboard[newScoreIndex][0] = "PlayerName";  
                            } else if (newScoreIndex !== null) {
                            console.log("newScoreName.value : "+ newScoreName.value);
                            console.log("newScoreIndex : "+ newScoreIndex);
                            console.table(updateLeaderboard);
                               updateLeaderboard[newScoreIndex][0] = newScoreName.value; 
                            }
                            var leaderboardState = false;
                            Plevel[levelIndex].leaderboard = updateLeaderboard;
                            Lleaderboard.forEach(function (item, index) {
                                if (Plevel[levelIndex].ID === item.levelID) {
                                    item.scoreTab = updateLeaderboard;
                                    leaderboardState = true;
                                }
                            });
                            if (leaderboardState === false) {
                                Lleaderboard.push({"levelID" : Plevel[levelIndex].ID, "scoreTab" : updateLeaderboard})
                            }
                            Plevel[levelIndex].leaderboard = updateLeaderboard;
                            localStorage.setItem(type, JSON.stringify(Lleaderboard));
                        }
    }

    function launchAlert(caseGroup) {
    	alertLoop = setInterval(function () {
    	    for (var v = 0; v < caseGroup.length; v++) {
                var selectedCase = caseGroup[v];
                selectedCase.classList.toggle("alert");
            }
            if (alertTimeState === 2) {
            	clearInterval(alertLoop);
            	alertTimeState=0;
            	for (var v = 0; v < caseGroup.length; v++) {
                	var selectedCase = caseGroup[v];
                	selectedCase.classList.remove("alert");
            	}
            } else {
            	alertTimeState++;
            }
           }, 300);
    }

    function gameOver() {
        gameover = true;
        menu = "gameover";
        clearInterval(gameLoop);
        clearInterval(foodTimer);
        clearTimeout(bonusTimer);
        clearInterval(tmpVoidLoop);
        voidTimeState = 0;
        foodTimeState = 0;
        alertTimeState = 0;
        console.log("GAMEOVER");
        resultElem.innerHTML = score;
        if (currentLevel === null) {
            checkScore(currentCustomLevel, playgroundCustomLevel, "previewCustomPlayground", highScoreCustom, "highscoreCustom", "leaderboardCustom");
        } else {
            checkScore(currentLevel, playgroundLevel, "previewPlayground", highScore, "highscore", "leaderboard");
        }
        score = 0;
        scoreBefore = [0,0];
        scoreElem.innerHTML = score;
        jungleMusic.pause();
        jungleMusic.currentTime = 0;
            clearElem("#playground .block");
            if (currentLevel === null) {
                snakeDirection = playgroundCustomLevel[currentCustomLevel].snakeInitDirection;
              generateLevel(currentCustomLevel, "playground", playgroundCustomLevel);
            } else {
                snakeDirection = playgroundLevel[currentLevel].snakeInitDirection;
    		  generateLevel(currentLevel, "playground", playgroundLevel);
            }
            gamePanel.classList.remove("hide");
            gameOutro.classList.remove("hide");

    }

    var updateLeaderboard = [];
    var newScoreIndex = null;
    function checkScore (levelIndex, Plevel, previewSelector, highscoreTab, highscoreData, leaderboardType) {
                var scoreLeaderboard = document.querySelector("#leaderboard");
                updateLeaderboard = [];
                newScoreIndex = null;
               if (Plevel[levelIndex].leaderboard || Plevel[levelIndex].haveLeaderboard === true) {
                    scoreLeaderboard.classList.remove("hide");
                    var scoreList = document.querySelector("#scoreList");
                    scoreList.innerHTML = "";
                    var updateScore = false;
                    if (currentLeaderboard.length > 0) {
                        currentLeaderboard.forEach(function(itemScore, itemIndex) {
                            if (score > itemScore[1] && updateScore === false) {
                                updateLeaderboard.push([null, score]);
                                newScoreIndex = itemIndex;
                                if (updateLeaderboard.length < 10) {
                                    updateLeaderboard.push(itemScore);
                                }
                                updateScore = true;
                            } else if (updateLeaderboard.length < 10) {
                                updateLeaderboard.push(itemScore);
                                
                            }
                        });
                        if (updateScore === false && updateLeaderboard.length < 10) {
                            updateLeaderboard.push([null, score]);
                            newScoreIndex = updateLeaderboard.length - 1;
                            updateScore = true;
                        }
                    } else {
                        updateLeaderboard.push([null, score]);
                        newScoreIndex = 0;
                        updateScore = true;
                    }

                    updateLeaderboard.forEach(function (item, index) {
                        var scoreItem = document.createElement("div");
                        scoreItem.classList.add("scoreItem");
                        scoreList.appendChild(scoreItem);
                        var scorePos = document.createElement("div");
                        scorePos.innerHTML = (index + 1);
                        scoreItem.appendChild(scorePos);
                        var scoreName = document.createElement("div");
                        if (item[0] === null) {
                            menu = "leaderboard";
                            scoreItem.id = "playerPos";
                            var scoreNameInput = document.createElement("input");
                            scoreNameInput.id = "newScoreName";
                            scoreNameInput.placeholder = "PlayerName";
                            scoreNameInput.setAttribute("type", "text");    
                            scoreName.appendChild(scoreNameInput);
                            setTimeout(function () {
                                scoreNameInput.focus();
                                enterName(levelIndex, Plevel, newScoreIndex, leaderboardType);
                            }, 100);
                        } else {
                            scoreName.innerHTML = item[0];
                        }
                        scoreItem.appendChild(scoreName);
                        var scoreData = document.createElement("div");
                        scoreData.innerHTML = item[1]
                        scoreItem.appendChild(scoreData);
                    });
                } else {
                    scoreLeaderboard.classList.add("hide");
                }

                if (score > highscoreTab[levelIndex].highscore) {
            if (score >= Plevel[levelIndex].scoreLimit && Plevel[levelIndex].nextLevelID !== "N/A") {
                var playgroundUnlock = document.querySelector("#"+previewSelector+nextLevelData.index);
                if (playgroundUnlock && playgroundUnlock.classList.contains("lockedLevel") === true) {
                    unlockMsgElem.innerHTML = "You have unlock the level '"+nextLevelData.levelName+"' !";
                    var playgroundUnlockLayout = document.querySelector("#"+previewSelector+nextLevelData.index+ " .locked");
                    playgroundUnlock.classList.remove("lockedLevel");
                    playgroundUnlockLayout.remove();
                    if (levelIndex >= 0) {
                        levelSelector.classList.remove("hide");
                    }
                }
            }
            resultHighElem.style.display = "block";
            highscoreTab[levelIndex].highscore = score;
            highscoreElem.innerHTML = highscoreTab[levelIndex].highscore;
            localStorage.setItem(highscoreData, JSON.stringify(highscoreTab));
            cheerAudio.play();
        }
    }

    function enterName(levelIndex, Plevel, playerPos, leaderboardType) {
        var scoreNameElem = document.querySelector("#newScoreName");
        var scoreNameAction = document.querySelector("#enterNameAction");
        var replayAction = document.querySelector("#replayAction");
        var playerPosName = document.querySelector("#playerPos > div:nth-child(2)");
        var playerPosBlock = document.querySelector("#playerPos");
        var leaderboardGroup = [];
        var leaderboardSavedData = false;
        var leaderboardSavedDataIndex = null;
        var updateLeaderboardID = null; 

        replayAction.classList.add("hide");
        scoreNameAction.classList.remove("hide");
        scoreNameElem.addEventListener("keydown", function (e) {
            if (e.key === pauseKey) {
                e.preventDefault();
                    if (!scoreNameElem.value) {
                        scoreNameElem.value = scoreNameElem.placeholder;
                        playerPosName.innerHTML = scoreNameElem.placeholder;
                        updateLeaderboard[playerPos][0] = scoreNameElem.placeholder;
                    } else {
                        playerPosName.innerHTML = scoreNameElem.value;
                        updateLeaderboard[playerPos][0] = scoreNameElem.value;
                    } 
                    scoreNameElem.remove();
                    scoreNameAction.classList.add("hide");
                    replayAction.classList.remove("hide");
                    playerPosBlock.removeAttribute("id");
            }
        });
        document.addEventListener("keydown", function (e) {
            if (menu === "leaderboard") {
                if (e.key === pauseKey && replayAction.classList.contains("hide") === false) {
                    e.preventDefault();
                    menu = "gameover";
                    if (localStorage.getItem(leaderboardType)) {
                        leaderboardGroup = JSON.parse(localStorage.getItem(leaderboardType));
                        leaderboardGroup.forEach(function(item, index) {
                            console.log(item);
                            console.log(index);
                            if (leaderboardGroup[index].leaderboardLevelID === Plevel[levelIndex].ID) {
                                leaderboardSavedData = true; 
                                leaderboardSavedDataIndex = index;
                            }
                        });
                    }
                    Plevel[levelIndex].leaderboard = updateLeaderboard;
                    updateLeaderboardID = Plevel[levelIndex].ID;
                    
                    var leaderboardData = {
                        "leaderboardLevelID" : updateLeaderboardID,
                        "leaderboardTable" : updateLeaderboard
                    }
                    console.log("leaderboardSavedDataIndex : "+leaderboardSavedDataIndex);
                    if (leaderboardSavedData === true) {
                        leaderboardGroup[leaderboardSavedDataIndex] = leaderboardData;
                    } else {
                        leaderboardGroup.push(leaderboardData);
                    }
                    localStorage.setItem(leaderboardType, JSON.stringify(leaderboardGroup));
                    currentLeaderboard = updateLeaderboard;
                    console.log(currentLeaderboard);
                }
            }
        });
    }

    function init() {
        var playgroundFree = document.querySelectorAll(".levelItem:not(.lockedLevel)");

    	if (localStorage.getItem("lastPlayed")) {
    		levelSelectedNum = parseInt(JSON.parse(localStorage.getItem("lastPlayed")).selected);
            currentLevel = (isNaN(JSON.parse(localStorage.getItem("lastPlayed")).classic)) ? parseInt(JSON.parse(localStorage.getItem("lastPlayed")).classic) : JSON.parse(localStorage.getItem("lastPlayed")).classic;
            currentCustomLevel = (isNaN(JSON.parse(localStorage.getItem("lastPlayed")).custom)) ? parseInt(JSON.parse(localStorage.getItem("lastPlayed")).custom) : JSON.parse(localStorage.getItem("lastPlayed")).custom;
    	}

        levelPreviews("previewPlaygrounds", "previewPlayground", playgroundLevel, maxLevel, highScore, "highscore");

        if (playgroundCustomLevel.length > 0) {
            levelPreviews("previewCustomPlaygrounds", "previewCustomPlayground", playgroundCustomLevel, maxCustomLevel, highScoreCustom, "highscoreCustom");
        }

                var playgroundFree = document.querySelectorAll(".levelItem:not(.lockedLevel)");
                if (levelSelectedNum > playgroundFree.length || !playgroundFree[levelSelectedNum]) {
                    levelSelectedNum = 0;
                    currentCustomLevel = 0;
                }
                playgroundFree[levelSelectedNum].classList.add("selectedPlayground");
                
                if (currentLevel === null) {
                    setLevel(currentCustomLevel, highScoreCustom, playgroundCustomLevel);
                    generateCase(playgroundCustomLevel[currentCustomLevel].playgroundLimit[0], playgroundCustomLevel[currentCustomLevel].playgroundLimit[1], playgroundElem);
                    generateLevel(currentCustomLevel, "playground", playgroundCustomLevel);
                } else {
                    setLevel(currentLevel, highScore, playgroundLevel);
                    generateCase(playgroundLevel[currentLevel].playgroundLimit[0], playgroundLevel[currentLevel].playgroundLimit[1], playgroundElem);
                    generateLevel(currentLevel, "playground", playgroundLevel);
                }
        document.body.classList.add("gaming");
        document.body.focus();
        controlSnake();
        gameControlOptions();
        menuNav();
    }

    function levelPreviews(previewSelectorGroup, previewSelector,  Plevel, levelLimit, highscoreTab, highscoreData) {
        var playgroundPreviewsBlock = document.querySelector("#"+previewSelectorGroup);
        for (var l = 0; l < levelLimit; l++) {
            playgroundPreview = document.createElement("div");
            playgroundPreview.setAttribute("class", previewSelector+" levelItem");
            playgroundPreview.setAttribute("id", previewSelector+l);
            playgroundPreviewsBlock.appendChild(playgroundPreview);
        }

        var playgroundPreviews = document.querySelectorAll("."+previewSelector);

        for (var i = 0; i < playgroundPreviews.length; i++) {
            generateCase(Plevel[i].playgroundLimit[0], Plevel[i].playgroundLimit[1], playgroundPreviews[i]);
            generateLevel(i, playgroundPreviews[i].id, Plevel);
            playgroundPreviews[i].setAttribute("title", Plevel[i].levelName);

                Plevel.forEach(function(item, index) {
                    if (Plevel[i].ID === item.nextLevelID) {
                        prevLevelData = item;
                        prevLevelData.highscore = highscoreTab[index].highscore;
                        if (prevLevelData.highscore < prevLevelData.scoreLimit) {
                            var locked = document.createElement("div");
                            locked.classList.add("locked");
                            playgroundPreviews[i].classList.add("lockedLevel");
                            locked.setAttribute("title", Plevel[i].levelName+" : level locked.\nReach the score of "+prevLevelData.scoreLimit+" in the level "+ prevLevelData.levelName + " to unlock it");
                            playgroundPreviews[i].appendChild(locked);
                        }
                    }
                });
        }
    }

    function setLevel (levelIndex, highscoreTab, Plevel) {

                Plevel.forEach(function(item, index) {
                    if (Plevel[levelIndex].nextLevelID === item.ID) {
                        nextLevelData = item;
                        nextLevelData.index = index;
                    }
                });

                if (highscoreTab[levelIndex] && Plevel[levelIndex]) {
                    if (highscoreTab[levelIndex].highscore >= Plevel[levelIndex].scoreLimit) {
                        objStage.classList.add("hide");
                    } else if (highscoreTab[levelIndex].highscore < Plevel[levelIndex].scoreLimit) {
                        objNextLevelBlock.classList.remove("hide");
                        objStageLimit.innerHTML = Plevel[levelIndex].scoreLimit;
                        objNextLevel.innerHTML = nextLevelData.levelName;
                        objStage.classList.remove("hide");
                        if (Plevel[levelIndex].nextLevelID === "N/A") {
                            objNextLevelBlock.classList.add("hide");
                        }
                    }
                }
                
                highscoreElem.innerHTML = highscoreTab[levelIndex].highscore;
                stageName.innerHTML = Plevel[levelIndex].levelName;
    }

    function selectLevel () {
                clearElem("#playground .void");

                if (currentLevel === null) {
                    generateCase(playgroundCustomLevel[currentCustomLevel].playgroundLimit[0], playgroundCustomLevel[currentCustomLevel].playgroundLimit[1], playgroundElem);
                    generateLevel(currentCustomLevel, "playground", playgroundCustomLevel);
                    setLevel(currentCustomLevel, highScoreCustom, playgroundCustomLevel);
                    playgroundColor = playgroundCustomLevel[currentCustomLevel].playgroundBgColor;
                    playgroundElem.style.backgroundColor = playgroundColor;
                } else {
                    generateCase(playgroundLevel[currentLevel].playgroundLimit[0], playgroundLevel[currentLevel].playgroundLimit[1], playgroundElem);
                    generateLevel(currentLevel, "playground", playgroundLevel);
                    setLevel(currentLevel, highScore, playgroundLevel);
                    playgroundColor = "#FFFFFF";
                    playgroundElem.style.backgroundColor = playgroundColor;
                }
    }

        var editKey = null;
        var editScreen = document.querySelector("#editScreen");
        var editScreenSample = document.querySelector("#editScreenSample");
        var editScreenControl = document.querySelector("#editScreenControl");
        function editLeftButton() {
            editKey = "left";
            editScreenSample.classList.add("left_button");
            if (leftKey === " ") {
                editScreenSample.innerHTML = "space";
            } else {
              editScreenSample.innerHTML = leftKey;
            }
            editScreenControl.innerHTML = editKey;
            editScreen.classList.remove("hide");
            editButton = true;
        }

        function editRightButton () {
            editKey = "right";
            editScreenSample.classList.add("right_button");
            if (rightKey === " ") {
                editScreenSample.innerHTML = "space";
            } else {
              editScreenSample.innerHTML = rightKey;
            }
            editScreenControl.innerHTML = editKey;
            editScreen.classList.remove("hide");
            editButton = true;
        }

        function editPauseButton () {
            editKey = "pause";
            editScreenSample.classList.add("pause_button");
            if (pauseKey === " ") {
                editScreenSample.innerHTML = "space";
            } else {
              editScreenSample.innerHTML = pauseKey;
            }
            editScreenControl.innerHTML = editKey;
            editScreen.classList.remove("hide");
            editButton = true;
        }

        function editInfoButton () {
            editKey = "info";
            editScreenSample.classList.add("info_button");
            if (infoKey === " ") {
                editScreenSample.innerHTML = "space";
            } else {
              editScreenSample.innerHTML = infoKey;
            }
            editScreenControl.innerHTML = editKey;
            editScreen.classList.remove("hide");
            editButton = true;
        }

    function gameControlOptions() {

    	if (localStorage.getItem("customLeftButton")) {
			loadcustomButton("left", "left_button", "customLeftButton");
    	}

    	if (localStorage.getItem("customRightButton")) {
    		loadcustomButton("right", "right_button", "customRightButton");
    	}

        if (localStorage.getItem("customInfoButton")) {
            loadcustomButton("info", "info_button", "customInfoButton");
        }

    	if (localStorage.getItem("customPauseButton")) {
    		loadcustomButton("pause", "pause_button", "customPauseButton");
    	}

    	function loadcustomButton (newKey, typeGroupSelector, storeName) {
    		   			if (newKey === "left") {
    						leftKey = localStorage.getItem(storeName);
    					}
    					if (newKey === "right") {
    						rightKey = localStorage.getItem(storeName);
    					}
    					if (newKey === "pause") {
    						pauseKey = localStorage.getItem(storeName);
    					}
                        if (newKey === "info") {
                            infoKey = localStorage.getItem(storeName);
                        }
    					editScreenSample.classList.add(typeGroupSelector);
    					editScreenSample.innerHTML = localStorage.getItem(storeName);

						var buttonGroup = document.querySelectorAll("."+typeGroupSelector);
    					for (var i = 0; i < buttonGroup.length; i++) {
                            if (localStorage.getItem(storeName) === " ") {
                                buttonGroup[i].innerHTML = "space";
                            } else {
    					       buttonGroup[i].innerHTML = localStorage.getItem(storeName);
                            }
    				    }
    	}

        function restoreDefaultButton () {
            var confirmRestore = confirm("Are you sure you want to restore default controls ?");
            if (confirmRestore) {
            leftKey = "q";
            rightKey = "s";
            pauseKey = " ";
            infoKey = "d";
            localStorage.removeItem("customLeftButton");
            localStorage.removeItem("customRightButton");
            localStorage.removeItem("customPauseButton");
            localStorage.removeItem("customInfoButton");
    		var buttonGroup = [
                document.querySelectorAll(".left_button"),
                document.querySelectorAll(".right_button"),
                document.querySelectorAll(".pause_button"),
                document.querySelectorAll(".info_button"),
            ];
            buttonGroup.forEach(function (buttons) {
                buttons.forEach(function(button) {
                    (button.classList.contains("left_button")) && (button.innerHTML = leftKey);
                    (button.classList.contains("right_button")) && (button.innerHTML = rightKey);
                    (button.classList.contains("pause_button")) && (button.innerHTML = "space");
                    (button.classList.contains("info_button")) && (button.innerHTML = infoKey);
                })
            });
        }
        }

    	function changeGameButton (e, newKey, typeGroupSelector, storeName) {
    			e.stopImmediatePropagation();
    			if (e.key !== leftKey && e.key !== rightKey && e.key !== pauseKey && e.key !== infoKey && e.key !== cancelKey && e.key !== restoreControlKey) {
    					if (newKey === "left") {
    						leftKey = e.key;
    					}
    					if (newKey === "right") {
    						rightKey = e.key;
    					}
    					if (newKey === "pause") {
    						pauseKey = e.key;
    					}
                        if (newKey === "info") {
                            infoKey = e.key;
                        }
    					editScreenSample.classList.add(typeGroupSelector);
    					var buttonGroup = document.querySelectorAll("."+typeGroupSelector);
    					for (var i = 0; i < buttonGroup.length; i++) {
                            if (e.key === " ") {
                                buttonGroup[i].innerHTML = "space";
                            } else {
    					       buttonGroup[i].innerHTML = e.key;
                            }
    				    }
    				localStorage.setItem(storeName, e.key);
    				editScreen.classList.add("hide");
    				editButton = false;
    			} else if (e.key === restoreControlKey) {
                    var confirmRestoreButton = confirm("Are you sure you want to restore default control for "+newKey+" button ?");
                    if (confirmRestoreButton) {
                    if (newKey === "left") {
                        leftKey = "q";
                    }
                    if (newKey === "right") {
                        rightKey = "s";
                    }
                    if (newKey === "pause") {
                        pauseKey = " ";
                    }
                    if (newKey === "info") {
                        infoKey = "d";
                    }
                    editScreenSample.classList.add(typeGroupSelector);
                    var buttonGroup = document.querySelectorAll("."+typeGroupSelector);
                    for (var i = 0; i < buttonGroup.length; i++) {
                        if (e.key === " ") {
                            buttonGroup[i].innerHTML = "space";
                        } else {
                           buttonGroup[i].innerHTML = e.key;
                        }
                    }
                    localStorage.removeItem(storeName);
                    editScreen.classList.add("hide");
    				editButton = false;
                    }
                } else if (e.key === cancelKey) {
    				editKey = null;
    				editScreenSample.classList.remove("left_button");
    				editScreenSample.classList.remove("right_button");
    				editScreenSample.classList.remove("pause_button");
                    editScreenSample.classList.remove("info_button");
    				editScreenSample.innerHTML = "";
                    editScreenControl.innerHTML = "";
    				editScreen.classList.add("hide");
    				editButton = false;
    			} else {
    				console.error(e.key+" is already used for an other action");
    			}
    	}

    	document.addEventListener("keydown", function (e) {
    		if (editButton === true) {
    			e.stopImmediatePropagation();
    		if (editKey === "left") {
    			changeGameButton (e, editKey, "left_button", "customLeftButton");
    		} else if (editKey === "right") {
    			changeGameButton (e, editKey, "right_button", "customRightButton");
    		} else if (editKey === "pause") {
    			changeGameButton (e, editKey, "pause_button", "customPauseButton");
    		} else if (editKey === "info") {
                changeGameButton (e, editKey, "info_button", "customInfoButton");
            }
    		} else  if (menu === "options" && gameOptions.classList.contains("edit") === false && e.key === restoreControlKey) {
                restoreDefaultButton();
            }
    	});

    }

        function volumeChange(type, typeSelectorBg, typeSelector) {
            typeSelector.style.width = ((200*type)/100)+"px";
            if (type === musicVol) {
                jungleMusic.volume = (type/100);
            } else {
                miamAudio.volume = (type/100);
                crashAudio.volume = (type/100);
                screamAudio.volume = (type/100);
                cheerAudio.volume = (type/100);
                spawnAudio.volume = (type/100);
                spawn2Audio.volume = (type/100);
                spawn3Audio.volume = (type/100);
                cutSnakeAudio.volume = (type/100);
                disappearAudio.volume = (type/100);
                boomWall.volume = (type/100);
            }
            typeSelectorBg.setAttribute("title", type+"%");
        }

        init();


    /**** EDITOR SCRIPT ****/
    var displayLevelID = document.querySelector("#displayLevelID");
    var displayTitleLevel = document.querySelector("#displayTitle");
    var displayLimitScore = document.querySelector("#displayLimitScore");
    var displayScoreBefBonus = document.querySelector("#displayScoreBeforeBonus");
    var displayScoreBefWall = document.querySelector("#displayScoreBeforeWall");
    var displaySnakeSize = document.querySelector("#displaySnakeSize");
    var displaySnakeDirection = document.querySelector("#displaySnakeDirection");
    var displayNextLevelID = document.querySelector("#displayNextLevelID");
    var displayPlaygroundSizeX = document.querySelector("#displayPlaygroundSizeX");
    var displayPlaygroundSizeY = document.querySelector("#displayPlaygroundSizeY");
    var displayLeaderboard = document.querySelector("#displayLeaderboard");
    var displayFoodLifespan = document.querySelector("#displayFoodLifespan");
    var displayBonusLifespan = document.querySelector("#displayBonusLifespan");
    var displayTmpVoidLifespan = document.querySelector("#displayTmpVoidLifespan");
    var displayTmpVoidLifespan = document.querySelector("#displayPlaygroundBgColor");

    var editTitleLevel = document.querySelector("#stageTitle");
    var editLimitScore = document.querySelector("#limitScore");
    var editLimitScoreBlock = document.querySelector("#limitScoreBlock");
    var editScoreBefBonus = document.querySelector("#ScoreBeforeBonus");
    var editScoreBonusBlock = document.querySelector("#scoreBonusBlock");
    var editScoreBefWall = document.querySelector("#ScoreBeforeWall");
    var editScoreWallBlock = document.querySelector("#scoreWallBlock");
    var editSnakeSize = document.querySelector("#snakeSize");
    var editSnakeSizeBlock = document.querySelector("#snakeSizeBlock");
    var editSnakeDirection = document.querySelector("#snakeDirection");
    var editNextLevelID = document.querySelector("#nextLevelID");
    var editPlaygroundSizeXBlock = document.querySelector("#playgroundSizeXBlock");
    var editPlaygroundSizeYBlock = document.querySelector("#playgroundSizeYBlock");
    var editPlaygroundSizeX = document.querySelector("#playgroundSizeX");
    var editPlaygroundSizeY = document.querySelector("#playgroundSizeY");
    var editLeaderboard = document.querySelector("#editorLeaderboard");
    var editLeaderboardBlock = document.querySelector("#editorLeaderboardBlock");
    var editFoodLifespan = document.querySelector("#foodLifespan");
    var editFoodLifespanBlock = document.querySelector("#editFoodLifespanBlock");
    var editBonusLifespan = document.querySelector("#bonusLifespan");
    var editBonusLifespanBlock = document.querySelector("#editBonusLifespanBlock");
    var editTmpVoidLifespan = document.querySelector("#tmpVoidLifespan");
    var editTmpVoidLifespanBlock = document.querySelector("#editTmpVoidLifespanBlock");
    var editPlaygroundBgColor = document.querySelector("#playgroundBgColor")
    var editPlaygroundBgColorBlock = document.querySelector("#playgroundBgColorBlock");
    var levelSelector = document.querySelector("#levelSelect");
    var nextLevelSelector = document.querySelector("#nextLevelID");
    var editorMsg = document.querySelector("#editorMsg");
    var dataMsg = document.querySelector("#dataMsg");
    var editorDirect = document.querySelector("#editorDirect");

    var levelObjectIndex = null;

    var levelObject = {};
        levelObject.ID = 0;
        levelObject.levelName = "";
        levelObject.playgroundLimit = [0,0];
        levelObject.scoreLimit = 0;
        levelObject.foodLifespan = 0;
        levelObject.scoreBefore = [0,0];
        levelObject.bonusLifespan = 0;
        levelObject.tmpVoidLifespan = 0;
        levelObject.snakeInitLength = 0;
        levelObject.snakeInitDirection = "";
        levelObject.nextLevelID = "N/A";
        levelObject.haveLeaderboard = false;
        levelObject.playgroundBgColor = "";
    var elemType = null;

    function quitEditor() {
        document.addEventListener("keydown", function (e) {
            if (e.key === cancelKey) {
                window.location.reload();
            }
        });
    }

    function generateID() {
        var newID = Math.ceil(new Date().getTime() * Math.random() / 100000)
        return newID;
    }

    function displayLevelInfo () {
        displayLevelID.innerHTML = levelObject.ID;
        displayTitleLevel.innerHTML = levelObject.levelName;
        displayLimitScore.innerHTML = levelObject.scoreLimit;
        displayFoodLifespan.innerHTML = levelObject.foodLifespan;
        displayScoreBefBonus.innerHTML = levelObject.scoreBefore[1];
        displayScoreBefWall.innerHTML = levelObject.scoreBefore[0];
        displayBonusLifespan.innerHTML = levelObject.bonusLifespan;
        displayTmpVoidLifespan.innerHTML = levelObject.tmpVoidLifespan;
        displaySnakeSize.innerHTML = levelObject.snakeInitLength;
        displaySnakeDirection.innerHTML = levelObject.snakeInitDirection;
        displayNextLevelID.innerHTML = levelObject.nextLevelID;
        displayPlaygroundSizeX.innerHTML = levelObject.playgroundLimit[0];
        displayPlaygroundSizeY.innerHTML = levelObject.playgroundLimit[1];
        displayLeaderboard.innerHTML = levelObject.haveLeaderboard;
        displayPlaygroundBgColor.innerHTML = levelObject.playgroundBgColor;
    }

    function newLevel() {
        levelSelector.classList.add("hide");

        levelObjectIndex = null;
        levelObject.scoreLimit = 0;
        levelObject.foodLifespan = 10;
        levelObject.scoreBefore = [3, 5];
        levelObject.bonusLifespan = 8;
        levelObject.tmpVoidLifespan = 5;
        levelObject.playgroundLimit = [16, 10];
        levelObject.snakeInitDirection = "Left";
        levelObject.snakeInitLength = 4;
        levelObject.levelName = "Another snake level";
        levelObject.ID = generateID();
        levelObject.nextLevelID = "N/A";
        levelObject.haveLeaderboard = false;
        levelObject.playgroundBgColor = "#ffffff";
        delete levelObject.leaderboard;
        delete levelObject.voidCases;
        delete levelObject.tmpVoidCases;

        elemType = null;

        displayLevelInfo();
        var selectedElem = document.querySelector(".snakeEditor .selectedElem");
        if (selectedElem) {
            selectedElem.classList.remove("selectedElem");
        }
        var levelSettings = document.querySelectorAll(".editSetting input");
        levelSettings.forEach(function(item, index) {
            item.value = "";
        });
        var levelSelectorOption = document.querySelector("#levelSelect .level[disabled]");
        var nextLevelSelectorOption = document.querySelector("#nextLevelID  .level[disabled]");
        if (levelSelectorOption) {
            levelSelectorOption.removeAttribute("disabled");
        }
        if (nextLevelSelectorOption) {
            nextLevelSelectorOption.removeAttribute("disabled");
        }
        playgroundElem.setAttribute("class", "snakeEditorMap");
        playgroundElem.innerHTML = "";
        document.querySelector("#playgroundBgColor").value = levelObject.playgroundBgColor;
        generateCase(levelObject.playgroundLimit[0], levelObject.playgroundLimit[1], playgroundElem);
        addElem();
    }

    function saveLevel() {
        var levelVoidCases = [];
        var levelTmpvoidCases = [];
        var playgroundYCases = document.querySelectorAll("#playground .row");
        for (var y = 0; y < playgroundYCases.length; y++) {
            var playgroundXCases = document.querySelectorAll("#playground .row:nth-child(" + (y+1) + ") .block");
            for (var x = 0; x < playgroundXCases.length; x++) {
                if (playgroundXCases[x].classList.contains("void") === true) {
                    levelVoidCases.push([(x+1), (y+1)]);
                }
                if (playgroundXCases[x].classList.contains("editortmpvoid") === true) {
                    levelTmpvoidCases.push([(x+1), (y+1)]);
                }
                if (playgroundXCases[x].classList.contains("snake") === true) {
                    levelObject.snakeStartPos = [(x+1), (y+1)];
                }
            }
        }

        if (levelVoidCases.length > 0) {
            levelObject.voidCases = levelVoidCases;
        } else if (levelObject.voidCases) {
            delete levelObject.voidCases;
        }

        if (levelTmpvoidCases.length > 0) {
            levelObject.tmpVoidCases = levelTmpvoidCases;
        } else if (levelObject.tmpVoidCases) {
            delete levelObject.tmpVoidCases;
        }

        if (editLeaderboard.checked === true) {
            levelObject.haveLeaderboard = true;
            if (!levelObject.leaderboard) {
                levelObject.leaderboard = [];
            }
        } else {
            levelObject.haveLeaderboard = false;
            if (levelObject.leaderboard) {
                delete levelObject.leaderboard;
            }
        }

        return levelObject;

    }

    function loadLevel(levelIndex) {
            clearElem(".block");
            newLevel();

            levelObjectIndex = levelIndex;
            levelObject.ID = playgroundCustomLevel[levelIndex].ID;
            levelObject.levelName = playgroundCustomLevel[levelIndex].levelName;
            levelObject.playgroundLimit = playgroundCustomLevel[levelIndex].playgroundLimit;
            levelObject.scoreLimit = playgroundCustomLevel[levelIndex].scoreLimit;
            levelObject.foodLifespan = playgroundCustomLevel[levelIndex].foodLifespan;
            levelObject.scoreBefore = playgroundCustomLevel[levelIndex].scoreBefore;
            levelObject.bonusLifespan = playgroundCustomLevel[levelIndex].bonusLifespan;
            levelObject.tmpVoidLifespan = playgroundCustomLevel[levelIndex].tmpVoidLifespan;
            levelObject.snakeInitLength = playgroundCustomLevel[levelIndex].snakeInitLength;
            levelObject.snakeInitDirection = playgroundCustomLevel[levelIndex].snakeInitDirection;
            levelObject.snakeStartPos = playgroundCustomLevel[levelIndex].snakeStartPos;
            levelObject.playgroundBgColor = playgroundCustomLevel[levelIndex].playgroundBgColor;

            if (levelObject.haveLeaderboard) {
                levelObject.haveLeaderboard = playgroundCustomLevel[levelIndex].haveLeaderboard;
            } else if (levelObject.leaderboard) {
                levelObject.haveLeaderboard = true;
            } else {
                levelObject.haveLeaderboard = false;
            }

            if (playgroundCustomLevel[levelIndex].leaderboard) {
                levelObject.leaderboard = playgroundCustomLevel[levelIndex].leaderboard;
            }

            elemType = null;

            if (playgroundCustomLevel[levelIndex].nextLevelID) {
                levelObject.nextLevelID = playgroundCustomLevel[levelIndex].nextLevelID;
            } else {
                levelObject.nextLevelID = "N/A";
            }

            if (playgroundCustomLevel[levelIndex].voidCases && playgroundCustomLevel[levelIndex].voidCases.length > 0) {
                levelObject.voidCases = playgroundCustomLevel[levelIndex].voidCases;
            }
            if (playgroundCustomLevel[levelIndex].tmpVoidCases && playgroundCustomLevel[levelIndex].tmpVoidCases.length > 0) {
                levelObject.tmpVoidCases = playgroundCustomLevel[levelIndex].tmpVoidCases;
            }

            displayLevelInfo();
            var selectedElem = document.querySelector(".snakeEditor .selectedElem");
            if (selectedElem) {
                selectedElem.classList.remove("selectedElem");
            }
            var levelSettings = document.querySelectorAll(".editSetting input");
            levelSettings.forEach(function(item, index) {
                item.value = "";
            });
            playgroundElem.setAttribute("class", "snakeEditorMap");
            playgroundElem.innerHTML = "";
            playgroundElem.style.backgroundColor = levelObject.playgroundBgColor;
            document.querySelector("#playgroundBgColor").value = levelObject.playgroundBgColor;
            generateCase(levelObject.playgroundLimit[0], levelObject.playgroundLimit[1], playgroundElem);
            generateLevelEditor(levelIndex, playgroundElem.id);
                editorMsg.classList.add("show");
                editorMsg.classList.add("success");
                editorMsg.classList.add("successHighlight");
                editorMsg.innerHTML = "The level '"+levelObject.levelName+"' has been loaded successfully";
                setTimeout(function () {
                    editorMsg.classList.remove("show");
                    editorMsg.classList.remove("success");
                    editorMsg.classList.remove("successHighlight");
                    editorMsg.innerHTML = "";
                }, 4000);
            addElem();
            levelList();
    }

    function editorMenu() {
        var newButton = document.querySelector("#newLevel");
        var saveButton = document.querySelector("#saveLevel");
        var loadButton = document.querySelector("#loadLevel");
        var eraseButton = document.querySelector("#eraseLevel");

        newButton.addEventListener("click", function() {
            newLevel();
        });

        saveButton.addEventListener("click", function() {
            var getSnakeHead = document.querySelector("#playground .block.snake");
            if (getSnakeHead) {
            var savedLevel = saveLevel();
            var levelExists = false;
            playgroundCustomLevel.forEach(function(item, index) {
                if (item.ID === savedLevel.ID) {
                    levelExists = true;
                    playgroundCustomLevel[index] = savedLevel;
                }
            });
            if (levelExists === false) {
                playgroundCustomLevel.push(savedLevel);
            }
            localStorage.setItem("customMaps", JSON.stringify(playgroundCustomLevel));
            editorMsg.classList.add("show");
            editorMsg.classList.add("success");
            editorMsg.classList.add("successHighlight");
            editorMsg.innerHTML = "The level '"+levelObject.levelName+"' has been saved successfully";
            setTimeout(function () {
                editorMsg.classList.remove("show");
                editorMsg.classList.remove("success");
                editorMsg.classList.remove("successHighlight");
                editorMsg.innerHTML = "";
            }, 4000);
            levelList();
            } else {
                console.error("There is no snake");
                editorMsg.classList.add("show");
                editorMsg.classList.add("error");
                editorMsg.classList.add("errorHighlight");
                editorMsg.innerHTML = "The level can't be saved because there is no snake head placed in the playground";
                setTimeout(function () {
                    editorMsg.classList.remove("show");
                    editorMsg.classList.remove("error");
                    editorMsg.classList.remove("errorHighlight");
                    editorMsg.innerHTML = "";
                }, 4000);

            }
        });

        loadButton.addEventListener("click", function() {
                var levelSelector = document.querySelector("#levelSelect");
                levelSelector.classList.toggle("hide");
                levelSelector.addEventListener("change", function () {
                    levelSelector.classList.add("hide");
                });
        });

        levelSelector.addEventListener("focusout", function() {
            levelSelector.classList.add("hide");
        });

        eraseButton.addEventListener("click", function () {
            var confirmErase = confirm("Are you sure you want to delete the level '"+levelObject.levelName+"' ? The action is definitive.");
            if (confirmErase) {
            var levelExists = false;
            var playgroundCustomLevelUpdate = [];
            var highScoreCustomUpdate = [];
            playgroundCustomLevel.forEach(function(item, index) {
                if (item.ID !== levelObject.ID) {
                    if (item.nextLevelID === levelObject.ID) {
                        item.nextLevelID = "N/A";
                    }
                    playgroundCustomLevelUpdate.push(item);
                } else {
                    levelExists = true;
                }
            });
            highScoreCustom.forEach(function(itemScore, indexScore) {
                if (itemScore.levelID !== levelObject.ID) {
                    highScoreCustomUpdate.push(itemScore);
                }
            });
            if (levelExists === true) {
                playgroundCustomLevel = playgroundCustomLevelUpdate;
                highScoreCustom = highScoreCustomUpdate;
                localStorage.setItem("highscoreCustom", JSON.stringify(highScoreCustom));
                localStorage.setItem("customMaps", JSON.stringify(playgroundCustomLevel));
                levelList();
                newLevel();
                editorMsg.classList.add("show");
                editorMsg.classList.add("success");
                editorMsg.classList.add("successHighlight");
                editorMsg.innerHTML = "The level '"+levelObject.levelName+"' has been deleted successfully";
                setTimeout(function () {
                    editorMsg.classList.remove("show");
                    editorMsg.classList.remove("success");
                    editorMsg.classList.remove("successHighlight");
                    editorMsg.innerHTML = "";
                }, 4000);
            } else {
                console.error("The current level is not saved");
                editorMsg.classList.add("show");
                editorMsg.classList.add("error");
                editorMsg.classList.add("errorHighlight");
                editorMsg.innerHTML = "The level selected doesn't exist";
                setTimeout(function () {
                    editorMsg.classList.remove("show");
                    editorMsg.classList.remove("error");
                    editorMsg.classList.remove("errorHighlight");
                    editorMsg.innerHTML = "";
                }, 4000);
            }
            }
        });

    }

    function levelList() {
        if (localStorage.getItem("customMaps")) {
                var levelLists = document.querySelectorAll("#levelSelect .level");
                levelLists.forEach(function (item, index) {
                    item.remove();
                });

                var nextLevelLists = document.querySelectorAll("#nextLevelID .level");
                nextLevelLists.forEach(function (item, index) {
                    item.remove();
                });

                playgroundCustomLevel = JSON.parse((localStorage.getItem("customMaps")));
                playgroundCustomLevel.forEach(function (item, index) {
                    var levelSelectorOption = document.createElement("option");
                    levelSelectorOption.setAttribute("class", "level");
                    levelSelectorOption.setAttribute("value", item.ID);
                    levelSelectorOption.setAttribute("title", "custom level ID : "+item.ID);
                    levelSelectorOption.innerHTML = item.levelName;
                    levelSelector.appendChild(levelSelectorOption);
                    levelSelectorOption.addEventListener("click", function () {
                        loadLevel(index);
                    });
                    /****/
                    var nextLevelSelectorOption = document.createElement("option");
                    nextLevelSelectorOption.setAttribute("class", "level");
                    nextLevelSelectorOption.setAttribute("value", item.ID);
                    nextLevelSelectorOption.setAttribute("title", "custom level ID : "+item.ID);
                    nextLevelSelectorOption.innerHTML = item.levelName;
                    nextLevelSelector.appendChild(nextLevelSelectorOption);
                    if (levelObject.ID === item.ID) {
                        levelSelectorOption.setAttribute("disabled", " ");
                        nextLevelSelectorOption.setAttribute("disabled", " ");
                    }
                });
        }
    }

    function editSettings() {

        function editInfo(edit, display) {
            if (edit.type === "checkbox") {
                var editValue = edit.checked;
            } else {
                var editValue = edit.value;
                if (edit.type === "number") {
                    var editValue = parseInt(edit.value);
                    if (edit.min && parseInt(editValue) < parseInt(edit.min)) {
                        editValue = parseInt(edit.min);
                        edit.value = parseInt(edit.min);
                        editorMsg.classList.add("show");
                        editorMsg.classList.add("error");
                        editorMsg.classList.add("errorHighlight");
                        editorMsg.innerHTML = "The minimum value for "+edit.name+" is "+edit.min;
                        setTimeout(function () {
                            editorMsg.classList.remove("show");
                            editorMsg.classList.remove("error");
                            editorMsg.classList.remove("errorHighlight");
                            editorMsg.innerHTML = "";
                        }, 4000);
                    }
                    if (edit.max && parseInt(editValue) > parseInt(edit.max)) {
                        editValue = parseInt(edit.max);
                        edit.value = parseInt(edit.max);
                        editorMsg.classList.add("show");
                        editorMsg.classList.add("error");
                        editorMsg.classList.add("errorHighlight");
                        editorMsg.innerHTML = "The maximum value for "+edit.name+" is "+edit.max;
                        setTimeout(function () {
                            editorMsg.classList.remove("show");
                            editorMsg.classList.remove("error");
                            editorMsg.classList.remove("errorHighlight");
                            editorMsg.innerHTML = "";
                        }, 4000);
                    }
                }
            }
            display.innerHTML = editValue;
            return editValue;
        }

        editTitleLevel.addEventListener("focusout", function() {
            if (editTitleLevel.value !== "") {
                var confirmChange = confirm("Are you sure you want to change the title ?");
                if (confirmChange === true) {
                    levelObject.levelName = editInfo(editTitleLevel, displayTitleLevel);
                }
            }
        });

        editLimitScore.addEventListener("focusout", function() {
            if (editLimitScore.value !== "") {
                var confirmChange = confirm("Are you sure you want to change the score Limit ?");
                if (confirmChange === true) {
                    levelObject.scoreLimit = editInfo(editLimitScore, displayLimitScore);
                }
            }
        });

        editFoodLifespan.addEventListener("focusout", function() {
            if (editFoodLifespan.value !== "") {
                var confirmChange = confirm("Are you sure you want to change the food lifespan ?");
                if (confirmChange === true) {
                    levelObject.foodLifespan = editInfo(editFoodLifespan, displayFoodLifespan);
                }
            }
        });

        editBonusLifespan.addEventListener("focusout", function() {
            if (editBonusLifespan.value !== "") {
                var confirmChange = confirm("Are you sure you want to change the bonus lifespan ?");
                if (confirmChange === true) {
                    levelObject.bonusLifespan = editInfo(editBonusLifespan, displayBonusLifespan);
                }
            }
        });

        editTmpVoidLifespan.addEventListener("focusout", function() {
            if (editTmpVoidLifespan.value !== "") {
                var confirmChange = confirm("Are you sure you want to change the temp. void lifespan ?");
                if (confirmChange === true) {
                    levelObject.tmpVoidLifespan = editInfo(editTmpVoidLifespan, displayTmpVoidLifespan);
                }
            }
        });

        editScoreBefBonus.addEventListener("focusout", function() {
            if (editScoreBefBonus.value !== "") {
                var confirmChange = confirm("Are you sure you want to change the score before Bonus ?");
                if (confirmChange === true) {
                    levelObject.scoreBefore[1] = editInfo(editScoreBefBonus, displayScoreBefBonus);
                }
            }
        });

        editScoreBefWall.addEventListener("focusout", function() {
            if (editScoreBefWall.value !== "") {
                var confirmChange = confirm("Are you sure you want to change the score before Wall ?");
                if (confirmChange === true) {
                    levelObject.scoreBefore[0] = editInfo(editScoreBefWall, displayScoreBefWall);
                }
            }
        });

        editSnakeSize.addEventListener("focusout", function() {
            if (editSnakeSize.value !== "") {
                var confirmChange = confirm("Are you sure you want to change the snake init size ?");
                if (confirmChange === true) {
                    levelObject.snakeInitLength = editInfo(editSnakeSize, displaySnakeSize);
                }
            }
        });

        editSnakeDirection.addEventListener("change", function() {
            if (editSnakeDirection.value !== "Direction") {
            levelObject.snakeInitDirection = editInfo(editSnakeDirection, displaySnakeDirection);
            var snakeCase = document.querySelector(".snake"); 
            switch (levelObject.snakeInitDirection) {
                case "Top":
                    snakeCase.setAttribute("class", "block snake headUp");
                    break;
                case "Right":
                    snakeCase.setAttribute("class", "block snake headRight");
                    break;
                case "Down":
                    snakeCase.setAttribute("class", "block snake headDown");
                    break;
                case "Left":
                     snakeCase.setAttribute("class", "block snake headLeft");
                    break;
                default:
            }
            }    
        });

        editNextLevelID.addEventListener("change", function() {
            levelObject.nextLevelID = editInfo(editNextLevelID, displayNextLevelID);
        });

        editPlaygroundSizeX.addEventListener("focusout", function() {
            if (editPlaygroundSizeX.value !== "") {
                var confirmChange = confirm("Are you sure you want to change the playground X size ?");
                if (confirmChange === true) {
                    levelObject.playgroundLimit[0] = editInfo(editPlaygroundSizeX, displayPlaygroundSizeX);
                    playgroundElem.innerHTML = "";
                    generateCase(levelObject.playgroundLimit[0], levelObject.playgroundLimit[1], playgroundElem);
                    generateLevelEditor(levelObjectIndex, playgroundElem.id);
                    addElem();
                }
            }
        });

        editPlaygroundSizeY.addEventListener("focusout", function() {
            if (editPlaygroundSizeY.value !== "") {
                var confirmChange = confirm("Are you sure you want to change the playground Y size ?");
                if (confirmChange === true) {
                    levelObject.playgroundLimit[1] = editInfo(editPlaygroundSizeY, displayPlaygroundSizeY);
                    playgroundElem.innerHTML = "";
                    generateCase(levelObject.playgroundLimit[0], levelObject.playgroundLimit[1], playgroundElem);
                    generateLevelEditor(levelObjectIndex, playgroundElem.id);
                    addElem();
                }
            }
        });

        editLeaderboard.addEventListener("click", function() {
            levelObject.haveLeaderboard = editInfo(editLeaderboard, displayLeaderboard);
        });

        editPlaygroundBgColor.addEventListener("change", function() {
            levelObject.playgroundBgColor = editInfo(editPlaygroundBgColor, displayPlaygroundBgColor);
            playgroundElem.style.backgroundColor = levelObject.playgroundBgColor;
            document.querySelector("#playgroundBgColor").value = levelObject.playgroundBgColor;
        });

    }

    function showEdition() {
        var showEditTitle = document.querySelector("#editTitle");
        var showEditPlaygroundSize = document.querySelector("#editSize");
        var showEditLimitScore = document.querySelector("#editLimitScore");
        var showEditScoreBonus = document.querySelector("#editScoreBeforeBonus");
        var showEditScoreWall = document.querySelector("#editScoreBeforeWall");
        var showEditSnakeSize = document.querySelector("#editSnakeSize");
        var showEditSnakeDirection = document.querySelector("#editSnakeDirection");
        var showEditNextLevelID = document.querySelector("#editNextLevelID");
        var showEditLeaderboard = document.querySelector("#editLeaderboard");
        var showEditFoodLifespan = document.querySelector("#editFoodLifespan");
        var showEditBonusLifespan = document.querySelector("#editBonusLifespan");
        var showEditTmpVoidLifespan = document.querySelector("#editTmpVoidLifespan");
        var showEditPlaygroundBgColor = document.querySelector("#editPlaygroundBgColor");

        showEditTitle.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editTitleLevel.classList.toggle("hide");
        });

        showEditPlaygroundSize.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editPlaygroundSizeXBlock.classList.toggle("hide");
            editPlaygroundSizeYBlock.classList.toggle("hide");
        });

        showEditLimitScore.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editLimitScoreBlock.classList.toggle("hide");
        });

        showEditScoreBonus.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editScoreBonusBlock.classList.toggle("hide");
        });

        showEditScoreWall.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editScoreWallBlock.classList.toggle("hide");
        });

        showEditSnakeSize.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editSnakeSizeBlock.classList.toggle("hide");
        });

        showEditSnakeDirection.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editSnakeDirection.classList.toggle("hide");
        });

        showEditNextLevelID.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editNextLevelID.classList.toggle("hide");
        });

        showEditLeaderboard.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editLeaderboardBlock.classList.toggle("hide");
        });

        showEditFoodLifespan.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editFoodLifespanBlock.classList.toggle("hide");
        });

        showEditBonusLifespan.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editBonusLifespanBlock.classList.toggle("hide");
        });

        showEditTmpVoidLifespan.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editTmpVoidLifespanBlock.classList.toggle("hide");
        });

        showEditPlaygroundBgColor.addEventListener("click", function() {
            this.classList.toggle("selectedElem");
            editPlaygroundBgColorBlock.classList.toggle("hide");
        });
    }

    function selectElem() {
        var eraseElem = document.querySelector("#removeElem");
        var startElem = document.querySelector("#startElem");
        var voidElem = document.querySelector("#voidElem");
        var tmpVoidElem = document.querySelector("#tmpVoidElem");

        function defineElem (elemButton, elemClass, elem) {
            playgroundElem.setAttribute("class", "snakeEditorMap");
            var selectElem = document.querySelector(".elemBlock.selectedElem");
            if (selectElem) {
                selectElem.classList.remove("selectedElem");
            }
            elemButton.classList.add("selectedElem");
            playgroundElem.classList.add(elemClass);
            elemType = elem;
        }

        eraseElem.addEventListener("click", function () {
            defineElem(this, "editErase", "erase");
        });

        startElem.addEventListener("click", function() {
            defineElem(this, "editStart", "start");
        });

        voidElem.addEventListener("click", function() {
            defineElem(this, "editVoid", "void");
        });

        tmpVoidElem.addEventListener("click", function() {
            defineElem(this, "editTmpvoid", "tmpVoid");
        });
    }

    function addElem() {
        var playgroundBlocks = document.querySelectorAll("#playground .block");

        playgroundBlocks.forEach(function(item, index) {
            item.addEventListener("click", function() {
                switch (elemType) {
                    case "erase":
                        item.setAttribute("class", "block");
                        break;
                    case "start":
                        var startPos = document.querySelector("#playground .block.snake");
                        if (startPos) {
                            startPos.setAttribute("class", "block");
                        }
                        switch (levelObject.snakeInitDirection) {
                            case "Top":
                                item.setAttribute("class", "block snake headUp");
                                break;
                            case "Right":
                                item.setAttribute("class", "block snake headRight");
                                break;
                            case "Down":
                                item.setAttribute("class", "block snake headDown");
                                break;
                            case "Left":
                                item.setAttribute("class", "block snake headLeft");
                                break;
                            default:
                        }
                        break;
                    case "void":
                        item.setAttribute("class", "block void");
                        break;
                    case "tmpVoid":
                        item.setAttribute("class", "block editortmpvoid");
                        break;
                    default:
                }
            });
        })
    }

    function generateLevelEditor(mapId, playground) {
        if (levelObject.snakeStartPos && levelObject.snakeStartPos[0] && levelObject.snakeStartPos[1]) {
            var snakeStartPosX = levelObject.snakeStartPos[0];
            var snakeStartPosY = levelObject.snakeStartPos[1];
            playgroundElem.style.backgroundColor = levelObject.playgroundBgColor;
            var snakeCase = document.querySelector("#" + playground + " .row:nth-child(" + snakeStartPosY + ") .block:nth-child(" + snakeStartPosX + ")");
            if (snakeCase) {
            snakeCase.classList.add("snake");
            switch (levelObject.snakeInitDirection) {
                            case "Top":
                                snakeCase.classList.add("headUp");
                                break;
                            case "Right":
                                snakeCase.classList.add("headRight");
                                break;
                            case "Down":
                                snakeCase.classList.add("headDown");
                                break;
                            case "Left":
                                snakeCase.classList.add("headLeft");
                                break;
                            default:
                        }
                }
        }
        if (levelObject.voidCases) {
        var voidPosX;
        var voidPosY;
        for (var k = 0; k < levelObject.voidCases.length; k++) {
            if (levelObject.voidCases[k][0] && levelObject.voidCases[k][1]) {
                voidPosX = levelObject.voidCases[k][0];
                voidPosY = levelObject.voidCases[k][1];
                var voidCase = document.querySelector("#" + playground + " .row:nth-child(" + voidPosY + ") .block:nth-child(" + voidPosX + ")");
                if (voidCase) {
                    voidCase.classList.add("void");
                }
            }   
        }
        }
        if (levelObject.tmpVoidCases) {
            var tmpvoidPosX;
            var tmpvoidPosY;
            for (var t = 0; t < levelObject.tmpVoidCases.length; t++) {
                if (levelObject.tmpVoidCases[t][0] && levelObject.tmpVoidCases[t][1]) {
                    tmpvoidPosX = levelObject.tmpVoidCases[t][0];
                    tmpvoidPosY = levelObject.tmpVoidCases[t][1];
                    var tmpvoidCase = document.querySelector("#" + playground + " .row:nth-child(" + tmpvoidPosY + ") .block:nth-child(" + tmpvoidPosX + ")");
                    if (tmpvoidCase) {
                        tmpvoidCase.classList.add("editortmpvoid");
                    }
                }
            }
        }
    }


    function initEditor() {
        var pageTitle = document.querySelector("#pageTitle");
        pageTitle.innerHTML = "Snake Editor"
        editorDirect.classList.add("show");
        newLevel();
        editorMenu();
        editSettings();
        showEdition();
        selectElem();
        addElem();
        levelList();
        quitEditor();
    }