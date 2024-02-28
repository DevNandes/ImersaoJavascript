import React, { useState } from 'react';

// Styles
import { ImcPacientes } from './pages/ImcPacientes.tsx';
import { AddPacientes } from './pages/AddPaciente.tsx';

// Json
import pacientes from './data/pacientes.json'

// Definindo a interface para um paciente
interface Paciente {
  nome: string;
  peso: number;
  altura: number;
  gordura: number;
  imc: string;
}


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

