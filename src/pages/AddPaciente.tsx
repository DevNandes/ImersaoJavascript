import React, { useState } from "react";

type Paciente = {
    nome: string;
    peso: number;
    altura: number;
    gordura: number;
    imc: string; // Considerando que você calculará o IMC com base no peso e altura
};


type AddPacientesProps = {
    setPacientesList: (newPaciente: Paciente) => void;
};

export const AddPacientes: React.FC<AddPacientesProps> = ({ setPacientesList }) => {
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [gordura, setGordura] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Evita o recarregamento da página

        // Calcula o IMC
        const imc = (Number(peso) / (Number(altura) * Number(altura))).toFixed(2);

        // Cria um novo paciente
        const newPaciente: Paciente = {
            nome,
            peso: Number(peso),
            altura: Number(altura),
            gordura: Number(gordura),
            imc,
        };

        // Atualiza a lista de pacientes
        setPacientesList(newPaciente);

        // Limpa os campos do formulário
        setNome('');
        setPeso('');
        setAltura('');
        setGordura('');
    };

    return (
        <>
            <h2 id="titulo-form">Adicionar novo paciente</h2>
            <form id="form-adiciona" onSubmit={handleSubmit}>
                <div className="grupo">
                    <label htmlFor="nome">Nome:</label>
                    <input id="nome" name="nome" type="text" placeholder="digite o nome do seu paciente" className="campo" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="grupo">
                    <label htmlFor="peso">Peso:</label>
                    <input id="peso" name="peso" type="text" placeholder="digite o peso do seu paciente" className="campo campo-medio" value={peso} onChange={(e) => setPeso(e.target.value)} />
                </div>
                <div className="grupo">
                    <label htmlFor="altura">Altura:</label>
                    <input id="altura" name="altura" type="text" placeholder="digite a altura do seu paciente" className="campo campo-medio" value={altura} onChange={(e) => setAltura(e.target.value)} />
                </div>
                <div className="grupo">
                    <label htmlFor="gordura">% de Gordura:</label>
                    <input id="gordura" name="gordura" type="text" placeholder="digite a porcentagem de gordura do seu paciente" className="campo campo-medio" value={gordura} onChange={(e) => setGordura(e.target.value)} />
                </div>
                <button type="submit" id="adicionar-paciente" className="botao btn-principal">Adicionar</button>
            </form>
        </>
    );
};
