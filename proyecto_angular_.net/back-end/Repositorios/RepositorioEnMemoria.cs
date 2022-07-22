﻿using back_end.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Repositorios
{
    public class RepositorioEnMemoria : IRepositorio
    {
        private List<Genero> _generos;

        public RepositorioEnMemoria()
        {
            _generos = new List<Genero>()
            {
                new Genero(){id = 1, Nombre = "comedia"},
                new Genero(){id = 2, Nombre = "Accion"},
            };
        }

        public List<Genero> obtenerTodosLosGeneros()
        {
            return _generos;
        }

        public  async Task<Genero> ObtenerPorId(int id)
        {
            await Task.Delay(1);

            return _generos.FirstOrDefault(x => x.id == id);
        }
    }
}
