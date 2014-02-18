function player_game(args) {
  var self = this;
  player.call(this,args);


  // ----- Properties
  self.deck = property(args.deck,[]);
  self.deck_count = self.deck.length;

  self.graveyard = property(args.graveyard,[]);
  self.graveyard_count = self.graveyard.length;

  self.hand = property(args.hand,[]);
  self.hand_count = self.hand.count;

  self.life = property(args.life,7);

  self.empty_turns = property(args.empty_turns,0);


  // ----- Methods

  self.turn_start = function() {}

  self.turn_end = function() {}

  self.discard = function() {}

  self.damage = function() {}

  self.defend = function() {}


  // ----- Initialize
}