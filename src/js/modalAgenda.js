//tem que usar por caus do LS
document.addEventListener("DOMContentLoaded", function () {
  const addProfilePet = document.querySelector(".add-pet");
  const modalAddProfilePet = document.querySelector(".modal-add-pet-profile");
  const modalAddProfilePetClose = document.querySelector(
    ".modal-add-pet-profile .close"
  );
  const formAddPet = modalAddProfilePet.querySelector("form");

  // Exibe o modal ao clicar no botão de adicionar pet
  addProfilePet.addEventListener("click", () => {
    modalAddProfilePet.style.display = "block";
  });

  // Fecha o modal quando clica no "X"
  modalAddProfilePetClose.addEventListener("click", () => {
    modalAddProfilePet.style.display = "none";
  });

  // FFuncao carrega os dados dos cards
  function carregaDados() {
    const appointmentsList = document.querySelector(".appointments-list");
    if (!appointmentsList) return; // Verifica se o elemento existe
    appointmentsList.innerHTML = ""; // Limpa a lista

    // Recupera os cards
    const pets = JSON.parse(localStorage.getItem("pets")) || [];

    //cria os cards
    pets.forEach((pet) => {
      const appointmentCard = document.createElement("div");
      appointmentCard.classList.add("appointment");

      const petInfoDiv = document.createElement("div");
      petInfoDiv.classList.add("pet-info");

      const appointmentImg = document.createElement("img");
      appointmentImg.alt = "";
      // Se a espécie for "gato" (independentemente de maiúsculas/minúsculas), usa a imagem do gato
      appointmentImg.src =
        pet.especie === "gato"
          ? "../../assets/images/cat.png"
          : "../../assets/images/dog.png";

      const h2Appointment = document.createElement("h2");
      h2Appointment.textContent = `${pet.petNome} (${pet.petRaca})`;

      const pTutorAppointment = document.createElement("p");
      pTutorAppointment.textContent = `Tutor: ${pet.tutorNome}`;

      petInfoDiv.appendChild(appointmentImg);
      petInfoDiv.appendChild(h2Appointment);
      petInfoDiv.appendChild(pTutorAppointment);

      appointmentCard.appendChild(petInfoDiv);

      const buttonsDiv = document.createElement("div");
      buttonsDiv.classList.add("buttons");

      const buttonConfirmado = document.createElement("button");
      buttonConfirmado.textContent = "Confirmado";

      const buttonServico = document.createElement("button");
      buttonServico.textContent = pet.tipoConsulta;

      buttonsDiv.appendChild(buttonConfirmado);
      buttonsDiv.appendChild(buttonServico);

      appointmentCard.appendChild(buttonsDiv);

      const dateInfoDiv = document.createElement("div");
      dateInfoDiv.classList.add("date-info");

      const divData = document.createElement("div");
      const spanDataLabel = document.createElement("span");
      spanDataLabel.textContent = "Data:";
      const spanData = document.createElement("span");
      spanData.textContent = pet.dataConsulta;
      divData.appendChild(spanDataLabel);
      divData.appendChild(spanData);

      const divDoutor = document.createElement("div");
      const spanDoutorLabel = document.createElement("span");
      spanDoutorLabel.textContent = "Doutor(a):";
      const spanDoutor = document.createElement("span");
      spanDoutor.textContent = pet.doutor;
      divDoutor.appendChild(spanDoutorLabel);
      divDoutor.appendChild(spanDoutor);

      dateInfoDiv.appendChild(divData);
      dateInfoDiv.appendChild(divDoutor);

      appointmentCard.appendChild(dateInfoDiv);

      appointmentsList.appendChild(appointmentCard);
    });
  }

  // Função para salvar os dados no LS
  function salvaDados(pet) {
    let pets = JSON.parse(localStorage.getItem("pets")) || [];
    pets.push(pet);
    localStorage.setItem("pets", JSON.stringify(pets));
  }

  // butao sumbmit
  formAddPet.addEventListener("submit", function (e) {
    e.preventDefault();

    // dados input
    const especie = document.getElementById("especie").value;
    const tutorNome = document.getElementById("tutorNome").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const petNome = document.getElementById("petNome").value;
    const petAnoNascimento = document.getElementById("petAnoNascimento").value;
    const petRaca = document.getElementById("petRaca").value;
    const petAlergias = document.getElementById("petAlergias").value;
    const petVacinas = document.getElementById("petVacinas").value;
    const tipoConsulta = document.getElementById("tipoConsulta").value;
    const dataConsulta = document.getElementById("dataConsulta").value;
    const doutor = document.getElementById("doutor").value;

    // Salva os dados no LS
    salvaDados({
      especie,
      tutorNome,
      cpf,
      telefone,
      endereco,
      petNome,
      petAnoNascimento,
      petRaca,
      petAlergias,
      petVacinas,
      tipoConsulta,
      dataConsulta,
      doutor,
    });

    // carrega/atualiza os dados(eu acho)
    carregaDados();

    // fecha eu acho
    formAddPet.reset();
    modalAddProfilePet.style.display = "none";
  });

  // carrega apos carregar a pagina
  carregaDados();
});
