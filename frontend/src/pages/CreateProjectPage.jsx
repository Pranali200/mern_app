import '../styles/CreateProjectPage.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import CreateProjectPopup from './CreateProjectPopup';

export default function CreateProjectPage(){
    const [showPopUP, setShowPopUp] = useState('')

    const handleCreateProjectClick = () =>{
        setShowPopUp(true);
    }
    const handleClose = () =>{
        setShowPopUp(false)
    }

    const handleCreateProject = ()=>{
        console.log("project created");
        setShowPopUp(false);
    }
    return(
        <div className="create-project-container">
            <header className="header">
                <div className="logo"> Ques.<span>AI</span></div>
                <div className="header-icons">
                <i className='fas fa-cog'></i>
                    <i className='fas fa-bell'></i>
                   
                </div>
            </header>

            <main className='main-content'>
                <h1>Create a New Project</h1>

                <img
                src='/assets/cuate.png'
                alt='Create Project Illustartion'
                className='illustration'></img>

                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <button onClick = {handleCreateProjectClick} className='create-button'> + Create New Project</button>

                {showPopUP && (<CreateProjectPopup onClose = {handleClose} onCreate = {handleCreateProject}/>) }
            </main>
        </div>
    )
}
