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

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
});

const styles = {
  root: {
    flexGrow: 1,
    fontFamily: 'Nunito Sans'
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

function App(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Bicicultura 2018
          </Typography>
          </Toolbar>
        </AppBar>

        <Button className={classes.actionButton} variant="fab" color="secondary" aria-label="add">
          <SearchIcon />
        </Button>



        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="heading">
              Sexta-Feira dia 8 de junho
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>10:20 às 11:10</p>
              <p>Observatório</p>
                <p>Mapeamento de como anda a pesquisa sobre a bicicleta no Brasil</p>
                <p>UCB - Yuriê Baptista - UCB GT de pesquisa</p>
                <p>Terreiro</p>
                <p>O uso da bicicleta e seu impacto na saúde pública.</p>
                <p>John Fontenele Araujo – ACIRN - Associação de Ciclista do Rio Grande do Norte</p>
                <p>Tenda</p>
              <p>Ciclo Orçamentário para a ciclomobilidade no município do Rio de Janeiro</p>
                <p>Análise das leis e dotação orçamentária para a ciclomobilidade no Rio de Janeiro</p>
                <p>Ciclo Orçamentário</p>
                <p>Carolina Queiroz - MobiRio</p>
              <p>11:20 às 12:10	</p>
              <p>Átrio</p>
                <p>Ciclomensageria o cotodiano 	Tássia Furtado </p>
                <p>Observatório</p>
                <p>Assessoramento Jurídico para OSCs em prol da Ciclomobilidade</p>
                <p>UCB - Leonardo Andrade Aragão - UCB GT Jurídico</p>
                <p>Terreiro </p>
              <p>Políticas de redução de velocidade</p>
                <p>Medidas de segurança para ciclistas e pedestres - redução de velocidade</p>
                <p>Aplicação de dinâmicas de planejamento sobre advocacy</p>
                <p>Flavio Soares, Aline Cavalcante e Ana Carolina Nunes - Ciclocidade</p>
              <p>Tenda</p>
              <p>Bicicleta na Auto-Escola  e no conteúdo escolar</p>
              <p>Ciclomobilidade para instrutores de auto-escolas</p>
              <p>Pedro Daniel Amaral Arruda - CENTEC - Centro de Ensino Técnico de Trânsito CWB</p>
              <p>Projeto Conhecer Pedalando</p>
              <p>Possibilidades de inserção da bicicleta como conteúdo escolar</p>
              <p>Bruno Wilwert Tomio - Conhecer Pedalando</p>
              <p>12:20 às 13:10</p>
                <p>Observatório</p>
                <p>Como incidir pela bicicleta sobre o poder legislativo</p>
                <p>UCB - Milvo Juliano Rossarola Júnior – UCB GT Políticas Públicas</p>
                <p>Terreiro  	Avaliações Cicloviárias</p>
                <p>O Índice de Desenvolvimento Cicloviário IDECiclo Região Metropolitana do Recife</p>
                <p>Daniel Valença - AMECICLO</p>
                <p>Nova proposta metodológica de avaliação de vias ciclísticas.</p>
                <p>Fabiano Faga Pacheco – AMOBICI</p>
              <p>Tenda</p>
              <p>Bicicleta - Educação Social e Incentivo</p>
              <p>Bike na Obra</p>
              <p>Murilo Rodrigues - Bike Anjo Belém</p>
              <p>Destinação de Bicicletas roubadas e recuperadas</p>
                <p>Mauro Soares Tavares - Programa Rio - Estado da Bicicleta/SETRANS RJ</p>
              <p>13:10 às 14:30</p>
              <p>Intervalo</p>
              <p>14:30 às 15:20</p>
              <p>Observatório</p>
                <p>CICLO CRIATIVO - Empreendedorismo & Bicicleta</p>
                <p>O que ciclistas, urbanista, designer e ativista tem em comum?</p>
                <p>Como o Design pode incentivar a Mobilidade Ativa?</p>
                <p>Yasmim Reck - Bike Fácil</p>
                <p>Terreiro </p>
                <p>Politicas e Planos de Mobilidade</p>
                <p>Avenida Brasil 	Débora Reis Fontes - UNISUAM</p>
                <p>Plano de Mobilidade Ativa do Distrito Federal - PMA-DF 	Priscila Miti Yajima – SEMOB - DF</p>
                <p>Diretrizes para política pública de Mobilidade Sustentável, o Programa Ciclovida 	Silvana Nakamori – UFPR / CicloIguaçu</p>
              <p>Tenda</p>
              <p>Bicicleta: Cultura e Arte</p>
              <p>Giovani Rafael Seibel - COLMEIA - Coletivo Laboral Multicultural</p>
              <p>15:30 às 16:20</p>
              <p>Átrio</p>
              <p>Pedestres em pauta</p>
              <p>Moderação Thatiana Murillo – Caminha Rio</p>
                <p>Multas a pedestres e ciclistas - Como reagir? 	Glaucia Pereira e Ana Carolina Nunes – Cidadeapé</p>
                <p>Super-Ando</p>
                <p>Super-Ando</p>
                <p>Observatório</p>
              <p>Bicicleta na Escola</p>
              <p>Ana Destri - AMOBICI</p>
                <p>Terreiro </p>
                <p>Vila Velha, um panorama</p>
                <p>Mudanças da cidade e as percepções que elas proporcionam</p>
                <p>Fernando Braga – Ciclistas Urbanos Capixabas</p>
                <p>Estacionamento facilita o acesso de quem adota a bicicleta como meio de transporte</p>
                <p>Pollyana Martins – Ciclistas Vila-Velhenses</p>
              <p>Tenda</p>
              <p>Bicicletários Quantidade e Qualidade</p>
              <p>Como ampliar os bicicletários adequados na sua cidade</p>
              <p>Felipe Alves - UCB GT Infraestrutura</p>
              <p>É possível estacionar a bicicleta “de boa”?</p>
              <p>Hannah Kny – Bike de Boa</p>
              <p>16:30 às 17:30</p>
                <p>Observatório</p>
              <p>Compartilhamento de Bicicletas</p>
              <p>Moderação Rodrigo Vitório -TA</p>
                <p>Coolabici</p>
              <p>Gheysa Caroline Prado – UFPR Marina Caus dos Santos - Thaisa Meurer Piovezani - Mariana de Souza - Fernando Reinaldo Contin Falkiewicz</p>
              <p>Bicicletar Corporativo</p>
              <p>Aurélie Dos Santos - Serttel</p>
                <p>Terreiro </p>
                <p>Conceito dos Jogos de Bicicleta</p>
              <p>Ana Carboni – Bike Anjo Niterói</p>
              <p>Tenda </p>
              <p>O olhar através da bicicleta</p>
              <p>Pedal da ACERGS</p>
              <p>Rafael Santos – ACERGS Associação dos Cegos do Estado do Rio Grande do Sul</p>
              <p>ODKV</p>
              <p>Maria Aline De Oliveira Gouveia e Barbara de Vasconcelos Barbosa - - Bike Anjos Campina Grande e Recife</p>
              <p></p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="heading">
              Sábado dia 9 de junho
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>10:20 às 11:10</p>
              <p>Átrio</p>
                <p>Mulheres e Mobilidade</p>
                <p>Moderação Aline Cavalcante - Ciclocidade</p>
                <p>Pedala, mana!</p>
                <p>Melissa Noguchi e Lorena Costa– Bike Anjo Belém</p>
                <p>Festival “100Gurias100Medo”</p>
                <p>Naone Lopes e Caro Pierro  – 100gurias100medo</p>
                <p>Mulheres Caminhantes, auditoria de segurança de gênero e caminhabilidade</p>
                <p>Ana Carolina Nunes e Leticia Sabino – SampaPé</p>
                <p>Auditório</p>
                <p>Contagens de ciclistas: monitoramento do uso de bicicletas em escala municipal</p>
                <p>Thiago Benicchio – ITDP Brasil</p>
              <p>Observatório</p>
              <p>Cicloativismo e ações politicas</p>
              <p>Moderação Felipe Alves - UCB</p>
                <p>Prefeitura de Curitiba extinguiu infraestruturas "Calçadas Verdes"</p>
                <p>Joao Pedro Bazzo Vieira - Cicloiguaçu</p>
              <p>Memória e historia do cicloativismo no Brasil	</p>
              <p>Fernando Barcellos – UCB GT Pesquisa</p>
              <p>Contexto atual e cicloativismo</p>
              <p>Lígia Pereira - AMECICLO</p>
                <p>Tenda</p>
                <p>Como Promover a Mobilidade Ativa nas Eleições de 2018</p>
                <p>André Geraldo Soares e Ana Carolina Nunes - UCB e  SampaPé</p>
              <p></p>
              <p></p>
              <p>11:20 as 12:10</p>
                <p>Auditório</p>
              <p>Mulheres no Cicloativismo   (11:20 às 13:10)               Mapeamento da participação de mulheres no movimento cicloativista 	Roberta Raquel - UFSC</p>
              <p>Dificuldades e facilidades de estar a frente de uma diretoria anterior masculina</p>
              <p>Leis que não são em prol da segurança e da vida das mulheres</p>
              <p>Aspásia Mariana - UCB GT Gênero / Ciclovida Fortaleza</p>
                <p>Observatório	 </p>
                <p>Ciclomobilidade na Agenda Politica Niteroi</p>
              <p>Fátima Priscila Morela Edra - Universidade Federal Fluminense – UFF</p>
              <p>Tenda</p>
              <p>Soluções para a bicicleta</p>
              <p>Bicicletaria Cultural</p>
              <p>Patricia Valverde – Bicicletaria Cultural</p>
              <p>Estações de Reparos Rápidos de Bicicleta</p>
              <p>Paulo Aguiar – Pedala Manaus</p>
              <p>12:20 às 13:10</p>
                <p>Observatório</p>
              <p>Campanhas Educativas e Motivacionais</p>
              <p>Campanha "No Trânsito Eu Compartilho Respeito"</p>
              <p>Boca no Trombone - Palestras em empresas privadas e públicas para um público não ciclista</p>
              <p>Nadia Aguiar – Pedala Manaus</p>
              <p>Eu Vou de Bicicleta</p>
              <p>Everaldo Moreira Fabrício - BikeMotiva</p>
                <p>Tenda</p>
                <p>Ações de Bike em Pirenópolis</p>
                <p>Larissa Cantarelli – Bike Anjo Pirenópolis</p>
              <p>13:10 às 14:30</p>
              <p>Intervalo</p>
              <p>14:30 às 15:20</p>
                <p>Átrio </p>
              <p>Mobilidade de Baixo Carbono</p>
                <p>Como a bicicleta e pode contribuir com um futuro de baixo carbono</p>
                <p>Aline Cavalcante e João Lacerda – Coalizão Clima e Mobilidade</p>
              <p>Auditório </p>
              <p>Cicloturismo</p>
              <p>Moderação Ricardo Martins - RodaMundo</p>
                <p>Equipamentos para Viagens de Bicicleta</p>
              <p>Fábio Eduardo da Silva - Clube de Cicloturismo do Brasil</p>
              <p>De ocupação á ocupação uma pedalada Brasília Olinda.</p>
              <p>Mateus Lima - Bicicentro Comunitário</p>
              <p>Viajar sola</p>
              <p>María Paz Castillo - Pedalea x la calle- Chile</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p>Observatório</p>
              <p>Ativismo e Academia</p>
              <p>Moderação Vivan Garelli - PPGA UFF</p>
              <p>Processo de concepção e implementação da ciclovia da Uni.Fed. de Itajubá</p>
              <p>Pedro Torres de Melo Pedrosa - UNIFEI</p>
              <p>Movimentos sociais contemporâneos e inclusão: lições do cicloativismo no Rio.</p>
              <p>Naomi Orton – PUC Rio</p>
              <p>Ciclomobilidade: Avaliação e Qualificação do Prog. Ciclo da RMGV- Vila Velha – ES</p>
              <p>Pollyana Martins Rodrigues – Ciclistas Vila-Velhenses</p>
              <p>Ciclorrotas de Aracaju</p>
              <p>Sayuri Silva Dantas de Oliveira – Associação Ciclo Urbano</p>
                <p>Tenda</p>
                <p>Indicadores sobre o respeito à faixa de pedestres em Brasília</p>
                <p>Jonas Bertucci – Rodas da Paz</p>
              <p>15:30 às 16:20</p>
                <p>Auditório </p>
                <p>Cicloturismo Roteiros e Estudos</p>
              <p>Moderação Ricardo Martins - RodaMundo</p>
              <p>Análise comparativa entre os estudos internacionais e nacionais Cicloturismo</p>
              <p>Fernanda Monteiro Lobão de Deus e Fátima Priscila Edra -  UFF</p>
                <p>Papo sobre Circuitos de Cicloturismo</p>
                <p>Ivo Leonardo Schmitz - Clube de Cicloturismo do Brasil</p>
              <p>Criação de roteiros de cicloturismo urbano</p>
              <p>Gustavo Carvalho - Kuritibike</p>
              <p>Observatório</p>
              <p>Pesquisas Ciclomobilidade</p>
              <p>Moderação Rene Fernandes - FGV</p>
              <p>Donde vem, pronde vão - Cruzamento de pesquisas em Recife</p>
              <p>Daniel Valença - AMECICLO</p>
              <p>Simulador de vantagens da mobilidade ativa</p>
              <p>José Carlos Assunção Belotto – Ciclovida / UFPR</p>
              <p>Como diferentes aspectos da infraestrutura influenciam ciclistas.</p>
              <p>Joao Pedro Bazzo Vieira - CicloIguaçu</p>
              <p>Tarauacá Cidade das Bicicletas</p>
              <p>Valden Rocha - Bike Anjo Rio Branco</p>
              <p>Analisar a prática cultural do andar de bicicleta na Cidade do Rio de Janeiro</p>
              <p>Denise Pinheiro - UFRJ</p>
                <p>Tenda</p>
                <p>Visões sobre a bicicleta</p>
                <p>O uso da bicicleta como transporte em cidades do interior do Ceará.</p>
                <p>Clivia Kellen Almeida Silva - Ciclanas Fortaleza</p>
                <p>Pedalino vê o mundo</p>
                <p>Claudio de Moura Sobral - Cicloação Recife	</p>
              <p>16:30 às 17:00</p>
                <p>Auditório</p>
              <p>Entrega prêmio A Promoção da Mobilidade por Bicicletas no Brasil 2018 Zé Lobo - Transporte Ativo</p>
              <p>17:00 às 17:45</p>
                <p>Auditório</p>
                <p>Palestra Magna Clarisse Linke – ITDP Brasil</p>
              <p></p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="heading">
              Domingo dia 10 de junho
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>10:20 às 13:10</p>
                <p>Auditório</p>
                <p>Assembleia Geral UCB</p>
              <p>UCB</p>
              <p>13:10 às 14:30</p>
              <p>Intervalo</p>
              <p>14:30 às 15:20</p>
                <p>Átrio </p>
              <p>Bicicleta para uma cidade sensível</p>
              <p>Sheila Hempkemeyer - ABC - Associação Blumenauense Pró-Ciclovias</p>
              <p>Auditório </p>
              <p>Paradigmas do Século XXI</p>
              <p>Renata Falzoni – André Soares – Zé Lobo. Moderação Fernando Barcellos</p>
              <p>Observatório</p>
              <p>Pesquisa Nacional de Avaliação da Ciclabilidade</p>
              <p>Gláucia Pereira e Yuriê Baptista</p>
              <p>Terreiro</p>
                <p>Avaliações Cicloviárias - Resultados</p>
                <p>O Índice de Desenvolvimento Cicloviário IDECiclo Região Metropolitana do Recife</p>
                <p>Daniel Valença - AMECICLO</p>
              <p>Tenda</p>
              <p>Mecânica para Mulheres   (14:30 às 16:20)</p>
              <p>Coordenação Tassia Furtado</p>
                <p>Oficinas de mecânica, problemas cotidianos</p>
              <p>Angela Soler</p>
                <p>Troca de dicas sobre mecânica, em uma linguagem de mulher para mulher</p>
                <p>Marcella Olinto - Garupa</p>
              <p>15:30 às 16:30</p>
                <p>Auditório </p>
                <p>Palestra Magna Ricardo Martins – Roda Mundo</p>
              <p>16:30 às 17:45</p>
                <p>Auditório</p>
                <p>Plenária Final Bicicultura &  Encerramento e Escolha Cidade Sede 2020</p>
              <p>UCB</p>
              <p></p>
              
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);