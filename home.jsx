import React from 'react';

// Esqueleto inicial para o Portfólio LDM - Fatec
const PortfolioHome = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      {/* 1. IDENTIDADE VISUAL & CABEÇALHO */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <img 
          src="sua-foto.jpg" 
          alt="Foto do Aluno" 
          style={{ width: '150px', borderRadius: '50%' }} 
        />
        <h1>[Seu Nome Completo]</h1>
        <p>
          <a href="https://github.com/LuscaGS" target="_blank" rel="noreferrer">
            Meu GitHub
          </a>
        </p>
      </header>

      {/* 2. DADOS DO CURSO (Requisito 5) */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Dados Acadêmicos</h2>
        <ul>
          <li><strong>Faculdade:</strong> Fatec</li>
          <li><strong>Curso:</strong> [Nome do Seu Curso]</li>
          <li><strong>Início:</strong> [Ano/Semestre]</li>
          <li><strong>Previsão de Conclusão:</strong> [Ano/Semestre]</li>
        </ul>
      </section>

      {/* 3. EXPERIÊNCIA PROFISSIONAL (Requisito 6) */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Experiência Profissional</h2>
        <div>
          <h3>[Nome da Empresa] ([Data Início] – [Atual ou Fim])</h3>
          <p><strong>Cargo:</strong> [Seu Cargo - ex: Estagiário]</p>
          <p><strong>Descrição:</strong> [Descreva aqui suas atividades, como o uso de NestJS ou React Native].</p>
        </div>
      </section>

      {/* 4. PORTFÓLIO DE PROJETOS (Requisito 9) */}
      <section>
        <h2>Meus Projetos (Últimos 5 Semestres)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          
          {/* Exemplo de Card de Projeto */}
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>Projeto 1</h3>
            <p>Pequena descrição do projeto...</p>
            <button>Ver Detalhes</button>
          </div>

          {/* Adicione os outros 4 cards aqui */}
        </div>
      </section>
    </div>
  );
};

export default PortfolioHome;
