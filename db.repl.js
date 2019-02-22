#!/usr/bin/env node
const repl = require("repl"),
	  cli  = repl.start("db.repl> ");
console.log("db.repl>", "db", "\n", require("./db.lib"));
cli.context.db = require("./db.lib");
