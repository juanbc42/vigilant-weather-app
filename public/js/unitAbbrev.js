var unitAbbrev = function(unit) {
    let abbrev;
    if (unit === 'metric'){
      abbrev='C';
    }else if('imperial'){
      abbrev='F';
    }
    return abbrev;
};

module.exports = unitAbbrev;
