class Biblioteca {
  constructor() {
    this.libros = [];
  }

  agregarLibro(titulo) {
    if (!titulo || typeof titulo !== 'string') {
      throw new Error('El título debe ser un texto válido');
    }
    const libro = { titulo, prestado: false };
    this.libros.push(libro);
    return libro;
  }

  prestarLibro(indice) {
    if (indice < 0 || indice >= this.libros.length) {
      throw new Error('Índice inválido');
    }
    if (this.libros[indice].prestado) {
      throw new Error('Ese libro ya está prestado');
    }
    this.libros[indice].prestado = true;
    return this.libros[indice];
  }

  devolverLibro(indice) {
    if (indice < 0 || indice >= this.libros.length) {
      throw new Error('Índice inválido');
    }
    if (!this.libros[indice].prestado) {
      throw new Error('Ese libro no estaba prestado');
    }
    this.libros[indice].prestado = false;
    return this.libros[indice];
  }

  listarLibros() {
    return this.libros;
  }
}

module.exports = Biblioteca;
