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
    
    random = randomInt(0, 4);	//0=rock, 1=paper, 2=scissors, 3=lizard, 4=spock.

    if (req.url === "/play/rock"){
    	if (random === 0){
    		result.outcome = "tie";
    		result.ties++;
    		res.end(JSON.stringify(result));
    	}else if (random === 1 || random === 4){
    		result.outcome = "lose";
    		result.losses++;
    		res.end(JSON.stringify(result));
    	}else if (random === 2 || random === 3){
    		result.outcome = "win";
    		result.wins++;
    		res.end(JSON.stringify(result));
    	}

    }else if (req.url === "/play/paper"){
    	if (random === 1){
    		result.outcome = "tie";
    		result.ties++;
    		res.end(JSON.stringify(result));
    	}else if (random === 2 || random === 3){
    		result.outcome = "lose";
    		result.losses++;
    		res.end(JSON.stringify(result));
    	}else if (random === 0 || random === 4){
    		result.outcome = "win";
    		result.wins++;
    		res.end(JSON.stringify(result));
    	}

    }else if (req.url === "/play/scissors"){
    	if (random === 2){
    		result.outcome = "tie";
    		result.ties++;
    		res.end(JSON.stringify(result));
    	}else if (random === 0 || random === 4){
    		result.outcome = "lose";
    		result.losses++;
    		res.end(JSON.stringify(result));
    	}else if (random === 1 || random === 3){
    		result.outcome = "win";
    		result.wins++;
    		res.end(JSON.stringify(result));
    	}

    }else if (req.url === "/play/lizard"){
    	if (random === 3){
    		result.outcome = "tie";
    		result.ties++;
    		res.end(JSON.stringify(result));
    	}else if (random === 0 || random === 2){
    		result.outcome = "lose";
    		result.losses++;
    		res.end(JSON.stringify(result));
    	}else if (random === 1 || random === 4){
    		result.outcome = "win";
    		result.wins++;
    		res.end(JSON.stringify(result));
    	}

    }else if (req.url === "/play/spock"){
    	if (random === 4){
    		result.outcome = "tie";
    		result.ties++;
    		res.end(JSON.stringify(result));
    	}else if (random === 1 || random === 3){
    		result.outcome = "lose";
    		result.losses++;
    		res.end(JSON.stringify(result));
    	}else if (random === 0 || random === 2){
    		result.outcome = "win";
    		result.wins++;
    		res.end(JSON.stringify(result));
    	}

    }

});

server.listen(3000);

console.log("Server running on port 3000");
