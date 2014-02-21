function ErrorManager(args) {
  var self = this;


  // ----- Properties
  self.errorsOccurred = []



  // ----- Methods
  self.throw = function(code) {
    self.errorsOccurred.push(code)
    return true;
  }

  self.catch = function() {
    return (self.errorsOccurred.length !== 0);
  }

  self.find = function(code) {
    return (self.errorsOccurred.indexOf(code) !== -1);
  }



  // ----- Initialize

}