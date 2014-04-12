function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

Tile.prototype.getActualValue = function () 
{
    switch (this.value)
    {
    case 2:
            return "A";
            
    case 4:
            return "B";
            
    case 8:
            return "C";
            
    case 16:
            return "D";
            
    case 32:
            return "E";
            
    case 64:
            return "F";
            
    case 128:
            return "G";
            
    case 256:
            return "H";
            
    case 512:
            return "*I*";
            
    case 1024:
            return "J";
    }
}