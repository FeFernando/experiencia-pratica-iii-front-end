const Templates = {
  home: () => `
    <section class="hero">
      <h1>Transforme vidas com o voluntariado</h1>
      <p>Conecte-se a projetos que fazem a diferença no Brasil inteiro.</p>
      <button class="btn-primary">Saiba mais</button>
    </section>
  `,

  projetos: () => `
    <section class="hero">
        <div class="hero-content">
            <h1>Nossos Projetos de Voluntariado</h1>
            <p>Descubra como nossas ações transformam vidas e como você pode fazer parte dessa corrente do bem.</p>
        </div>
    </section>

    <!-- Sobre o Projeto -->
    <section class="about">
        <h2>Como Funciona</h2>
        <p>Nossos projetos de voluntariado conectam pessoas dispostas a ajudar com famílias e comunidades que precisam de apoio. Cada projeto é planejado para atender necessidades específicas, seja em educação, saúde, inclusão social ou atividades culturais.</p>

        <h2>Para Que Serve</h2>
        <p>O objetivo dos nossos projetos é promover a inclusão social, gerar oportunidades e criar um impacto positivo na vida de quem mais precisa. Além disso, incentivamos a participação da comunidade e fortalecemos os vínculos entre voluntários e beneficiários.</p>

        <div class="impact-cards">
            <div class="card">
                <div class="card-icon">📚</div>
                <h3 class="badge educacao">Educação</h3>
                <p>Projetos que oferecem suporte escolar, reforço e capacitação para crianças e adultos.</p>
            </div>
            <div class="card">
                <div class="card-icon">🏥</div>
                <h3 class="badge educacao">Saúde</h3>
                <p>Campanhas de conscientização, atendimento básico e apoio a pessoas em vulnerabilidade.</p>
            </div>
            <div class="card">
                <div class="card-icon">🎨</div>
                <h3 class="badge educacao">Cultura e Inclusão</h3>
                <p>Atividades culturais e sociais que promovem integração, autoestima e cidadania.</p>
            </div>
        </div>
    </section>
     <section class="contact">
        <h2>Fale Conosco</h2>
        <address>
            <p>📍 <strong>Endereço:</strong> Passagem Bingo, 123 - Bom Clima, São Paulo/SP</p>
            <p>📞 <strong>Telefone:</strong> (11) 99999-9999</p>
            <p>✉️ <strong>E-mail:</strong> contato@organizacaovoluntario.org</p>
        </address>
    </section>
  `,

  cadastro: () => `
    <section class="signup-section">
            <h2>Cadastro de Voluntários</h2>
          <div class="success-message" id="successMessage">
                ✅ Cadastro realizado com sucesso! Entraremos em contato em breve.
            </div>
            <form id="volunteerForm" onsubmit="handleSubmit(event)">
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <div class="form-group">
                        <label for="nome">Nome Completo *</label>
                        <input type="text" id="nome" name="nome" required>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="telefone">Telefone *</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999" required>
                    </div>
                    <div class="form-group">
                        <label for="idade">Idade *</label>
                        <input type="number" id="idade" name="idade" min="16" max="100" required>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Disponibilidade</legend>
                    <div class="form-group">
                        <label for="disponibilidade">Quando você pode ajudar? *</label>
                        <select id="disponibilidade" name="disponibilidade" required>
                            <option value="">Selecione...</option>
                            <option value="fins-de-semana">Fins de semana</option>
                            <option value="dias-uteis">Dias úteis</option>
                            <option value="flexivel">Horário flexível</option>
                            <option value="pontual">Ações pontuais</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="area-interesse">Área de Interesse *</label>
                        <select id="area-interesse" name="area-interesse" required>
                            <option value="">Selecione...</option>
                            <option value="distribuicao-alimentos">Distribuição de Alimentos</option>
                            <option value="educacao">Educação e Capacitação</option>
                            <option value="saude">Apoio à Saúde</option>
                            <option value="administrativo">Apoio Administrativo</option>
                            <option value="qualquer">Qualquer área</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Informações Adicionais</legend>
                    <div class="form-group">
                        <label for="experiencia">Você já participou de ações voluntárias antes?</label>
                        <textarea id="experiencia" name="experiencia" placeholder="Conte-nos sobre sua experiência..."></textarea>
                    </div>
                    <div class="form-group">
                        <label for="motivacao">Por que você quer ser voluntário?</label>
                        <textarea id="motivacao" name="motivacao" placeholder="Compartilhe sua motivação..."></textarea>
                    </div>
                </fieldset>

                <button type="submit" class="btn-primary">Enviar Cadastro</button>
            </form>
           
           

        </section>
  `,

  
};
