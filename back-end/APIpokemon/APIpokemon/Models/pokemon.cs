﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIpokemon
{
    public class Pokemon
    {
        public int count { get; set; }
        public string next { get; set; }
        public string previous { get; set; }
        
        public List<PokemonResults> results { get; set; }

    }
}
