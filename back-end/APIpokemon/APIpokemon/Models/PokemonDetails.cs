using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIpokemon.Models
{
    public class PokemonDetails
    {
        public int id { get; set; }
        public string name { get; set; }
        public int height { get; set; }
        public int weight { get; set; }
        public List<string> abilities { get; set; }
        public List<string> moves { get; set; }           
    }
}
