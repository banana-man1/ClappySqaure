const http = require("http");
const url = require('url');
const PORT = 3000;

const server = http.createServer((req, res) => {
	const queryObject = url.parse(req.url,true).query;
	console.log(queryObject.license)
	if (req.url === "/trial") {
		res.write("valid");
		res.end();
	} else if (req.url === "/" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else if (req.url === "/about" && req.method === "GET") {
		res.write("This is about page.");
		res.end();
	} else {
		res.write("Error. Not Found");
		res.end();
	}
});

server.listen(PORT);
console.log(`Server is running on PORT: ${PORT}`);