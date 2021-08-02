document.addEventListener("DOMContentLoaded", () => {
  console.log("Document chargé!");
  const formulaire = document.querySelector("#formulaire");
  formulaire.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = {
      studentName: document.querySelector("studentName").value,
      convention: document.querySelector("convention").value,
      nomberHours: document.querySelector("nomberHours").value,
    };
    console.log(data);
    // const response = await axios.post("http://localhost:3004/", data);
    console.log(response);
    if (response.data.status !== 200) {
      alert("Le formulaire n'a pas pu être envoyé");
    }
  });
});
