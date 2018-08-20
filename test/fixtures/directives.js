//! Changing this alters the targets of all tests
var indesign = ['indesign-13'];
var photoshop = ['photoshop-19'];

module.exports = {
  indesign  : indesign,
  photoshop : photoshop,
  all       : [].concat(indesign, photoshop)
};
