import React, {useState}from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('session', { username, id });

            localStorage.setItem('ongId', id, username);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        } catch (err){
            alert('Falha no login');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Seu nome de usuário"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        placeholder="Sua id"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        type="password"
                    />
                    <button className="button"type="submit">Entrar</button>
    
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
            <img src={heroesImg} alt="Heroes"/>
        </div>        
    );
}