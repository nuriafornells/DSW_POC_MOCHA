const { expect } = require('chai');
const Biblioteca = require('../biblioteca');

describe('pruebo funciones Biblioteca', function () {
  let miBiblioteca;

  beforeEach(function () {
    miBiblioteca = new Biblioteca();
  });

  it('debería agregar un libro nuevo', function () {
    const libro = miBiblioteca.agregarLibro('El Principito');
    expect(libro.titulo).to.equal('El Principito');
    expect(libro.prestado).to.be.false;
  });

  it('debería marcar un libro como prestado', function () {
    miBiblioteca.agregarLibro('Harry Potter');
    const prestado = miBiblioteca.prestarLibro(0);
    expect(prestado.prestado).to.be.true;
  });

  it('debería devolver un libro prestado', function () {
    miBiblioteca.agregarLibro('Cien años de soledad');
    miBiblioteca.prestarLibro(0);
    const devuelto = miBiblioteca.devolverLibro(0);
    expect(devuelto.prestado).to.be.false;
  });

  it('debería listar todos los libros', function () {
    miBiblioteca.agregarLibro('Libro 1');
    miBiblioteca.agregarLibro('Libro 2');
    const lista = miBiblioteca.listarLibros();
    expect(lista).to.have.lengthOf(2);
  });
});
