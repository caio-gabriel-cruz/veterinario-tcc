const addProfilePet = document.querySelector(".add-pet");
const petProfileList = document.querySelectorAll(".appointment");
const modalAddProfilePet = document.querySelector(".modal-add-pet-profile");
const modalAddProfilePetClose = document.querySelector(
  ".modal-add-pet-profile .close"
);

addProfilePet.addEventListener("click", () => {
  modalAddProfilePet.style.display = "block";
});

modalAddProfilePetClose.addEventListener("click", () => {
  modalAddProfilePet.style.display = "none";
});

petProfileList.forEach((petProfile) => {
  petProfile.addEventListener("click", () => {
    // Criar elementos
    const modalAgenda = document.createElement("div");
    const profilePetModal = document.createElement("div");
    const img = document.createElement("img");
    const petInfoModal = document.createElement("div");
    const h2Tobias = document.createElement("h2");
    const h2Guilherme = document.createElement("h2");
    const pInfo = document.createElement("p");
    const spanIdade = document.createElement("span");
    const spanGenero = document.createElement("span");
    const spanPeso = document.createElement("span");
    const h2Labrador = document.createElement("h2");
    const pConsulta = document.createElement("p");
    const pData = document.createElement("p");
    const buttonsDiv = document.createElement("div");
    const buttonPerfil = document.createElement("button");
    const buttonConfirmado = document.createElement("button");

    // Adicionar classes
    modalAgenda.classList.add("modal-agenda");
    profilePetModal.classList.add("profile-pet-modal");
    petInfoModal.classList.add("pet-info-modal");
    buttonsDiv.classList.add("buttons");
    buttonConfirmado.classList.add("confirm");

    // Adicionar conteúdo
    img.src = "../../assets/images/dog.png";
    img.alt = "";
    h2Tobias.textContent = "Tobias";
    h2Guilherme.textContent = "Guilherme Oliveira Alves";
    spanIdade.textContent = "Idade";
    spanGenero.textContent = "Genero";
    spanPeso.textContent = "Peso";
    h2Labrador.textContent = "Labrador";
    pConsulta.textContent = "Consulta de rotina - Dr. Caio Cruz";
    pData.textContent = "Dia 21/08/2025 - 10:30 - 11:00";
    buttonPerfil.textContent = "Perfil do Pet";
    buttonConfirmado.textContent = "Confirmado";

    // Montar a estrutura
    pInfo.appendChild(spanIdade);
    pInfo.appendChild(document.createTextNode(" - "));
    pInfo.appendChild(spanGenero);
    pInfo.appendChild(document.createTextNode(" - "));
    pInfo.appendChild(spanPeso);

    petInfoModal.appendChild(h2Tobias);
    petInfoModal.appendChild(h2Guilherme);
    petInfoModal.appendChild(pInfo);

    profilePetModal.appendChild(img);
    profilePetModal.appendChild(petInfoModal);
    profilePetModal.appendChild(h2Labrador);

    buttonsDiv.appendChild(buttonPerfil);
    buttonsDiv.appendChild(buttonConfirmado);

    modalAgenda.appendChild(profilePetModal);
    modalAgenda.appendChild(pConsulta);
    modalAgenda.appendChild(pData);
    modalAgenda.appendChild(buttonsDiv);

    // Adicionar ao body ou a outro elemento desejado
    document.body.appendChild(modalAgenda);

    const confirmPetProfileButton = document.querySelector(".confirm");
    confirmPetProfileButton.addEventListener("click", () => {
      modalAgenda.remove();
    });
  });
});
