var http = require("http"),
	result = {outcome:"NULL", wins: 0, losses: 0, ties: 0}, // Initialize object to be returned
    random,
    server;

// Code for this function found on blog.tompawlak.org/how-to-generate-random-values-nodejs-javascript
function randomInt(low, high){
	return Math.floor(Math.random() * (high - low + 1) + low);
}

server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "application/json"});
    
	// Generate computer's choice
    random = randomInt(0, 4);	//0=rock, 1=paper, 2=scissors, 3=lizard, 4=spock.
		
		//if user plays rock
    if (req.url === "/play/rock"){
    	if (random === 0){							//computer picks rock
    		result.outcome = "tie";
    		result.ties++;
    		res.end(JSON.stringify(result));
    	}else if (random === 1 || random === 4){	//computer picks paper or spock
    		result.outcome = "lose";
    		result.losses++;
    		res.end(JSON.stringify(result));
    	}else if (random === 2 || random === 3){	//computer picks scissors or lizard
    		result.outcome = "win";
    		result.wins++;
    		res.end(JSON.stringify(result));
    	}
		//if user plays paper
    }else if (req.url === "/play/paper"){
    	if (random === 1){							//computer picks paper
    		result.outcome = "tie";
    		result.ties++;
    		res.end(JSON.stringify(result));
    	}else if (random === 2 || random === 3){	//computer picks scissors or lizard
    		result.outcome = "lose";
    		result.losses++;
    		res.end(JSON.stringify(result));
    	}else if (random === 0 || random === 4){	//computer picks rock or spock
    		result.outcome = "win";
    		result.wins++;
    		res.end(JSON.stringify(result));
    	}
		// If user plays scissors
    }else if (req.url === "/play/scissors"){
    	if (random === 2){							//computer picks scissors
    		result.outcome = "tie";
    		result.ties++;
    		res.end(JSON.stringify(result));
    	}else if (random === 0 || random === 4){	//computer picks rock or spock
    		result.outcome = "lose";
    		result.losses++;
    		res.end(JSON.stringify(result));
    	}else if (random === 1 || random === 3){	//computer picks paper or lizard
    		result.outcome = "win";
    		result.wins++;
    		res.end(JSON.stringify(result));
    	}
		// If user plays lizard
    }else if (req.url === "/play/lizard"){
    	if (random === 3){							//computer picks lizard
    		result.outcome = "tie";
    		result.ties++;
    		res.end(JSON.stringify(result));
    	}else if (random === 0 || random === 2){	//computer picks rock or scissors
    		result.outcome = "lose";
    		result.losses++;
    		res.end(JSON.stringify(result));
    	}else if (random === 1 || random === 4){	//computer picks paper or spock
    		result.outcome = "win";
    		result.wins++;
    		res.end(JSON.stringify(result));
    	}
		// If user plays spock
    }else if (req.url === "/play/spock"){
    	if (random === 4){							//computer picks spock
    		result.outcome = "tie";
    		result.ties++;
    		res.end(JSON.stringify(result));
    	}else if (random === 1 || random === 3){	//computer picks paper or lizard
    		result.outcome = "lose";
    		result.losses++;
    		res.end(JSON.stringify(result));
    	}else if (random === 0 || random === 2){	//computer picks rock or scissors
    		result.outcome = "win";
    		result.wins++;
    		res.end(JSON.stringify(result));
    	}

    }

});

server.listen(3000);

console.log("Server running on port 3000");
