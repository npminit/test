const line = require('line.js');
 
var client = new line.Client({
 channelAccessToken: "CfQu/9kGk3MRzCzLgGxA6MFz9Plf52VAmFd21BkZ1C57XyvQjIWo+5BFG/n/MRYarSej33xauE4M9rvvXSUPQdyeb3/WLKcSL+27yGoadoXxM0pLJju1Sq8HiZeyG+6rqhkmYSXB4hcm7W8p4BiUsgdB04t89/1O/w1cDnyilFU=",
    channelSecret: "91f3061dc7b409aa4e4cae28aa2a8187",
    port: "9090"
})

 var list = "Things to do list:\n\n"
client.on("message", function(msg) {
	var args = msg.content.slice(0).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
  let userArgs = args.map((arg, index) => {
    if (index != 0) return arg
  });
  let user = userArgs.join(" ");
  if (command == "ping") {
    msg.reply("Pong");
  }
    if (command == "add") {
		list = list + user;
	}

  if (command == "list") {
    msg.reply(list);
  }
 
  if (msg.content == "leave") {
    if (msg.group) {
      msg.group.leave();
    }
  }
 
})