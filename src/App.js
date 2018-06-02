import React, { Component } from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
// import SearchIcon from '@material-ui/icons/Search';
// import TimeIcon from '@material-ui/icons/AccessTime';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';


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
  typography: {
    // Use the system font.
    fontFamily: 'Roboto, Arial, sans-serif'
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
};

function AddToHomeScreenIcon(props) {
    return (
        <SvgIcon {...props}>
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M18 1.01L8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41z" />
            <path fill="none" d="M0 0h24v24H0V0z" />
        </SvgIcon>
    );
}

class App extends React.Component {
  constructor() {
    super();

    if (navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) {
      this.showPWAButton = false;
    } else {
      this.showPWAButton = true;
    }
  }

  state = {
    value: 0,
    dialogOpen: false
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  onAddToHomeScreenBtnClick = () => {
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };


  render() {
    const { classes } = this.props;

    const MOBILE_MAX_WIDTH = '430px';
    const isMobile = window.matchMedia && window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH})`).matches;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />

          <AppBar position="static">
            <Toolbar>
              {/* <IconButton className={classes.menuButton} color="inherit" onClick={this.onMenuBtnClick}>
                <MenuIcon />
              </IconButton> */}

              <Typography variant="title" color="inherit" className={classes.flex}>
                Bicicultura 2018
              </Typography>

              { this.showPWAButton &&
                <IconButton color="inherit" onClick={this.onAddToHomeScreenBtnClick}>
                  {/* <SearchIcon /> */}
                  <AddToHomeScreenIcon />
                </IconButton>
              }
            </Toolbar>
          </AppBar>

          
          <Dialog
            open={this.state.dialogOpen}
            fullScreen={isMobile}
          >
            <DialogTitle>
              Como instalar o aplicativo
            </DialogTitle>

            <DialogContent>
              <DialogContentText>
                Este é um Web App, que é melhor do que um App: você não precisa instalá-lo, é só acessar direto 
                pelo navegador!
              </DialogContentText>
              <DialogContentText>
                Você pode adicionar um atalho para este app na tela inicial do seu
                 celular, é só escolher o seu navegador abaixo pra ver como fazer:
              </DialogContentText>
               <div className={classes.root}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <img src="/icon_browser_chrome.png"/> Chrome
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <ol>
                      <li>Pressione o botão de menu ⋮ no canto superior direito do navegador.</li>
                      <li>Selecione "Adicionar à tela inicial".</li>
                    </ol>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <img src="/icon_browser_safari.png"/> Safari
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails> 
                    <ol>
                      <li>Na barra de ícones na parte de baixo da tela, selecione o ícone do meio de compartilhar (o quadradinho com uma seta saindo dele).</li>
                      <li>Selecione "Tela de Início".</li>
                    </ol>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <img src="/icon_browser_firefox.png"/> Firefox
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <ol>
                      <li>Matenha pressionado o endereço na Barra de Endereço por alguns segundos</li>
                      <li>Selecione "Adicionar à tela inicial".</li>
                    </ol>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                
              </div>
            </DialogContent>

            <DialogActions>
              <Button onClick={this.handleDialogClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>

          <Paper className={classes.root + ' tab-bar'}>
              <Tabs
              value={this.state.value}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              >
                  <Tab label="Sexta" />
                  <Tab label="Sábado" />
                  <Tab label="Domingo" />
              </Tabs>
          </Paper>

          <div className="schedule">

            {this.state.value === 0 &&
                <div>
                    {/* <div className="schedule-date">Sexta-Feira dia 8 de junho</div> */}

                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">10</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">11</span>
                                <span className="schedule-timebox--header-m">10</span>
                            </span>

                            {/* <div className="schedule-happening-now-badge">Agora!</div> */}
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Mapeamento de como anda a pesquisa sobre a bicicleta no Brasil</div>
                            <div className="schedule-author">UCB - Yuriê Baptista - UCB GT de pesquisa</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>
                            <div className="schedule-session">O uso da bicicleta e seu impacto na saúde pública.</div>
                            <div className="schedule-author">John Fontenele Araujo – ACIRN - Associação de Ciclistas do Rio Grande do Norte</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Ciclo Orçamentário para a ciclomobilidade no município do Rio de Janeiro</div>
                            <div className="schedule-talk">Análise das leis e dotação orçamentária para a ciclomobilidade no Rio de Janeiro</div>
                            <div className="schedule-author">Carolina Queiroz - MobiRio</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Ciclo Orçamentário</div>
                            <div className="schedule-author">Carolina Queiroz - MobiRio</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>

                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">11</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">12</span>
                                <span className="schedule-timebox--header-m">10</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-atrio">
                                <span className="schedule-place--name">Átrio</span>
                            </div>
                            <div className="schedule-session">Ciclomensageria o cotidiano</div>
                            <div className="schedule-author">Tássia Furtado</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Assessoramento Jurídico para OSCs em prol da Ciclomobilidade</div>
                            <div className="schedule-author">UCB - Leonardo Andrade Aragão - UCB GT Jurídico</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>
                            <div className="schedule-session">Políticas de redução de velocidade</div>
                            <div className="schedule-talk">Medidas de segurança para ciclistas e pedestres - redução de velocidade</div>
                            <div className="schedule-author">Flavio Soares, Aline Cavalcante e Ana Carolina Nunes - Ciclocidade</div>
                            {/* <StarBorderIcon/> */}
                            <div className="schedule-talk">Aplicação de dinâmicas de planejamento sobre advocacy</div>
                            <div className="schedule-author">Flavio Soares, Aline Cavalcante e Ana Carolina Nunes - Ciclocidade</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Bicicleta na Auto-Escola e no conteúdo escolar</div>
                            <div className="schedule-talk">Ciclomobilidade para instrutores de auto-escolas</div>
                            <div className="schedule-author">Pedro Daniel Amaral Arruda - CENTEC - Centro de Ensino Técnico de Trânsito CWB</div>
                            {/* <StarBorderIcon/> */}
                            <div className="schedule-talk">Projeto Conhecer Pedalando - Possibilidades de inserção da bicicleta como conteúdo escolar</div>
                            <div className="schedule-author">Bruno Wilwert Tomio - Conhecer Pedalando</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>

                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">12</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">13</span>
                                <span className="schedule-timebox--header-m">10</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Como incidir pela bicicleta sobre o poder legislativo</div>
                            <div className="schedule-author">UCB - Milvo Juliano Rossarola Júnior – UCB GT Políticas Públicas</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>
                            <div className="schedule-session">Avaliações Cicloviárias</div>
                            <div className="schedule-talk">O Índice de Desenvolvimento Cicloviário IDECiclo Região Metropolitana do Recife</div>
                            <div className="schedule-author">Daniel Valença - AMECICLO</div>
                            {/* <StarBorderIcon/> */}
                            <div className="schedule-talk">Nova proposta metodológica de avaliação de vias ciclísticas. Fabiano Faga Pacheco – AMOBICI</div>
                            <div className="schedule-author">Fabiano Faga Pacheco – AMOBICI</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Bicicleta - Educação Social e Incentivo</div>
                            <div className="schedule-talk">Bike na Obra</div>
                            <div className="schedule-author">Murilo Rodrigues - Bike Anjo Belém</div>
                            {/* <StarBorderIcon/> */}
                            <div className="schedule-talk">Destinação de Bicicletas roubadas e recuperadas</div>
                            <div className="schedule-author">Mauro Soares Tavares - Programa Rio - Estado da Bicicleta/SETRANS RJ</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">13</span>
                                <span className="schedule-timebox--header-m">10</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">14</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-interval">Intervalo</div>
                        </div>
                    </div>

                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">14</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">15</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">CICLO CRIATIVO - Empreendedorismo & Bicicleta</div>
                            <div className="schedule-talk">O que ciclistas, urbanista, designer e ativista tem em comum? Como o Design pode incentivar a Mobilidade Ativa?</div>
                            <div className="schedule-author">Yasmim Reck - Bike Fácil</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>

                            <div className="schedule-session">Politicas e Planos de Mobilidade</div>

                            <div className="schedule-talk">Projeto Parque Brasil</div>
                            <div className="schedule-author">Débora Reis Fontes – CSC-RJ e Andrea Borges - UNISUAM</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Plano de Mobilidade Ativa do Distrito Federal - PMA-DF</div>
                            <div className="schedule-author">Priscila Miti Yajima – SEMOB - DF</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Diretrizes para política pública de Mobilidade Sustentável, o Programa Ciclovida</div>
                            <div className="schedule-author">Silvana Nakamori – UFPR / CicloIguaçu</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Bicicleta: Cultura e Arte</div>

                            <div className="schedule-talk">Bicicleta: Cultura e Arte</div>
                            <div className="schedule-author">Giovani Rafael Seibel - COLMEIA - Coletivo Laboral Multicultural</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">A Experiência do Pedal Sonoro</div>
                            <div className="schedule-author">Luís Araujo – Pedal Sonoro</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">15</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">16</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-atrio">
                                <span className="schedule-place--name">Átrio</span>
                            </div>
                            <div className="schedule-session">Pedestres em pauta</div>
                            <div className="schedule-author">Moderação: Thatiana Murillo – Caminha Rio</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Multas a pedestres e ciclistas - Como reagir?</div>
                            <div className="schedule-author">Glaucia Pereira e Ana Carolina Nunes – Cidadeapé</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Super-Ando</div>
                            <div className="schedule-author">Super-Ando</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>

                            <div className="schedule-talk">Bicicleta na Escola</div>
                            <div className="schedule-author">Ana Destri - AMOBICI</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>

                            <div className="schedule-session">Vila Velha, um panorama</div>

                            <div className="schedule-talk">Mudanças da cidade e as percepções que elas proporcionam</div>
                            <div className="schedule-author">Fernando Braga – Ciclistas Urbanos Capixabas</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Estacionamento facilita o acesso de quem adota a bicicleta como meio de transporte</div>
                            <div className="schedule-author">Pollyana Martins – Ciclistas Vila-Velhenses</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>

                            <div className="schedule-session">Bicicletários Quantidade e Qualidade</div>

                            <div className="schedule-talk">Como ampliar os bicicletários adequados na sua cidade</div>
                            <div className="schedule-author">Felipe Alves - UCB GT Infraestrutura</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">É possível estacionar a bicicleta "de boa"?</div>
                            <div className="schedule-author">Hannah Kny e Cristiano Dalbem – Bike de Boa</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>

                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">16</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">17</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Compartilhamento de Bicicletas</div>
                            <div className="schedule-author">Moderação: Rodrigo Vitório - TA</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Coolabici</div>
                            <div className="schedule-author">
                            {/* <StarBorderIcon/> */}
                                Gheysa Caroline Prado - UFPR
                                Marina Caus dos Santos - Thaisa Meurer Piovezani - Mariana de Souza - Fernando Reinaldo Contin Falkiewicz
                            </div>

                            <div className="schedule-talk">Bicicletar Corporativo</div>
                            <div className="schedule-author">Aurélie Dos Santos - Serttel </div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>

                            <div className="schedule-talk">Conceito dos Jogos de Bicicleta</div>
                            <div className="schedule-author">Ana Carboni – Bike Anjo Niterói</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>

                            <div className="schedule-session">O olhar através da bicicleta</div>
                            <div className="schedule-talk">Pedal da ACERGS</div>
                            <div className="schedule-author">Rafael Santos – ACERGS Associação dos Cegos do Estado do Rio Grande do Sul</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">ODKV</div>
                            <div className="schedule-author">Maria Aline De Oliveira Gouveia e Barbara de Vasconcelos Barbosa - Bike Anjos Campina Grande e Recife</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>
                </div>
            }
            {this.state.value === 1 &&
                <div>
                    {/*
                    <div className="schedule-date">Sábado dia 9 de junho</div> */}

                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">10</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">11</span>
                                <span className="schedule-timebox--header-m">10</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-atrio">
                                <span className="schedule-place--name">Átrio</span>
                            </div>
                            <div className="schedule-session">Mulheres e Mobilidade</div>
                            <div className="schedule-author">Moderação: Aline Cavalcante - Ciclocidade</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Pedala, mana!</div>
                            <div className="schedule-author">Melissa Noguchi e Lorena Costa– Bike Anjo Belém</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Festival "100Gurias100Medo"</div>
                            <div className="schedule-author">Naone Lopes e Caro Pierro – 100gurias100medo</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Mulheres Caminhantes, auditoria de segurança de gênero e caminhabilidade</div>
                            <div className="schedule-author">Ana Carolina Nunes e Leticia Sabino – SampaPé</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Contagens de ciclistas: monitoramento do uso de bicicletas em escala municipal</div>
                            <div className="schedule-author">Thiago Benicchio – ITDP Brasil</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Cicloativismo e ações políticas</div>
                            <div className="schedule-author">Moderação: Felipe Alves - UCB</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Prefeitura de Curitiba extinguiu infraestruturas "Calçadas Verdes"</div>
                            <div className="schedule-author">Joao Pedro Bazzo Vieira - Cicloiguaçu</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Memória e historia do cicloativismo no Brasil</div>
                            <div className="schedule-author">Fernando Barcellos – UCB GT Pesquisa</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Contexto atual e cicloativismo</div>
                            <div className="schedule-author">Lígia Pereira - AMECICLO</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Como Promover a Mobilidade Ativa nas Eleições de 2018</div>
                            <div className="schedule-author">André Geraldo Soares e Ana Carolina Nunes - UCB e SampaPé</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">11</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">12</span>
                                <span className="schedule-timebox--header-m">10</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Mulheres no Cicloativismo (11:20 — 13:10)</div>
                            <div className="schedule-talk">Mapeamento da participação de mulheres no movimento cicloativista</div>
                            <div className="schedule-author">Roberta Raquel - UFSC</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Dificuldades e facilidades de estar a frente de uma diretoria anterior masculina</div>
                            <div className="schedule-author">Aspásia Mariana - UCB GT Gênero / Ciclovida Fortaleza</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Leis que não são em prol da segurança e da vida das mulheres</div>
                            <div className="schedule-author">Aspásia Mariana - UCB GT Gênero / Ciclovida Fortaleza</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Ciclomobilidade na Agenda Politica Niteroi</div>
                            <div className="schedule-author">Fátima Priscila Morela Edra - Universidade Federal Fluminense – UFF e Sérgio Franco – Mobilidade Niterói</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Soluções para a bicicleta</div>
                            <div className="schedule-talk">Bicicletaria Cultural</div>
                            <div className="schedule-author">Patricia Valverde – Bicicletaria Cultural</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Estações de Reparos Rápidos de Bicicleta</div>
                            <div className="schedule-author">Paulo Aguiar – Pedala Manaus</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">12</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">13</span>
                                <span className="schedule-timebox--header-m">10</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Campanhas Educativas e Motivacionais</div>
                            <div className="schedule-talk">Campanha "No Trânsito Eu Compartilho Respeito"</div>

                            <div className="schedule-talk">Boca no Trombone - Palestras em empresas privadas e públicas para um público não ciclista</div>
                            <div className="schedule-author">Nadia Aguiar – Pedala Manaus</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Eu Vou de Bicicleta</div>
                            <div className="schedule-author">Everaldo Moreira Fabrício - BikeMotiva</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">ções de Bike em Pirenópolis</div>
                            <div className="schedule-author">Larissa Cantarelli – Bike Anjo Pirenópolis</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">13</span>
                                <span className="schedule-timebox--header-m">10</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">14</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-interval">Intervalo</div>
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">14</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">15</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-atrio">
                                <span className="schedule-place--name">Átrio</span>
                            </div>
                            <div className="schedule-session">Mobilidade de Baixo Carbono</div>
                            <div className="schedule-talk">Como a bicicleta e pode contribuir com um futuro de baixo carbono</div>
                            <div className="schedule-author">Aline Cavalcante e João Lacerda – Coalizão Clima e Mobilidade e Ana Abreu - Engajamundo</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Cicloturismo</div>
                            <div className="schedule-author">Moderação: Ricardo Martins - RodaMundo</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Equipamentos para Viagens de Bicicleta</div>
                            <div className="schedule-author">Fábio Eduardo da Silva - Clube de Cicloturismo do Brasil</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">De ocupação a ocupação uma pedalada Brasília Olinda</div>
                            <div className="schedule-author">Mateus Lima - Bicicentro Comunitário</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Viajar sola</div>
                            <div className="schedule-author">María Paz Castillo - Pedalea x la calle - Chile</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Ativismo e Academia</div>
                            <div className="schedule-author">Moderação: Vivan Garelli - PPGA UFF</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Processo de concepção e implementação da ciclovia da Uni.Fed. de Itajubá</div>
                            <div className="schedule-author">Pedro Torres de Melo Pedrosa - UNIFEI</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Movimentos sociais contemporâneos e inclusão: lições do cicloativismo no Rio</div>
                            <div className="schedule-author">Naomi Orton – PUC Rio</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Ciclomobilidade: Avaliação e Qualificação do Prog. Ciclo da RMGV- Vila Velha – ES</div>
                            <div className="schedule-author">Pollyana Martins Rodrigues – Ciclistas Vila-Velhenses</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Ciclorrotas de Aracaju</div>
                            <div className="schedule-author">Sayuri Silva Dantas de Oliveira – Associação Ciclo Urbano</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Indicadores sobre o respeito à faixa de pedestres em Brasília</div>
                            <div className="schedule-author">Jonas Bertucci – Rodas da Paz</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">15</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">16</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Cicloturimo Roteiros e Estudos</div>
                            <div className="schedule-author">Moderação: Ricardo Martins - RodaMundo</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Análise comparativa entre os estudos internacionais e nacionais Cicloturismo</div>
                            <div className="schedule-author">Fernanda Monteiro Lobão de Deus e Fátima Priscila Edra - UFF</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Papo sobre Circuitos de Cicloturismo</div>
                            <div className="schedule-author">Ivo Leonardo Schmitz - Clube de Cicloturismo do Brasil</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Criação de roteiros de cicloturismo urbano</div>
                            <div className="schedule-author">Gustavo Carvalho - Kuritibike</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Pesquisas Ciclomobilidade</div>
                            <div className="schedule-author">Moderação: Rene Fernandes - FGV</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Donde vem, pronde vão - Cruzamento de pesquisas em Recife</div>
                            <div className="schedule-author">Daniel Valença - AMECICLO</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Simulador de vantagens da mobilidade ativa</div>
                            <div className="schedule-author">José Carlos Assunção Belotto – Ciclovida / UFPR</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Como diferentes aspectos da infraestrutura influenciam ciclistas.</div>
                            <div className="schedule-author">Joao Pedro Bazzo Vieira - CicloIguaçu</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Tarauacá Cidade das Bicicletas</div>
                            <div className="schedule-author">Valden Rocha - Bike Anjo Rio Branco</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Analisar a prática cultural do andar de bicicleta na Cidade do Rio de Janeiro</div>
                            <div className="schedule-author">Denise Pinheiro - UFRJ</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Visões sobre a bicicleta</div>
                            <div className="schedule-talk">O uso da bicicleta como transporte em cidades do interior do Ceará.</div>
                            <div className="schedule-author">Clivia Kellen Almeida Silva - Ciclanas Fortaleza</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Pedalino vê o mundo</div>
                            <div className="schedule-author">Claudio de Moura Sobral - Cicloação Recife </div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">16</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">17</span>
                                <span className="schedule-timebox--header-m">00</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Entrega prêmio A Promoção da Mobilidade por Bicicletas no Brasi</div>
                            <div className="schedule-author">Zé Lobo - Transporte Ativo</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">17</span>
                                <span className="schedule-timebox--header-m">00</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">17</span>
                                <span className="schedule-timebox--header-m">45</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Palestra Magna Clarisse Linke – ITDP Brasil</div>
                        </div>
                    </div>
                </div>
            }

            {this.state.value === 2 &&
                <div>
                    {/*
                    <div className="schedule-date">Domingo dia 10 de junho</div>. */}

                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">10</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">13</span>
                                <span className="schedule-timebox--header-m">10</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Assembleia Geral UCB</div>
                            UCB
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">13</span>
                                <span className="schedule-timebox--header-m">10</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">14</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-interval">Intervalo</div>
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">14</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">15</span>
                                <span className="schedule-timebox--header-m">20</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-atrio">
                                <span className="schedule-place--name">Átrio</span>
                            </div>
                            <div className="schedule-session">Bicicleta para uma cidade sensível</div>
                            <div className="schedule-author">Sheila Hempkemeyer - ABC - Associação Blumenauense Pró-Ciclovias</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Paradigmas do Século XXI</div>
                            <div className="schedule-author">Renata Falzoni – André Soares – Zé Lobo. Moderação: Fernando Barcellos</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Pesquisa Nacional de Avaliação da Ciclabilidade</div>
                            <div className="schedule-author">Gláucia Pereira e Yuriê Baptista</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>
                            <div className="schedule-session">Avaliações Cicloviárias - Resultados</div>

                            <div className="schedule-talk">O Índice de Desenvolvimento Cicloviário IDECiclo Região Metropolitana do Recife</div>
                            <div className="schedule-author">Daniel Valença - AMECICLO</div>
                            {/* <StarBorderIcon/> */}


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Mecânica para Mulheres (14:30 — 16:20)</div>
                            <div className="schedule-author">Coordenação Tassia Furtado</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Oficinas de mecânica, problemas cotidianos</div>
                            <div className="schedule-author">Angela Soler</div>
                            {/* <StarBorderIcon/> */}

                            <div className="schedule-talk">Troca de dicas sobre mecânica, em uma linguagem de mulher para mulher</div>
                            <div className="schedule-author">Marcella Olinto - Garupa</div>
                            {/* <StarBorderIcon/> */}
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">15</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">16</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Palestra Magna Ricardo Martins – Roda Mundo</div>
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header">
                            <span className="schedule-timebox--header-start">
                                <span className="schedule-timebox--header-h">16</span>
                                <span className="schedule-timebox--header-m">30</span>
                            </span>
                            <span className="schedule-timebox--header-end">
                                <span className="schedule-timebox--header-h">17</span>
                                <span className="schedule-timebox--header-m">45</span>
                            </span>
                        </div>

                        <div className="schedule-timebox--content">
                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Plenária Final Bicicultura & Encerramento e Escolha Cidade Sede 2020</div>
                            <div className="schedule-author">UCB</div>
                            {/* <StarBorderIcon/> */}
                        </div>
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