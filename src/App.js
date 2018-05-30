import React, { Component } from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ad75ff',
      main: '#7746ea',
      dark: '#3d16b7',
      contrastText: '#fff',
    },
    secondary: {
      light: '#a2ffff',
      main: '#69f4fb',
      dark: '#1fc1c8',
      contrastText: '#fff',
    },
  },
  typography: {
    // Use the system font.
    fontFamily:
      '-apple-system,system-ui,BlinkMacSystemFont,' +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
});

const styles = {
  root: {
    flexGrow: 1,
    fontFamily: 'Roboto, Arial, sans-serif'
  },
  flex: { 
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  actionButton: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
  }
};

class App extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
  
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit">
                <MenuIcon />
              </IconButton>
              
              <Typography variant="title" color="inherit" className={classes.flex}>
                Bicicultura 2018
              </Typography>

              <IconButton className={classes.menuButton} color="inherit">
                <SearchIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
  
          <div className="schedule">
            <Paper className={classes.root + ' tab-bar'}>
                <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                <Tab label="8 de junho" />
                <Tab label="9 de junho" />
                <Tab label="10 de junho" />
                </Tabs>
            </Paper>

            {this.state.value === 0 &&
              <div>
                  {/* <div className="schedule-date">Sexta-Feira dia 8 de junho</div> */}
                  
                    <div className="schedule-time">10:20 às 11:10</div>
                  <div className="schedule-timebox">
                      <div className="schedule-place">Observatório</div>
                      Mapeamento de como anda a pesquisa sobre a bicicleta no Brasil
                      UCB - Yuriê Baptista - UCB GT de pesquisa
                      
                      <div className="schedule-place">Terreiro</div>
                      O uso da bicicleta e seu impacto na saúde pública.
                      John Fontenele Araujo – ACIRN - Associação de Ciclistas do Rio Grande do Norte
                      
                      <div className="schedule-place">Tenda</div>
                      Ciclo Orçamentário para a ciclomobilidade no município do Rio de Janeiro
                      Análise das leis e dotação orçamentária para a ciclomobilidade no Rio de Janeiro
                      Ciclo Orçamentário
                      Carolina Queiroz - MobiRio
                  </div>
                  
                    <div className="schedule-time">11:20 às 12:10</div>
                  <div className="schedule-timebox">
                      <div className="schedule-place">Átrio</div>
                      Ciclomensageria o cotodiano
                      Tássia Furtado 
                      
                      <div className="schedule-place">Observatório</div>
                      Assessoramento Jurídico para OSCs em prol da Ciclomobilidade
                      UCB - Leonardo Andrade Aragão - UCB GT Jurídico
                      
                      <div className="schedule-place">Terreiro </div>
                      olíticas de redução de velocidade
                      Medidas de segurança para ciclistas e pedestres - redução de velocidade
                      Aplicação de dinâmicas de planejamento sobre advocacy
                      Flavio Soares, Aline Cavalcante e Ana Carolina Nunes - Ciclocidade
                      
                      <div className="schedule-place">Tenda</div>
                      Bicicleta na Auto-Escola  e no conteúdo escolar
                      iclomobilidade para instrutores de auto-escolas
                      Pedro Daniel Amaral Arruda - CENTEC - Centro de Ensino Técnico de Trânsito CWB
                      Projeto Conhecer Pedalando
                      ossibilidades de inserção da bicicleta como conteúdo escolar
                      Bruno Wilwert Tomio - Conhecer Pedalando
                  </div>
                  
                    <div className="schedule-time">12:20 às 13:10</div>
                  <div className="schedule-timebox">
                      <div className="schedule-place">Observatório</div>
                      Como incidir pela bicicleta sobre o poder legislativo
                      UCB - Milvo Juliano Rossarola Júnior – UCB GT Políticas Públicas
                      
                      <div className="schedule-place">Terreiro </div>
                      Avaliações Cicloviárias
                      O Índice de Desenvolvimento Cicloviário IDECiclo Região Metropolitana do Recife
                      Daniel Valença - AMECICLO
                      Nova proposta metodológica de avaliação de vias ciclísticas.
                      Fabiano Faga Pacheco – AMOBICI
                      
                      <div className="schedule-place">Tenda</div>
                      Bicicleta - Educação Social e Incentivo
                      ike na Obra
                      Murilo Rodrigues - Bike Anjo Belém
                      estinação de Bicicletas roubadas e recuperadas
                      Mauro Soares Tavares - Programa Rio - Estado da Bicicleta/SETRANS RJ
                  </div>
                  
                    <div className="schedule-time">13:10 às 14:30</div>
                  <div className="schedule-timebox">
                  </div>
                  
                    <div className="schedule-time">14:30 às 15:20</div>
                  <div className="schedule-timebox">
                      <div className="schedule-place">Observatório</div>
                      CICLO CRIATIVO - Empreendedorismo & Bicicleta
                      O que ciclistas, urbanista, designer e ativista tem em comum?
                      Como o Design pode incentivar a Mobilidade Ativa?
                      Yasmim Reck - Bike Fácil
                      
                      <div className="schedule-place">Terreiro </div>
                      Politicas e Planos de Mobilidade
                      Projeto Parque 
                      Débora Reis Fontes – CSC-RJ e Andrea Borges-  UNISUAM
                      Plano de Mobilidade Ativa do Distrito Federal - 
                      Priscila Miti Yajima – SEMOB - DF
                      Diretrizes para política pública de Mobilidade Sustentável, o Programa Ciclovida
                      Silvana Nakamori – UFPR / CicloIguaçu
                      
                      <div className="schedule-place">Tenda</div>
                      icicleta: Cultura e Arte
                      Giovani Rafael Seibel - COLMEIA - Coletivo Laboral Multicultural
                      A Experiência do Pedal Sonoro 
                      Luís Araujo – Pedal Sonoro
                  </div>
                  
                    <div className="schedule-time">15:30 às 16:20</div>
                  <div className="schedule-timebox">
                      <div className="schedule-place">Átrio</div>
                      Pedestres em pauta
                      Moderação Thatiana Murillo – Caminha Rio
                      Multas a pedestres e ciclistas - Como reagir? 	Glaucia Pereira e Ana Carolina Nunes – Cidadeapé
                      Super-Ando
                      Super-Ando
                      
                      <div className="schedule-place">Observatório</div>
                      Bicicleta na Escola
                      Ana Destri - AMOBICI
                      
                      <div className="schedule-place">Terreiro </div>
                      Vila Velha, um panorama
                      Mudanças da cidade e as percepções que elas proporcionam
                      Fernando Braga – Ciclistas Urbanos Capixabas
                      Estacionamento facilita o acesso de quem adota a bicicleta como meio de transporte
                      Pollyana Martins – Ciclistas Vila-Velhenses
                      
                      <div className="schedule-place">Tenda</div>
                      Bicicletários Quantidade e Qualidade
                      omo ampliar os bicicletários adequados na sua cidade
                      Felipe Alves - UCB GT Infraestrutura
                      É possível estacionar a bicicleta “de boa”?
                      Hannah Kny – Bike de Boa
                  </div>
                  
                    <div className="schedule-time">16:30 às 17:30</div>
                  <div className="schedule-timebox">
                      <div className="schedule-place">Observatório</div>
                      Compartilhamento de Bicicletas
                      Moderação Rodrigo Vitório -TA
                      Gheysa Caroline Prado 
                      Marina Caus dos Santos - Thaisa Meurer Piovezani - Mariana de Souza - Fernando Reinaldo Contin Falkiewicz
                      icicletar Corporativo
                      Aurélie Dos Santos - Serttel 
              
                      <div className="schedule-place">Terreiro </div>
                      Conceito dos Jogos de Bicicleta
                      Ana Carboni – Bike Anjo Niterói
                      
                      <div className="schedule-place">Tenda </div>
                      O olhar através da bicicleta
                      Pedal da ACERGS
                      Rafael Santos – ACERGS Associação dos Cegos do Estado do Rio Grande do Sul
                      DKV
                      Maria Aline De Oliveira Gouveia e Barbara de Vasconcelos Barbosa - - Bike Anjos Campina Grande e Recife
                  </div>
              </div>        
            }
    
            {this.state.value === 1 &&
              <div>
                {/* <div className="schedule-date">Sábado dia 9 de junho</div> */}
  
                <div className="schedule-time">10:20 às 11:10</div>
                <div className="schedule-timebox">
                    <div className="schedule-place">Átrio</div>
                    Mulheres e Mobilidade
                    Moderação Aline Cavalcante - Ciclocidade
                    Pedala, mana!
                    Melissa Noguchi e Lorena Costa– Bike Anjo Belém
                    Festival “100Gurias100Medo”
                    Naone Lopes e Caro Pierro  – 100gurias100medo
                    Mulheres Caminhantes, auditoria de segurança de gênero e caminhabilidade
                    Ana Carolina Nunes e Leticia Sabino – SampaPé
                    
                    <div className="schedule-place">Auditório</div>
                    Contagens de ciclistas: monitoramento do uso de bicicletas em escala municipal
                    Thiago Benicchio – ITDP Brasil
                    
                    <div className="schedule-place">Observatório</div>
                    icloativismo e ações politicas
                    Moderação Felipe Alves - UCB
                    Prefeitura de Curitiba extinguiu infraestruturas "Calçadas Verdes"
                    Joao Pedro Bazzo Vieira - Cicloiguaçu
                    Memória e historia do cicloativismo no Brasil	
                    Fernando Barcellos – UCB GT Pesquisa
                    ontexto atual e cicloativismo
                    Lígia Pereira - AMECICLO
                    
                    <div className="schedule-place">Tenda</div>
                    Como Promover a Mobilidade Ativa nas Eleições de 2018
                    André Geraldo Soares e Ana Carolina Nunes - UCB e  SampaPé
                </div>
  
                <div className="schedule-time">11:20 às 12:10</div>
                <div className="schedule-timebox">
                    <div className="schedule-place">Auditório</div>
                    Mulheres no Cicloativismo   (11:20 às 13:10)
                    Mapeamento da participação de mulheres no movimento cicloativista
                    Roberta Raquel - UFSC
                    Dificuldades e facilidades de estar a frente de uma diretoria anterior masculina
                    eis que não são em prol da segurança e da vida das mulheres
                    Aspásia Mariana - UCB GT Gênero / Ciclovida Fortaleza
                    
                    <div className="schedule-place">Observatório</div>
                    Agenda Politica Niteroi
                    Fátima Priscila Morela Edra - Universidade Federal Fluminense – UFF e Sérgio Franco – Mobilidade Niterói
                    
                    <div className="schedule-place">Tenda</div>
                    Soluções para a bicicleta
                    Bicicletaria Cultural
                    Patricia Valverde – Bicicletaria Cultural
                    Estações de Reparos Rápidos de Bicicleta
                    Paulo Aguiar – Pedala Manaus
                </div>
  
                <div className="schedule-time">12:20 às 13:10</div>
                <div className="schedule-timebox">
                    <div className="schedule-place">Observatório</div>
                    ampanhas Educativas e Motivacionais
                    ampanha "No Trânsito Eu Compartilho Respeito"
                    Boca no Trombone - Palestras em empresas privadas e públicas para um público não ciclista
                    Nadia Aguiar – Pedala Manaus
                    u Vou de Bicicleta
                    Everaldo Moreira Fabrício - BikeMotiva
                    
                    <div className="schedule-place">Tenda</div>
                    ções de Bike em Pirenópolis
                    Larissa Cantarelli – Bike Anjo Pirenópolis
                </div>
  
                <div className="schedule-time">13:10 às 14:30</div>
                <div className="schedule-timebox">
                </div>
  
                <div className="schedule-time">14:30 às 15:20</div>
                <div className="schedule-timebox">
                    <div className="schedule-place">Átrio </div>
                    Mobilidade de Baixo Carbono
                    Como a bicicleta e pode contribuir com um futuro de baixo carbono
                    Aline Cavalcante e João Lacerda – Coalizão Clima e Mobilidade e Ana Abreu - Engajamundo
                    
                    <div className="schedule-place">Auditório </div>
                    icloturismo
                    Moderação Ricardo Martins - RodaMundo
                    ra Viagens de Bicicleta
                    Fábio Eduardo da Silva - Clube de Cicloturismo do Brasil
                    e ocupação á ocupação uma pedalada Brasília Olinda.
                    Mateus Lima - Bicicentro Comunitário
                    iajar sola
                    María Paz Castillo - Pedalea x la calle- Chile
                    
                    <div className="schedule-place">Observatório</div>
                    tivismo e Academia
                    Moderação Vivan Garelli - PPGA UFF
                    rocesso de concepção e implementação da ciclovia da Uni.Fed. de Itajubá
                    Pedro Torres de Melo Pedrosa - UNIFEI
                    Movimentos sociais contemporâneos e inclusão: lições do cicloativismo no Rio.
                    Naomi Orton – PUC Rio
                    Ciclomobilidade: Avaliação e Qualificação do Prog. Ciclo da RMGV- Vila Velha – ES
                    Pollyana Martins Rodrigues – Ciclistas Vila-Velhenses
                    Ciclorrotas de Aracaju
                    Sayuri Silva Dantas de Oliveira – Associação Ciclo Urbano
                    
                    <div className="schedule-place">Tenda</div>
                    Indicadores sobre o respeito à faixa de pedestres em Brasília
                    Jonas Bertucci – Rodas da Paz
                </div>
                    
                <div className="schedule-time">15:30 às 16:20</div>
                <div className="schedule-timebox">
                    <div className="schedule-place">Auditório </div>
                    teiros e Estudos
                    Moderação Ricardo Martins - RodaMundo
                    nálise comparativa entre os estudos internacionais e nacionais Cicloturismo
                    Fernanda Monteiro Lobão de Deus e Fátima Priscila Edra -  UFF
                    Papo sobre Circuitos de Cicloturismo
                    Ivo Leonardo Schmitz - Clube de Cicloturismo do Brasil
                    riação de roteiros de cicloturismo urbano
                    Gustavo Carvalho - Kuritibike
                    
                    <div className="schedule-place">Observatório</div>
                    esquisas Ciclomobilidade
                    Moderação Rene Fernandes - FGV
                    Donde vem, pronde vão - Cruzamento de pesquisas em Recife
                    Daniel Valença - AMECICLO
                    Simulador de vantagens da mobilidade ativa
                    José Carlos Assunção Belotto – Ciclovida / UFPR
                    omo diferentes aspectos da infraestrutura influenciam ciclistas.
                    Joao Pedro Bazzo Vieira - CicloIguaçu
                    arauacá Cidade das Bicicletas
                    Valden Rocha - Bike Anjo Rio Branco
                    nalisar a prática cultural do andar de bicicleta na Cidade do Rio de Janeiro
                    Denise Pinheiro - UFRJ
                    
                    <div className="schedule-place">Tenda</div>
                    Visões sobre a bicicleta
                    O uso da bicicleta como transporte em cidades do interior do Ceará.
                    Clivia Kellen Almeida Silva - Ciclanas Fortaleza
                    Pedalino vê o mundo
                    Claudio de Moura Sobral - Cicloação Recife	
                </div>
                    
                <div className="schedule-time">16:30 às 17:00</div>
                <div className="schedule-timebox">
                    <div className="schedule-place">Auditório</div>
                    Entrega prêmio A Promoção da Mobilidade por Bicicletas no Brasi
                    Zé Lobo - Transporte Ativo
                </div>
                    
                <div className="schedule-time">17:00 às 17:45</div>
                <div className="schedule-timebox">
                    <div className="schedule-place">Auditório</div>
                    Palestra Magna Clarisse Linke – ITDP Brasil
                </div>
              </div>
            }

            {this.state.value === 2 &&
              <div>
                  {/* <div className="schedule-date">Domingo dia 10 de junho</div>. */}
                  
                    <div className="schedule-time">10:20 às 13:10</div>
                  <div className="schedule-timebox">
                      <div className="schedule-place">Auditório</div>
                      Assembleia Geral UCB
                      UCB
                  </div>
                  
                    <div className="schedule-time">13:10 às 14:30</div>
                  <div className="schedule-timebox">
                  </div>
                  
                    <div className="schedule-time">14:30 às 15:20</div>
                  <div className="schedule-timebox">
                      <div className="schedule-place">Átrio </div>
                      Bicicleta para uma cidade sensível
                      Sheila Hempkemeyer - ABC - Associação Blumenauense Pró-Ciclovias
                      
                      <div className="schedule-place">Auditório </div>
                      Paradigmas do Século XXI
                      Renata Falzoni – André Soares – Zé Lobo. Moderação Fernando Barcellos
                      
                      <div className="schedule-place">Observatório</div>
                      Pesquisa Nacional de Avaliação da Ciclabilidade
                      Gláucia Pereira e Yuriê Baptista
                      <div className="schedule-event-title">Terreiro</div>
                      Avaliações Cicloviárias - Resultados
                      O Índice de Desenvolvimento Cicloviário IDECiclo Região Metropolitana do Recife
                      Daniel Valença - AMECICLO
                      
                      <div className="schedule-place">Tenda</div>
                      Mecânica para Mulheres (14:30 às 16:20)
                      Coordenação Tassia Furtado
                      Oficinas de mecânica, problemas cotidianos
                      Angela Soler
                      Troca de dicas sobre mecânica, em uma linguagem de mulher para mulher
                      Marcella Olinto - Garupa
                  </div>
                  
                    <div className="schedule-time">15:30 às 16:30</div>
                  <div className="schedule-timebox">
                      <div className="schedule-place">Auditório </div>
                      Palestra Magna Ricardo Martins – Roda Mundo
                  </div>
                  
                    <div className="schedule-time">16:30 às 17:45</div>
                  <div className="schedule-timebox">
                      <div className="schedule-place">Auditório</div>
                      Plenária Final Bicicultura &  Encerramento e Escolha Cidade Sede 2020
                      UCB
                  </div>
              </div>
            }
        </div>
          
  
  
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);