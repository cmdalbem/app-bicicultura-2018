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
                    {/*
                    <div className="schedule-date">Sexta-Feira dia 8 de junho</div> */}

                    <div className="schedule-time">10:20 às 11:10</div>
                    <div className="schedule-timebox">
                        <div className="schedule-place">Observatório</div>
                        <div className="schedule-session-title">Mapeamento de como anda a pesquisa sobre a bicicleta no Brasil</div>
                        <div className="schedule-talk-author">UCB - Yuriê Baptista - UCB GT de pesquisa</div>

                        <div className="schedule-place">Terreiro</div>
                        <div className="schedule-session-title">O uso da bicicleta e seu impacto na saúde pública.</div>
                        <div className="schedule-talk-author">John Fontenele Araujo – ACIRN - Associação de Ciclistas do Rio Grande do Norte</div>

                        <div className="schedule-place">Tenda</div>
                        <div className="schedule-session-title">Ciclo Orçamentário para a ciclomobilidade no município do Rio de Janeiro</div>
                        <div className="schedule-session-subtitle">Análise das leis e dotação orçamentária para a ciclomobilidade no Rio de Janeiro</div>
                        <div className="schedule-talk-title">Ciclo Orçamentário</div>
                        <div className="schedule-talk-author">Carolina Queiroz - MobiRio</div>
                    </div>

                    <div className="schedule-time">11:20 às 12:10</div>
                    <div className="schedule-timebox">
                        <div className="schedule-place">Átrio</div>
                        <div className="schedule-session-title">Ciclomensageria o cotodiano</div>
                        <div className="schedule-talk-author">Tássia Furtado</div>

                        <div className="schedule-place">Observatório</div>
                        <div className="schedule-session-title">Assessoramento Jurídico para OSCs em prol da Ciclomobilidade</div>
                        <div className="schedule-talk-author">UCB - Leonardo Andrade Aragão - UCB GT Jurídico</div>

                        <div className="schedule-place">Terreiro </div>
                        <div className="schedule-session-title">Políticas de redução de velocidade</div>
                        <div className="schedule-talk-author">Medidas de segurança para ciclistas e pedestres - redução de velocidade</div>
                        Aplicação de dinâmicas de planejamento sobre advocacy
                        <div className="schedule-talk-author">Flavio Soares, Aline Cavalcante e Ana Carolina Nunes - Ciclocidade</div>

                        <div className="schedule-place">Tenda</div>
                        <div className="schedule-session-title">Bicicleta na Auto-Escola e no conteúdo escolar</div>
                        iclomobilidade para instrutores de auto-escolas
                        <div className="schedule-talk-author">Pedro Daniel Amaral Arruda - CENTEC - Centro de Ensino Técnico de Trânsito CWB</div>
                        Projeto Conhecer Pedalando ossibilidades de inserção da bicicleta como conteúdo escolar
                        <div className="schedule-talk-author">Bruno Wilwert Tomio - Conhecer Pedalando</div>
                    </div>

                    <div className="schedule-time">12:20 às 13:10</div>
                    <div className="schedule-timebox">
                        <div className="schedule-place">Observatório</div>
                        <div className="schedule-session-title">Como incidir pela bicicleta sobre o poder legislativo</div>
                        <div className="schedule-talk-author">UCB - Milvo Juliano Rossarola Júnior – UCB GT Políticas Públicas</div>

                        <div className="schedule-place">Terreiro </div>
                        <div className="schedule-session-title">Avaliações Cicloviárias</div>
                        O Índice de Desenvolvimento Cicloviário IDECiclo Região Metropolitana do Recife
                        <div className="schedule-talk-author">Daniel Valença - AMECICLO</div>
                        Nova proposta metodológica de avaliação de vias ciclísticas. Fabiano Faga Pacheco – AMOBICI

                        <div className="schedule-place">Tenda</div>
                        <div className="schedule-talk-author">
                            <div className="schedule-session-title">Bicicleta - Educação Social e Incentivo</div>
                        </div>
                        ike na Obra
                        <div className="schedule-talk-author">Murilo Rodrigues - Bike Anjo Belém</div>
                        estinação de Bicicletas roubadas e recuperadas
                        <div className="schedule-talk-author">Mauro Soares Tavares - Programa Rio - Estado da Bicicleta/SETRANS RJ</div>
                    </div>

                    <div className="schedule-time">13:10 às 14:30</div>
                    <div className="schedule-timebox">
                    </div>

                    <div className="schedule-time">14:30 às 15:20</div>
                    <div className="schedule-timebox">
                        <div className="schedule-place">Observatório</div>
                        <div className="schedule-talk-author">
                            <div className="schedule-session-title">CICLO CRIATIVO - Empreendedorismo & Bicicleta</div>
                        </div>
                        O que ciclistas, urbanista, designer e ativista tem em comum? Como o Design pode incentivar a Mobilidade Ativa?
                        <div className="schedule-talk-author">Yasmim Reck - Bike Fácil</div>

                        <div className="schedule-place">Terreiro </div>
                        <div className="schedule-session-title">Politicas e Planos de Mobilidade</div>
                        Projeto Parque Débora Reis Fontes – CSC-RJ e Andrea Borges- UNISUAM
                        <div className="schedule-talk-author">Plano de Mobilidade Ativa do Distrito Federal - </div>
                        <div className="schedule-talk-author">Priscila Miti Yajima – SEMOB - DF</div>
                        Diretrizes para política pública de Mobilidade Sustentável, o Programa Ciclovida Silvana Nakamori – UFPR / CicloIguaçu

                        <div className="schedule-place">Tenda</div>
                        <div className="schedule-session-title">icicleta: Cultura e Arte</div>
                        <div className="schedule-talk-author">Giovani Rafael Seibel - COLMEIA - Coletivo Laboral Multicultural</div>
                        A Experiência do Pedal Sonoro Luís Araujo – Pedal Sonoro
                    </div>

                    <div className="schedule-time">15:30 às 16:20</div>
                    <div className="schedule-timebox">
                        <div className="schedule-place">Átrio</div>
                        <div className="schedule-session-title">Pedestres em pauta</div>
                        Moderação Thatiana Murillo – Caminha Rio
                        <div className="schedule-talk-author">Multas a pedestres e ciclistas - Como reagir? Glaucia Pereira e Ana Carolina Nunes – Cidadeapé</div>
                        Super-Ando Super-Ando

                        <div className="schedule-place">Observatório</div>
                        <div className="schedule-session-title">Bicicleta na Escola</div>
                        <div className="schedule-talk-author">Ana Destri - AMOBICI</div>

                        <div className="schedule-place">Terreiro </div>
                        <div className="schedule-session-title">Vila Velha, um panorama</div>
                        Mudanças da cidade e as percepções que elas proporcionam Fernando Braga – Ciclistas Urbanos Capixabas Estacionamento facilita
                        o acesso de quem adota a bicicleta como meio de transporte Pollyana Martins – Ciclistas Vila-Velhenses

                        <div className="schedule-place">Tenda</div>
                        <div className="schedule-session-title">Bicicletários Quantidade e Qualidade</div>
                        omo ampliar os bicicletários adequados na sua cidade
                        <div className="schedule-talk-author">Felipe Alves - UCB GT Infraestrutura</div>
                        É possível estacionar a bicicleta “de boa”? Hannah Kny – Bike de Boa
                    </div>

                    <div className="schedule-time">16:30 às 17:30</div>
                    <div className="schedule-timebox">
                        <div className="schedule-place">Observatório</div>
                        <div className="schedule-session-title">Compartilhamento de Bicicletas</div>
                        Moderação Rodrigo Vitório -TA Gheysa Caroline Prado
                        <div className="schedule-talk-author">Marina Caus dos Santos - Thaisa Meurer Piovezani - Mariana de Souza - Fernando Reinaldo Contin Falkiewicz</div>
                        icicletar Corporativo
                        <div className="schedule-talk-author">Aurélie Dos Santos - Serttel </div>

                        <div className="schedule-place">Terreiro </div>
                        <div className="schedule-session-title">Conceito dos Jogos de Bicicleta</div>
                        Ana Carboni – Bike Anjo Niterói

                        <div className="schedule-place">Tenda </div>
                        <div className="schedule-session-title">O olhar através da bicicleta</div>
                        Pedal da ACERGS Rafael Santos – ACERGS Associação dos Cegos do Estado do Rio Grande do Sul DKV
                        <div className="schedule-talk-author">Maria Aline De Oliveira Gouveia e Barbara de Vasconcelos Barbosa - - Bike Anjos Campina Grande e Recife</div>
                    </div>
                </div>
                }
                
                {this.state.value === 1 &&
                    <div>
                        {/*
                        <div className="schedule-date">Sábado dia 9 de junho</div> */}

                        <div className="schedule-time">10:20 às 11:10</div>
                        <div className="schedule-timebox">
                            <div className="schedule-place">Átrio</div>
                            <div className="schedule-session-title">Mulheres e Mobilidade</div>
                            <div className="schedule-talk-author">Moderação Aline Cavalcante - Ciclocidade</div>
                            Pedala, mana! Melissa Noguchi e Lorena Costa– Bike Anjo Belém Festival “100Gurias100Medo” Naone Lopes e Caro Pierro – 100gurias100medo
                            Mulheres Caminhantes, auditoria de segurança de gênero e caminhabilidade Ana Carolina Nunes e Leticia Sabino – SampaPé

                            <div className="schedule-place">Auditório</div>
                            <div className="schedule-session-title">Contagens de ciclistas: monitoramento do uso de bicicletas em escala municipal</div>
                            Thiago Benicchio – ITDP Brasil

                            <div className="schedule-place">Observatório</div>
                            <div className="schedule-session-title">icloativismo e ações politicas</div>
                            <div className="schedule-talk-author">Moderação Felipe Alves - UCB</div>
                            Prefeitura de Curitiba extinguiu infraestruturas "Calçadas Verdes"
                            <div className="schedule-talk-author">Joao Pedro Bazzo Vieira - Cicloiguaçu</div>
                            Memória e historia do cicloativismo no Brasil Fernando Barcellos – UCB GT Pesquisa ontexto atual e cicloativismo
                            <div className="schedule-talk-author">Lígia Pereira - AMECICLO</div>

                            <div className="schedule-place">Tenda</div>
                            <div className="schedule-session-title">Como Promover a Mobilidade Ativa nas Eleições de 2018</div>
                            <div className="schedule-talk-author">André Geraldo Soares e Ana Carolina Nunes - UCB e SampaPé</div>
                        </div>

                        <div className="schedule-time">11:20 às 12:10</div>
                        <div className="schedule-timebox">
                            <div className="schedule-place">Auditório</div>
                            <div className="schedule-session-title">Mulheres no Cicloativismo (11:20 às 13:10)</div>
                            Mapeamento da participação de mulheres no movimento cicloativista
                            <div className="schedule-talk-author">Roberta Raquel - UFSC</div>
                            Dificuldades e facilidades de estar a frente de uma diretoria anterior masculina eis que não são em prol da segurança e da
                            vida das mulheres
                            <div className="schedule-talk-author">Aspásia Mariana - UCB GT Gênero / Ciclovida Fortaleza</div>

                            <div className="schedule-place">Observatório</div>
                            <div className="schedule-session-title">Agenda Politica Niteroi</div>
                            <div className="schedule-talk-author">Fátima Priscila Morela Edra - Universidade Federal Fluminense – UFF e Sérgio Franco – Mobilidade Niterói</div>

                            <div className="schedule-place">Tenda</div>
                            <div className="schedule-session-title">Soluções para a bicicleta</div>
                            Bicicletaria Cultural Patricia Valverde – Bicicletaria Cultural Estações de Reparos Rápidos de Bicicleta Paulo Aguiar – Pedala
                            Manaus
                        </div>

                        <div className="schedule-time">12:20 às 13:10</div>
                        <div className="schedule-timebox">
                            <div className="schedule-place">Observatório</div>
                            <div className="schedule-session-title">ampanhas Educativas e Motivacionais</div>
                            ampanha "No Trânsito Eu Compartilho Respeito"
                            <div className="schedule-talk-author">Boca no Trombone - Palestras em empresas privadas e públicas para um público não ciclista</div>
                            Nadia Aguiar – Pedala Manaus u Vou de Bicicleta
                            <div className="schedule-talk-author">Everaldo Moreira Fabrício - BikeMotiva</div>

                            <div className="schedule-place">Tenda</div>
                            <div className="schedule-session-title">ções de Bike em Pirenópolis</div>
                            Larissa Cantarelli – Bike Anjo Pirenópolis
                        </div>

                        <div className="schedule-time">13:10 às 14:30</div>
                        <div className="schedule-timebox">
                        </div>

                        <div className="schedule-time">14:30 às 15:20</div>
                        <div className="schedule-timebox">
                            <div className="schedule-place">Átrio </div>
                            <div className="schedule-session-title">Mobilidade de Baixo Carbono</div>
                            Como a bicicleta e pode contribuir com um futuro de baixo carbono
                            <div className="schedule-talk-author">Aline Cavalcante e João Lacerda – Coalizão Clima e Mobilidade e Ana Abreu - Engajamundo</div>

                            <div className="schedule-place">Auditório </div>
                            <div className="schedule-session-title">icloturismo</div>
                            <div className="schedule-talk-author">Moderação Ricardo Martins - RodaMundo</div>
                            ra Viagens de Bicicleta
                            <div className="schedule-talk-author">Fábio Eduardo da Silva - Clube de Cicloturismo do Brasil</div>
                            e ocupação á ocupação uma pedalada Brasília Olinda.
                            <div className="schedule-talk-author">Mateus Lima - Bicicentro Comunitário</div>
                            iajar sola
                            <div className="schedule-talk-author">María Paz Castillo - Pedalea x la calle- Chile</div>

                            <div className="schedule-place">Observatório</div>
                            <div className="schedule-session-title">tivismo e Academia</div>
                            <div className="schedule-talk-author">Moderação Vivan Garelli - PPGA UFF</div>
                            rocesso de concepção e implementação da ciclovia da Uni.Fed. de Itajubá
                            <div className="schedule-talk-author">Pedro Torres de Melo Pedrosa - UNIFEI</div>
                            Movimentos sociais contemporâneos e inclusão: lições do cicloativismo no Rio. Naomi Orton – PUC Rio Ciclomobilidade: Avaliação
                            e Qualificação do Prog. Ciclo da RMGV- Vila Velha – ES Pollyana Martins Rodrigues – Ciclistas Vila-Velhenses Ciclorrotas
                            de Aracaju Sayuri Silva Dantas de Oliveira – Associação Ciclo Urbano

                            <div className="schedule-place">Tenda</div>
                            <div className="schedule-session-title">Indicadores sobre o respeito à faixa de pedestres em Brasília</div>
                            Jonas Bertucci – Rodas da Paz
                        </div>

                        <div className="schedule-time">15:30 às 16:20</div>
                        <div className="schedule-timebox">
                            <div className="schedule-place">Auditório </div>
                            <div className="schedule-session-title">teiros e Estudos</div>
                            <div className="schedule-talk-author">Moderação Ricardo Martins - RodaMundo</div>
                            nálise comparativa entre os estudos internacionais e nacionais Cicloturismo
                            <div className="schedule-talk-author">Fernanda Monteiro Lobão de Deus e Fátima Priscila Edra - UFF</div>
                            Papo sobre Circuitos de Cicloturismo
                            <div className="schedule-talk-author">Ivo Leonardo Schmitz - Clube de Cicloturismo do Brasil</div>
                            riação de roteiros de cicloturismo urbano
                            <div className="schedule-talk-author">Gustavo Carvalho - Kuritibike</div>

                            <div className="schedule-place">Observatório</div>
                            <div className="schedule-session-title">esquisas Ciclomobilidade</div>
                            <div className="schedule-talk-author">Moderação Rene Fernandes - FGV</div>
                            <div className="schedule-talk-author">Donde vem, pronde vão - Cruzamento de pesquisas em Recife</div>
                            <div className="schedule-talk-author">Daniel Valença - AMECICLO</div>
                            Simulador de vantagens da mobilidade ativa José Carlos Assunção Belotto – Ciclovida / UFPR omo diferentes aspectos da infraestrutura
                            influenciam ciclistas.
                            <div className="schedule-talk-author">Joao Pedro Bazzo Vieira - CicloIguaçu</div>
                            arauacá Cidade das Bicicletas
                            <div className="schedule-talk-author">Valden Rocha - Bike Anjo Rio Branco</div>
                            nalisar a prática cultural do andar de bicicleta na Cidade do Rio de Janeiro
                            <div className="schedule-talk-author">Denise Pinheiro - UFRJ</div>

                            <div className="schedule-place">Tenda</div>
                            <div className="schedule-session-title">Visões sobre a bicicleta</div>
                            O uso da bicicleta como transporte em cidades do interior do Ceará.
                            <div className="schedule-talk-author">Clivia Kellen Almeida Silva - Ciclanas Fortaleza</div>
                            Pedalino vê o mundo
                            <div className="schedule-talk-author">Claudio de Moura Sobral - Cicloação Recife </div>
                        </div>

                        <div className="schedule-time">16:30 às 17:00</div>
                        <div className="schedule-timebox">
                            <div className="schedule-place">Auditório</div>
                            <div className="schedule-session-title">Entrega prêmio A Promoção da Mobilidade por Bicicletas no Brasi</div>
                            <div className="schedule-talk-author">Zé Lobo - Transporte Ativo</div>
                        </div>

                        <div className="schedule-time">17:00 às 17:45</div>
                        <div className="schedule-timebox">
                            <div className="schedule-place">Auditório</div>
                            <div className="schedule-session-title">Palestra Magna Clarisse Linke – ITDP Brasil</div>
                        </div>
                    </div>
                }
                
                {this.state.value === 2 &&
                    <div>
                        {/*
                        <div className="schedule-date">Domingo dia 10 de junho</div>. */}

                        <div className="schedule-time">10:20 às 13:10</div>
                        <div className="schedule-timebox">
                            <div className="schedule-place">Auditório</div>
                            <div className="schedule-session-title">Assembleia Geral UCB</div>
                            UCB
                        </div>

                        <div className="schedule-time">13:10 às 14:30</div>
                        <div className="schedule-timebox">
                        </div>

                        <div className="schedule-time">14:30 às 15:20</div>
                        <div className="schedule-timebox">
                            <div className="schedule-place">Átrio </div>
                            <div className="schedule-session-title">Bicicleta para uma cidade sensível</div>
                            <div className="schedule-talk-author">Sheila Hempkemeyer - ABC - Associação Blumenauense Pró-Ciclovias</div>

                            <div className="schedule-place">Auditório </div>
                            <div className="schedule-session-title">Paradigmas do Século XXI</div>
                            <div className="schedule-talk-author">Renata Falzoni – André Soares – Zé Lobo. Moderação Fernando Barcellos</div>

                            <div className="schedule-place">Observatório</div>
                            <div className="schedule-session-title">Pesquisa Nacional de Avaliação da Ciclabilidade</div>
                            <div className="schedule-talk-author">Gláucia Pereira e Yuriê Baptista</div>
                            
                            <div className="schedule-place">Terreiro</div>
                            <div className="schedule-talk-author">Avaliações Cicloviárias - Resultados</div>
                            O Índice de Desenvolvimento Cicloviário IDE
                            Ciclo Região Metropolitana do Recife
                            <div className="schedule-talk-author">Daniel Valença - AMECICLO</div>

                            <div className="schedule-place">Tenda</div>
                            <div className="schedule-session-title">Mecânica para Mulheres (14:30 às 16:20)</div>
                            Coordenação Tassia Furtado Oficinas de mecânica, problemas cotidianos Angela Soler Troca de dicas sobre mecânica, em uma
                            linguagem de mulher para mulher
                            <div className="schedule-talk-author">Marcella Olinto - Garupa</div>
                        </div>

                        <div className="schedule-time">15:30 às 16:30</div>
                        <div className="schedule-timebox">
                            <div className="schedule-place">Auditório </div>
                            <div className="schedule-session-title">Palestra Magna Ricardo Martins – Roda Mundo</div>
                        </div>

                        <div className="schedule-time">16:30 às 17:45</div>
                        <div className="schedule-timebox">
                            <div className="schedule-place">Auditório</div>
                            <div className="schedule-session-title">Plenária Final Bicicultura & Encerramento e Escolha Cidade Sede 2020</div>
                            <div className="schedule-talk-author">UCB</div>
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