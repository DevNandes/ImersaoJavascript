import React from "react";

// Definindo o tipo para cada paciente
type Paciente = {
  nome: string;
  peso: number;
  altura: number;
  gordura: number;
  imc?: string; // imc será calculado, então inicialmente pode não estar presente
}

// Definindo o tipo para as props do componente
type ImcPacientesProps = {
  pacientes: Paciente[];
}

export const ImcPacientes: React.FC<ImcPacientesProps> = ({ pacientes }) => {
  return (
    <>
      <h2>Meus pacientes</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Peso(kg)</th>
            <th>Altura(m)</th>
            <th>Gordura Corporal(%)</th>
            <th>IMC</th>
          </tr>
        </thead>
        <tbody id="tabela-pacientes">
          {pacientes.map((paciente) => {
            const imc = (paciente.peso / (paciente.altura ** 2)).toFixed(2);
            return (
              <tr className="paciente" key={`${paciente.nome}-${imc}`}>
                <td className="info-nome">{paciente.nome}</td>
                <td className="info-peso">{paciente.peso}</td>
                <td className="info-altura">{paciente.altura}</td>
                <td className="info-gordura">{paciente.gordura}</td>
                <td className="info-imc">{imc}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </>
  );
}
