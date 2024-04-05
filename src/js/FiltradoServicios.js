document.addEventListener('DOMContentLoaded', function() {
    var contenedorFiltros = document.getElementById('FiltradoCards');
    var filtros = contenedorFiltros.querySelectorAll('#portfolio-flters li');
    var tarjetas = contenedorFiltros.querySelectorAll('.card');

    filtros.forEach(function(filtro) {
      filtro.addEventListener('click', function() {
        var valorFiltro = this.getAttribute('data-filter');
        var tarjetasFiltradas;

        if (valorFiltro === '*') {
          tarjetasFiltradas = tarjetas; // Mostrar todas las tarjetas si el filtro es '*'
        } else {
          tarjetasFiltradas = contenedorFiltros.querySelectorAll('.card' + valorFiltro);
        }

        tarjetas.forEach(function(tarjeta) {
          tarjeta.style.display = 'none'; // Ocultar todas las tarjetas
        });

        tarjetasFiltradas.forEach(function(tarjetaFiltrada) {
          tarjetaFiltrada.style.display = 'block'; // Mostrar solo las tarjetas filtradas
        });

        // Cambiar clase activa
        filtros.forEach(function(f) {
          f.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });

  