function card(args) {
  var self = this;


  // ----- Properties
  self.id = property(args.id,0);
  self.name = property(args.name,"Foobar");
  self.image = property(args.image,"404.png");
  self.rules = property(args.rules,"");
  self.flavor = property(args.flavor,"");

  self.icons = property(args.icons,[0]);
  self.connections = property(args.connections,[false,false,false,false,false,false,false,false]);

  self.can_be_moved = property(args.can_be_moved,{owner: true, opponent: true});
  self.can_be_disabled = property(args.can_be_disabled,{owner: true, opponent: true});
  self.can_be_revived = property(args.can_be_revived,{owner: true, opponent: true});
  self.can_be_removed = property(args.can_be_removed,{owner: true, opponent: true});
  self.can_be_rotated = property(args.can_be_rotated,{owner: true, opponent: true});
  self.can_be_targeted = property(args.can_be_targeted,{owner: true, opponent: true});


  // ----- Methods
  self.on_any_combo = property(args.on_any_combo,null);
  self.on_attack_combo = property(args.on_attack_combo,null);
  self.on_defend_combo = property(args.on_defend_combo,null);
  self.on_revive_combo = property(args.on_revive_combo,null);

  self.on_moved = property(args.on_moved,null);
  self.on_placed = property(args.on_revive_combo,null);
  self.on_disabled = property(args.on_disabled,null);
  self.on_revived = property(args.on_revived,null);
  self.on_removed = property(args.on_removed,null);
  self.on_rotated = property(args.on_rotated,null);
  self.on_connected = property(args.on_connected,null);

  self.on_turn_start = property(args.on_turn_start,null);
  self.on_turn_end = property(args.on_turn_end,null);


  // ----- Initialize
}