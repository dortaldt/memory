// Writing...
var fs = require("fs");
var myJson = {
    name: "userName",
    score: "currentScore"

};
function saveScore(){
	fs.writeFile( "testJson.json", JSON.stringify( myJson ), "utf8" );
};
// And then, to read it...
// myJson = require("../../testJson.json");