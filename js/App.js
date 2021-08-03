import "../assets/css/reset.css";

function App() {
  const [Form, setForm] = useState("");

  return (
    <Router>
      <Swich>
        <Route path="/">
          <Form forms={forms} setForm={setform} />
        </Route>
      </Swich>
    </Router>
  );
}

export default App;

// J'ai commencé par un simple formulaire en HTML avant de réaliser que je devais avoir une approche react je n'ai malheureusement pas eu le temps de finir
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Document chargé!");
//   const formulaire = document.querySelector("#formulaire");

//   // Fonction pour vider les champs du formulaire :
//   const cleanForm = () => {
//     form.reset();
//   };

//   // Fonction pour réactiver le bouton d'envoi du formulaire :
//   const isEnabled = () => {
//     submitButton.removeAttribute("disabled");
//     submitButton.classList.remove("disabled-btn");
//   };

//   // Fonction pour désactiver le bouton d'envoi du formulaire :
//   const isDisabled = () => {
//     submitButton.setAttribute("disabled", "disabled");
//     submitButton.classList.add("disabled-btn");
//   };

//   formulaire.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     isDisabled();

//     const data = {
//       firstName: document.querySelector("#firstName").value,
//       lastName: document.querySelector("#lastName").value,
//       convention: document.querySelector("#convention").value,
//       nbHours: document.querySelector("#nbHours").value,
//     };

//     try {
//       const response = await axios.post("http://localhost:3004", data);
//       if (response.status === 200) {
//         alert("Votre formulaire a bien été envoyé");
//         cleanForm();
//         isEnabled();
//       }
//     } catch (error) {}

//     console.log(response);
//     if (response.data.status !== 200) {
//       alert("Le formulaire n'a pas pu être envoyé");
//     }
//   });
// });
