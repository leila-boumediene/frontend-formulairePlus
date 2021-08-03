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
        setIsLoading(false);
    }
            }catch (error){
    console.log(error)
            }
        }
    }
 
    student()
}, [setForm]

useEffect(()=>{
    const convnetion = async ()=>{
        try{
            const responseData = await axios.post('http://localhost:3004/convention/create');
        if(responseData){
            setForm(responseData);
            setIsLoading(false):
        }

        }catch (error){
            console.log(error)
        }
    }
})

}