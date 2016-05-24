exports.commands =  {
               flamecmd: 'serverhelp',
    sfshelp: 'serverhelp',
    serverhelp: function(target, room, user, connection) {
        if (!this.canBroadcast()) return;
        if (user.isStaff) {
            connection.sendTo(room.id, '|raw|<div class="infobox">\
            <center><b><u>List of <i>staff</i> commands:</u></b></center><br>\
            <b>/clearall</b> - Clear all messages in the room.<br>\
            <b>/endpoll</b> - End the poll in the room.<br>\
            <b>/givemoney</b> <i>name</i>, <i>amount</i> - Give a user a certain amount of money.<br>\
            <b>/givepack</b> <i>user</i>, <i>pack</i> - Give a user a pack.<br>\
            <b>/hide</b> - Hide your staff symbol.<br>\
            <b>/pmall</b> <i>message</i> - Private message all users in the server.<br>\
            <b>/pmstaff</b> <i>message</i> - Private message all staff.<br>\
            <b>/poll</b> <i>question</i>, <i>option 1</i>, <i>option 2</i>... - Create a poll where users can vote on an option.<br>\
            <b>/resetmoney</b> <i>name</i> - Reset the user\'s money to 0.<br>\
            <b>/rmall</b> <i>message</i> - Private message all users in the room.<br>\
            <b>/show</b> - Show your staff symbol.<br>\
            <b>/strawpoll</b> <i>question</i>, <i>option 1</i>, <i>option 2</i>... - Create a strawpoll, declares the link to all rooms and pm all users in the server.<br>\
            <b>/toggleemoticons</b> - Toggle emoticons on or off.<br>\
            <b>/takemoney</b> <i>user</i>, <i>amount</i> - Take a certain amount of money from a user.<br>\
            <b>/trainercard</b> <i>help</i> - Makes adding trainer cards EZ.<br>\
                </div>');
        }
        if (!target || target === '1') {
            return this.sendReplyBox('\
            <center><b><u>List of commands (1/3):</u></b></center><br>\
            <b>/away</b> - Set yourself away.<br>\
            <b>/back</b> - Set yourself back from away.<br>\
            <b>/buy</b> <i>command</i> - Buys an item from the shop.<br>\
            <b>/customsymbol</b> <i>symbol</i> - Get a custom symbol.<br>\
            <b>/define</b> <i>word</i> - Shows the definition of a word.<br>\
            <b>/emotes</b> - Get a list of emoticons.<br>\
            <b>/hangman</b> help - Help on hangman specific commands.<br><br>\
            Use /cmds <i>number</i> to see more commands.\
            ');
        }
        if (target === '2') {
            return this.sendReplyBox('\
            <center><b><u>List of commands (2/3):</u></b></center><br>\
            <b>/poof</b> - Disconnects the user and leaves a message in the room.<br>\
            <b>/profile</b> - Shows information regarding user\'s name, day they were registered, and group.<br>\
            <b>/regdate</b> <i>user</i> - Gets registration date of the user.<br>\
            <b>/resetsymbol</b> - Reset custom symbol if you have one.<br>\
            <b>/richestusers</b> - Show the richest users.<br><br>\
            Use /cmds <i>number</i> to see more commands.\
            ');
        }
        if (target === '3') {
            return this.sendReplyBox('\
            <center><b><u>List of commands (3/3):</u></b></center><br>\
            <b>/seen</b> <i>username</i> - Shows when the user last connected on the server.<br>\
            <b>/shop</b> - Displays the server\'s main shop.<br>\
            <b>/stafflist</b> - Shows the staff.<br>\
            <b>/tell</b> <i>username</i>, <i>message</i> - Send a message to an offline user that will be received when they log in.<br>\
            <b>/transfer</b> <i>user</i>, <i>amount</i> - Transfer a certain amount of money to a user.<br>\
            <b>/urbandefine</b> <i>word</i> - Shows the urban definition of the word.<br>\
            <b>/wallet</b> <i>user</i> - Displays how much money a user has. Parameter is optional.<br><br>\
            Use /cmds <i>number</i> to see more commands.\
            ');
        }
    
	},
