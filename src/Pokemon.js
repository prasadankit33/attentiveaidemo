class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.type = data.types[0].type.name;
    this.height = data.height;    
    this.weight = data.weight;    
    this.stat = data.stats[0].max_change;
    this.move = data.moves[0].name;
  }
}

export default Pokemon;