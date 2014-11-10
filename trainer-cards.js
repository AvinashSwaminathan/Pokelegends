/**
 * Trainer Cards
 *
 * This is where the trainer cards commands
 * are located.
 *
 */

var trainerCards = {

	beforemath: 'judgmental',
	judge: 'judgmental',
	elitefourjudge: 'judgmental',
	judgmental: function (target, room, user) {
	    if (!this.canBroadcast()) return;
	    this.sendReplyBox('<center><img src="http://i.imgur.com/uPqFgYD.png"><br><font color="blue"><blink>Ace: Lapras</blink><br><font color="green">Stay Tuned!');
	},
};

Object.merge(CommandParser.commands, trainerCards);
exports.trainerCards = trainerCards;
