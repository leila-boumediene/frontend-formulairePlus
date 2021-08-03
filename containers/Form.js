import { useState, useEffecet, useEffect } from "react";
// import { useLocation, useHistory } from "react-router";
import axios from "axios"

const Form = ({form, setForm}) => {
const [studentName, setStudentName] = useState("");
const [studentConv, setStudentConv] = useState();
const [isLoading, setIsLoading] = useState(true);

const handleSelectName =(e) => {
    if(idStudent){
        const student = async () =>{
            try{
                // note : A VERIFIER mais je dois il me semble crer une route get pour afficher les noms des étudiants la route post marche sur postman a faire aussi pour convention
    // const response = await axios.post ('http://localhost:3004/student/create');
    const response = await axios.get('http://localhost:3004/student/idStudent')
    
    if(response.data){
        setForm(response.data);
        
    }
            }catch (error){
    console.log(error)
            }
        }
    }
    handleSelectName(); 
}

const hanfleView = (e) =>{
    if(idConvention){
        const convention = async () =>{
            try{
const responseData = await axios.get('http://localhost:3004/student/idConvention')

if(responseData.data){
    setForm(responseData.data)
}
            }catch(error){
console.log(error)
            }
        }
    }
    hanfleView();
}

const handleText = (e) =>{
    if(idStudent && idConvention){
        const certificate = async () =>{
            try{
const data = await axios.get('http://localhost:3004/attestation')

if(data.data){
    setForm(data.data)
}
            }catch(error){
console.log(error)
            }
        }
    }
    handleText(),
};

return(
    <div className="formulaire">
        <select className="NomEtudiant"  name="student"
          id="idStudent"
          placeholder="Etudiant"
          value="idStudent">
            {data.lastName, data.firstName} 
        </select>
        <div className="NomConvention">
<input className="convention" type="text" 
          id="idConvention"
          name="convention"
          value="idConvention"
          disabled="disabled"
          placeholder="Convention" />
</div>
<div className="Message">
<textarea name="information" id="text" cols="30" rows="10"></textarea>
</div>
<button className="Envoyer">
Envoyer le formulaire
</button>
    </div>
)
// useEffect(()=>{
//     const convnetion = async ()=>{
//         try{
//             const responseData = await axios.post('http://localhost:3004/convention/create');
//         if(responseData){
//             setForm(responseData);
//             setIsLoading(false):
//         }

//         }catch (error){
//             console.log(error)
//         }
//     }
// })

}