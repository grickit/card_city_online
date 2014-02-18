function placeCard(args) {
  var game = dataManager.getGame(args.gameID)
  if (game.valid() !== true) errorManager.throw(undefined) // Does that game exist?
  if (game.haveUser(args.creatorID) !== true) errorManager.throw(undefined) // Does that game have that user?
  if (game.haveBoard(args.boardID) !== true) errorManager.throw(undefined) // Does that game have that board?
  if (board.creatorID !== args.creatorID) errorManager.throw(undefined) // Is that that user's board?
  if (game.currentUserID !== args.creatorID) errorManager.throw(undefined) // Is it that user's turn?
  if (errorManager.catch()) return false;

  var board = dataManager.getBoardGame(args.gameID,args.boardID)
  if(board.valid() !== true) errorManager.throw(undefined) // Does that board exist?
  if(board.haveSlot(args.x,args.y) !== true) errorManager.throw(undefined) // Does that board have that slot?
  if(board.checkSlot(args.x,args.y) !== false) errorManager.throw(undefined) // Is that slot empty?
  if(errorManager.catch()) return false;

  var hand = dataManager.getHandGame(args.gameID,args.creatorID)
  if(hand.valid() !== true) errorManager.throw(undefined) // Does that hand exist?
  if(hand.haveCard(args.cardID) !== true) errorManager.throw(undefined) // Does that hand have that card?
  if(errorManager.catch()) return false;


  hand.removeCard(args.cardID)
  board.placeCard(args.cardID,args.x,args.y)

  return true;
}