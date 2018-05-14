//! Changing this alters the targets of all tests
var indesign = ['indesign-12'];
var photoshop = ['photoshop-18'];

module.exports = {
  indesign  : indesign,
  photoshop : photoshop,
  all       : [].concat(indesign, photoshop)
};
