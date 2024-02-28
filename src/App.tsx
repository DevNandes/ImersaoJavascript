import React, { useState } from 'react';

import { ImcPacientes } from './pages/ImcPacientes.tsx';
import { AddPacientes } from './pages/AddPaciente.tsx';

// Definindo a interface para um paciente
interface Paciente {
  nome: string;
  peso: number;
  altura: number;
  gordura: number;
  imc: string;
}

// Definindo a lista de pacientes com o tipo Paciente[]
const pacientes: Paciente[] = [
  {
    nome: 'Paulo',
    peso: 100,
    altura: 2.00,
    gordura: 10,
    imc: '0',
  },
  {
    nome: 'João',
    peso: 80,
    altura: 1.72,
    gordura: 40,
    imc: '0',
  },
  {
    nome: 'Erica',
    peso: 54,
    altura: 1.64,
    gordura: 14,
    imc: '0',
  },
  {
    nome: 'Douglas',
    peso: 85,
    altura: 1.73,
    gordura: 24,
    imc: '0',
  },
  {
    nome: 'Tatiana',
    peso: 46,
    altura: 1.55,
    gordura: 19,
    imc: '0',
  },
];
export const App: React.FC = () => {
  // Inicializa pacientesList com a lista pré-definida de pacientes
  const [pacientesList, setPacientesList] = useState<Paciente[]>(pacientes);

  const addPacienteToList = (newPaciente: Paciente) => {
    setPacientesList(currentList => [...currentList, { ...newPaciente, imc: calculateImc(newPaciente.peso, newPaciente.altura) }]);
  };

  // Função para calcular o IMC
  const calculateImc = (peso: number, altura: number) => {
    const imc = (peso / (altura * altura)).toFixed(2);
    return imc;
  };

  return (
<>
      <header>
        <div className="container">
          <h1>Aparecida Nutrição</h1>
        </div>
      </header>
      <main>
        <section className="container">
          <ImcPacientes pacientes={pacientesList} />
        </section>
        <section className="container">
          <AddPacientes setPacientesList={addPacienteToList} />
        </section>
      </main>
    </>
  );
};

