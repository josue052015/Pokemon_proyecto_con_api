using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using APIpokemon.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace APIpokemon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class pokemonController : Controller
    {
        HttpClientHandler _clientHandler = new HttpClientHandler();     
        public pokemonController()
        {
            _clientHandler.ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => { return true; };
        }

        [HttpGet]
        public async Task<List<PokemonResults>> Index()
        {
            Pokemon _pokemons = new Pokemon();

            using (var httpClient = new HttpClient(_clientHandler))
            {
              using(var response = httpClient.GetAsync("https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1118").Result)
                {
                    if(response.IsSuccessStatusCode)
                    {
                        var customerJsonString = await response.Content.ReadAsStringAsync();
                        _pokemons = JsonConvert.DeserializeObject<Pokemon>(customerJsonString);                     
                    }                   
                   
                }
            }
            return _pokemons.results.ToList();
        }

        [HttpGet("{name}")]
        public async Task<PokemonDetails> getPokemonByURL(string name)
        {
            dynamic _pokemons;
            List<dynamic> pokemonResults = new List<dynamic>();

            using (var httpClient = new HttpClient(_clientHandler))
            {
                using (var response = httpClient.GetAsync("https://pokeapi.co/api/v2/pokemon/" + name).Result)
                {
                    if (response.IsSuccessStatusCode)
                    {
                    }
                        var customerJsonString = await response.Content.ReadAsStringAsync();
                        _pokemons = JsonConvert.DeserializeObject<dynamic>(customerJsonString);

                }
            }

            //get abilities
            string[] abilitiesNames = new string[_pokemons.abilities.Count];

            for(var i=0; i < _pokemons.abilities.Count; i++)
            {
                abilitiesNames[i] = _pokemons.abilities[i].ability.name;                
            }

            //get moves
            string[] movesNames = new string[_pokemons.moves.Count];

            for (var i = 0; i < _pokemons.moves.Count; i++)
            {
                movesNames[i] = _pokemons.moves[i].move.name;
            }

            //add all details to the new Object PokemonDetails
            PokemonDetails pokemonApiResult = new PokemonDetails {
                   id= _pokemons.id,
                   name = _pokemons.name,
                   weight = _pokemons.weight,
                   height = _pokemons.height,
                   abilities = abilitiesNames.ToList(),
                   moves = movesNames.ToList()
            };

            return pokemonApiResult;
        }
    }
}