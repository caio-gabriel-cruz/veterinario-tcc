export const validaNome = (nome) => {
  if (/\d/.test(nome)) {
    console.log("Campo contém caracteres inválidos");
    return null;
  }

  if (nome.length < 3) {
    console.log("Campo vazio");
    return null;
  }

  return nome;
};
