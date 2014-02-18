function card_board(args) {
  var self = this;
  card.call(this,args);


  // ----- Properties
  self.disabled = property(args.disabled,false);
  self.rotated = property(args.rotated,false);

  self.connections_active = property(args.connections_active,false);


  // ----- Methods

  self.move = function() {}

  self.rotate = function() {}

  self.remove = function() {}

  self.disable = function() {}

  self.revive = function() {}

  self.connect = function() {}


  // ----- Initialize
}