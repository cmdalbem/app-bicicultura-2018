import React from 'react';
import './App.css';

import SimpleSnackbar from './SimpleSnackbar';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
// import SearchIcon from '@material-ui/icons/Search';
// import TimeIcon from '@material-ui/icons/AccessTime';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import MailIcon from '@material-ui/icons/Mail';
import LinkIcon from '@material-ui/icons/Link';
import PlaceIcon from '@material-ui/icons/Place';
import DateRangeIcon from '@material-ui/icons/DateRange';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';


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
    action: {
      main: '#4A4A4A'
    }
  },
  typography: {
    // Use the system font.
    fontFamily: 'Poppins, Roboto, Helvetica, Arial, sans-serif'
  },
});

const styles = {
    root: {
        flexGrow: 1,
        fontFamily: 'Poppins, Roboto, Helvetica, Arial, sans-serif'
    },
    appTitle: {
        flex: 1,
        fontWeight: 700,
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

    // Intercepts Progressive Web App event
    // source: https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/
    window.addEventListener('beforeinstallprompt', e => {
      // Prevents automatic banner
      // e.preventDefault();

      // Force to always prompt
      e.prompt();

      window.gtag('event', 'beforeinstallprompt - popped', {'event_category': 'PWA'});
      e.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === 'dismissed') {
          // User cancelled home screen install
          window.gtag('event', 'beforeinstallprompt - refused', {'event_category': 'PWA'});
        }
        else {
          // User added to home screen
          window.gtag('event', 'beforeinstallprompt - accepted', {'event_category': 'PWA'});
        }
      });
    });
    
    window.addEventListener('appinstalled', e => {
      window.gtag('event', 'appinstalled', {'event_category': 'PWA'});
    });

    window.addEventListener('pwa:newContent', e => {
      console.debug('pwa:newContent'); 

      this.notify(
            'Há uma versão mais nova do app! Recarregue a página para começar a usá-la.',
            {
                text: 'Recarregar',
                callback: () => { window.location.reload(); }
            }
        );
    });
    window.addEventListener('pwa:offlineReady', e => {
      console.debug('pwa:offlineReady');

      this.notify('Conteúdo disponível offline.');
    });
    window.addEventListener('pwa:offlineMode', e => {
      console.debug('pwa:offlineMode');

      this.notify('Você está offline.');
    });

    
    let initialTab = 0;
    const today = new Date().getDate();
    if (today === 8) {
        initialTab = 0;
    } else if (today === 9) {
        initialTab = 1;
    } else if (today === 10) {
        initialTab = 2;
    }
    
    this.state = {
        value: initialTab,
        isPwaDialogOpen: false,
        isInfoDialogOpen: false,
        snackbar: {
            isOpen: false
        }
    };
  }

  currentEventsCheckTimeout = null;

  notify = (message, cta) => {
    this.setState({
      snackbar: {
        isOpen: true,
        message: message,
        cta: cta
      }
    });
  };

  onAddToHomeScreenBtnClick = () => {
    this.setState({ isPwaDialogOpen: true });

    window.gtag('event', 'Clicked on Add To Homescreen icon');
  };
  
  onInfoBtnClick = () => {
    this.setState({ isInfoDialogOpen: true });

    window.gtag('event', 'Clicked on Info topbar button');
  };

  handleTabChange = (event, value) => {
    window.scrollTo(0, 0);
    this.setState({ value });
  };

  handleDialogClose = () => {
    this.setState({ 
        isPwaDialogOpen: false,
        isInfoDialogOpen: false
    });
  };

  handleSnackbarClose = (event, reason) => {
    this.setState({
      snackbar: {isOpen: false }
    });
  };

  onStarBtnClick = e => {
    console.debug(e);
  };

  checkCurrentEvents = (withScroll = false) => {
      console.debug('checkCurrentEvents');

      let allTimeBoxes = Array.from(document.querySelectorAll('.schedule-timebox--header'));
      let now = new Date();

      allTimeBoxes.forEach(el => {
          let start = el.getAttribute('data-start').split(':');
          let end = el.getAttribute('data-end').split(':');

          let startDate = new Date();
          startDate.setHours(start[0])
          startDate.setMinutes(start[1]);

          let endDate = new Date();
          endDate.setHours(end[0])
          endDate.setMinutes(end[1]);

          // Set date to current tab date
          startDate.setDate(8 + this.state.value);
          endDate.setDate(8 + this.state.value);

          console.debug(startDate);
          console.debug(endDate);

          if (now > startDate && now < endDate) {
              el.classList.add('schedule-happening-now-badge');
              
              if (withScroll) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start'} );
              }
          } else {
              el.classList.remove('schedule-happening-now-badge');
          }
      });
  };

  checkCurrentEventsRec = () => {
    this.checkCurrentEvents();
    
    if (this.currentEventsCheckTimeout) {
        clearTimeout(this.currentEventsCheckTimeout);    
    }
    this.currentEventsCheckTimeout = setTimeout(this.checkCurrentEventsRec, 60000);
  }

  componentDidUpdate = () => {
    this.checkCurrentEvents(true);
  };

  componentDidMount = () => {
    // We have to wait a little until everything is rendered
    setTimeout(this.checkCurrentEventsRec, 1000);
  }


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
              {/* <IconButton className={classes.menuButton} color="inherit" onClick={this.onMenuBtnClick} aria-label="Menu">
                <MenuIcon />
              </IconButton> */}

              <Typography variant="title" color="inherit" className={classes.appTitle}>
                BICICULTURA 2018
              </Typography>

                <IconButton color="inherit" onClick={this.onInfoBtnClick} aria-label="Informações">
                    <InfoIcon />
                </IconButton>

              { this.showPWAButton &&
                <IconButton color="inherit" onClick={this.onAddToHomeScreenBtnClick} aria-label="Adicionar à tela inicial">
                  <AddToHomeScreenIcon />
                </IconButton>
              }
            </Toolbar>
          </AppBar>

          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.snackbar.isOpen}
            autoHideDuration={6000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={
              <span id="message-id">
                {this.state.snackbar.message}
              </span>}
            action={[
                (this.state.snackbar.cta && 
                    <Button key="cta" color="secondary" size="small" onClick={this.state.snackbar.cta.callback}>
                        {this.state.snackbar.cta.text}
                    </Button>
                ),

                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={this.handleSnackbarClose}
                >
                <CloseIcon />
                </IconButton>,
            ]}
          />
          
          <Dialog
            open={this.state.isPwaDialogOpen}
            fullScreen={isMobile}
          >
            <DialogTitle>
              Como instalar o aplicativo
            </DialogTitle>

            <DialogContent>
              <div style={{textAlign: 'center'}}>
                <img alt="" src="./img/appicon-64x64.png" />
              </div>

              <DialogContentText>
                Este é um Web App, que é melhor do que um App normal: você não precisa instalá-lo, é só acessar direto 
                pelo navegador!
              </DialogContentText>
              <DialogContentText>
                Mas se quiser você pode adicionar um atalho na tela inicial do seu
                 celular. É só escolher o seu navegador abaixo pra ver como fazer:
              </DialogContentText>
               <div className={classes.root}>
                <br/>
                <ExpansionPanel
                  onChange={() => {window.gtag('event', 'HowToInstall - browser panel - Chrome');}}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <img alt="" src="./img/icon_browser_chrome.png"/> Chrome
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <ol>
                      <li>Pressione o botão de menu ⋮ no canto superior direito do navegador.</li>
                      <li>Selecione "Adicionar à tela inicial".</li>
                    </ol>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                  
                <ExpansionPanel
                  onChange={() => {window.gtag('event', 'HowToInstall - browser panel - Safari');}}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <img alt="" src="./img/icon_browser_safari.png"/> Safari
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails> 
                    <ol>
                      <li>Na barra de ícones na parte de baixo da tela, selecione o ícone do meio de compartilhar (o quadradinho com uma seta saindo dele).</li>
                      <li>Selecione "Tela de Início".</li>
                    </ol>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel
                  onChange={() => {window.gtag('event', 'HowToInstall - browser panel - Firefox');}}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <img alt="" src="./img/icon_browser_firefox.png"/> Firefox
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

          <Dialog
            open={this.state.isInfoDialogOpen}
            fullScreen={isMobile}
          >
            <DialogTitle>
              Informações práticas
            </DialogTitle>

            <DialogContent>
                <p>
                    <img alt="" src="./img/banner.png" style={{ width: '100%' }}/>
                </p>

                <Typography variant="title" gutterBottom>
                    Sobre o evento
                </Typography>

                <Typography variant="subheading" gutterBottom>
                    O Bicicultura – Encontro Brasileiro de Mobilidade por Bicicleta e Cicloativismo – é um encontro 
                    anual, organizado pela sociedade civil, para celebrar e impulsionar a cultura da bicicleta como 
                    meio de mobilidade nas cidades brasileiras. É um espaço para o convívio, compartilhamento de 
                    conhecimento e formação de alianças entre ciclistas, cicloativistas e todos os entusiastas e 
                    interessados, de todos os setores sociais, na democratização urbana, na sustentabilidade ambiental 
                    e na qualidade de vida que a bicicleta proporciona.
                </Typography>

                <List>
                    <ListItem
                        button
                        component="a"
                                href="https://www.google.com/maps/place/Museum+of+Tomorrow/@-22.895807,-43.1812478,17z/data=!4m13!1m7!3m6!1s0x997f50a0c11567:0xa0348984e3714b19!2sPra%C3%A7a+Mau%C3%A1,+1+-+Centro,+Rio+de+Janeiro+-+RJ,+20081-240!3b1!8m2!3d-22.8957279!4d-43.180529!3m4!1s0x0:0x316901f971660ce1!8m2!3d-22.8941288!4d-43.1794862https://goo.gl/maps/saZZkJA4tqn/"
                        target="_BLANK"
                        divider
                    >
                        <ListItemIcon>
                            <PlaceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Praça Mauá, 1 – Centro, Rio de Janeiro"/>
                    </ListItem>
                    <ListItem divider >
                        <ListItemIcon>
                            <DateRangeIcon />
                        </ListItemIcon>
                        <ListItemText primary="8, 9 e 10 de Junho de 2018"/>
                    </ListItem>
                    <ListItem
                        button
                        component="a"
                        href="http://bicicultura.rio/"
                        target="_BLANK"
                        divider
                    >
                        <ListItemIcon>
                            <LinkIcon />
                        </ListItemIcon>
                            <ListItemText primary="Site oficial" secondary="http://bicicultura.rio"/>
                    </ListItem>
                    <ListItem
                        button
                        component="a"
                        href="mailto:contato@bicicultura.rio" 
                        target="_BLANK"
                        divider
                    >
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                            <ListItemText primary="Contato do evento" secondary="contato@bicicultura.rio"/>
                    </ListItem>
                    <ListItem
                        button
                        component="a"
                        href="mailto:cristiano.dalbem@gmail.com"
                        target="_BLANK"
                        divider
                    >
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                            <ListItemText primary="Contato do desenvolvedor (app)" secondary="cristiano.dalbem@gmail.com"/>
                    </ListItem> 
                </List>
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
              fullWidth={isMobile}
              centered={!isMobile}
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
                        <div className="schedule-timebox--header" data-start="10:20" data-end="11:10">
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
                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Mapeamento de como anda a pesquisa sobre a bicicleta no Brasil</div>
                            <div className="schedule-author">UCB - Yuriê Baptista - UCB GT de pesquisa</div>
                            {/* <IconButton color="inherit" onClick={this.onStarBtnClick} aria-label="Favoritar">
                              <StarBorderIcon color="action"/>
                            </IconButton> */}

                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>
                            <div className="schedule-session">O uso da bicicleta e seu impacto na saúde pública.</div>
                            <div className="schedule-author">John Fontenele Araujo – ACIRN - Associação de Ciclistas do Rio Grande do Norte</div>

                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Ciclo Orçamentário para a ciclomobilidade no município do Rio de Janeiro</div>
                            <div className="schedule-talk">Análise das leis e dotação orçamentária para a ciclomobilidade no Rio de Janeiro</div>
                            <div className="schedule-author">Carolina Queiroz - MobiRio</div>

                            <div className="schedule-talk">Ciclo Orçamentário</div>
                            <div className="schedule-author">Carolina Queiroz - MobiRio</div>
                        </div>
                    </div>

                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="11:20" data-end="12:10">
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

                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Assessoramento Jurídico para OSCs em prol da Ciclomobilidade</div>
                            <div className="schedule-author">UCB - Leonardo Andrade Aragão - UCB GT Jurídico</div>


                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>
                            <div className="schedule-session">Políticas de redução de velocidade</div>
                            <div className="schedule-talk">Medidas de segurança para ciclistas e pedestres - redução de velocidade</div>
                            <div className="schedule-author">Flavio Soares, Aline Cavalcante e Ana Carolina Nunes - Ciclocidade</div>
                            <div className="schedule-talk">Aplicação de dinâmicas de planejamento sobre advocacy</div>
                            <div className="schedule-author">Flavio Soares, Aline Cavalcante e Ana Carolina Nunes - Ciclocidade</div>


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Bicicleta na Auto-Escola e no conteúdo escolar</div>
                            <div className="schedule-talk">Ciclomobilidade para instrutores de auto-escolas</div>
                            <div className="schedule-author">Pedro Daniel Amaral Arruda - CENTEC - Centro de Ensino Técnico de Trânsito CWB</div>
                            <div className="schedule-talk">Projeto Conhecer Pedalando - Possibilidades de inserção da bicicleta como conteúdo escolar</div>
                            <div className="schedule-author">Bruno Wilwert Tomio - Conhecer Pedalando</div>
                        </div>
                    </div>

                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="12:20" data-end="13:10">
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

                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>
                            <div className="schedule-session">Avaliações Cicloviárias</div>
                            <div className="schedule-talk">O Índice de Desenvolvimento Cicloviário IDECiclo Região Metropolitana do Recife</div>
                            <div className="schedule-author">Daniel Valença - AMECICLO</div>
                            <div className="schedule-talk">Nova proposta metodológica de avaliação de vias ciclísticas. Fabiano Faga Pacheco – AMOBICI</div>
                            <div className="schedule-author">Fabiano Faga Pacheco – AMOBICI</div>

                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Bicicleta - Educação Social e Incentivo</div>
                            <div className="schedule-talk">Bike na Obra</div>
                            <div className="schedule-author">Murilo Rodrigues - Bike Anjo Belém</div>
                            <div className="schedule-talk">Destinação de Bicicletas roubadas e recuperadas</div>
                            <div className="schedule-author">Mauro Soares Tavares - Programa Rio - Estado da Bicicleta/SETRANS RJ</div>
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="13:10" data-end="14:30">
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
                        <div className="schedule-timebox--header" data-start="14:30" data-end="15:20">
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

                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>

                            <div className="schedule-session">Politicas e Planos de Mobilidade</div>

                            <div className="schedule-talk">Projeto Parque Brasil</div>
                            <div className="schedule-author">Débora Reis Fontes – CSC-RJ e Andrea Borges - UNISUAM</div>

                            <div className="schedule-talk">Plano de Mobilidade Ativa do Distrito Federal - PMA-DF</div>
                            <div className="schedule-author">Priscila Miti Yajima – SEMOB - DF</div>

                            <div className="schedule-talk">Diretrizes para política pública de Mobilidade Sustentável, o Programa Ciclovida</div>
                            <div className="schedule-author">Silvana Nakamori – UFPR / CicloIguaçu</div>


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Bicicleta: Cultura e Arte</div>

                            <div className="schedule-talk">Bicicleta: Cultura e Arte</div>
                            <div className="schedule-author">Giovani Rafael Seibel - COLMEIA - Coletivo Laboral Multicultural</div>

                            <div className="schedule-talk">A Experiência do Pedal Sonoro</div>
                            <div className="schedule-author">Luís Araujo – Pedal Sonoro</div>
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="15:30" data-end="16:20">
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
                            <div className="schedule-moderation">Moderação: Thatiana Murillo – Caminha Rio</div>

                            <div className="schedule-talk">Multas a pedestres e ciclistas - Como reagir?</div>
                            <div className="schedule-author">Glaucia Pereira e Ana Carolina Nunes – Cidadeapé</div>

                            <div className="schedule-talk">Super-Ando</div>
                            <div className="schedule-author">Super-Ando</div>


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>

                            <div className="schedule-talk">Bicicleta na Escola</div>
                            <div className="schedule-author">Ana Destri - AMOBICI</div>


                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>

                            <div className="schedule-session">Vila Velha, um panorama</div>

                            <div className="schedule-talk">Mudanças da cidade e as percepções que elas proporcionam</div>
                            <div className="schedule-author">Fernando Braga – Ciclistas Urbanos Capixabas</div>

                            <div className="schedule-talk">Estacionamento facilita o acesso de quem adota a bicicleta como meio de transporte</div>
                            <div className="schedule-author">Pollyana Martins – Ciclistas Vila-Velhenses</div>


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>

                            <div className="schedule-session">Bicicletários Quantidade e Qualidade</div>

                            <div className="schedule-talk">Como ampliar os bicicletários adequados na sua cidade</div>
                            <div className="schedule-author">Felipe Alves - UCB GT Infraestrutura</div>

                            <div className="schedule-talk">É possível estacionar a bicicleta "de boa"?</div>
                            <div className="schedule-author">Hannah Kny e Cristiano Dalbem – Bike de Boa</div>
                        </div>
                    </div>

                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="16:30" data-end="17:39">
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
                            <div className="schedule-moderation">Moderação: Rodrigo Vitório - TA</div>

                            <div className="schedule-talk">Coolabici</div>
                            <div className="schedule-author">Gheysa Caroline Prado - UFPR, Marina Caus dos Santos - Thaisa Meurer Piovezani - Mariana de Souza - Fernando Reinaldo Contin Falkiewicz
                            </div>

                            <div className="schedule-talk">Bicicletar Corporativo</div>
                            <div className="schedule-author">Aurélie Dos Santos - Serttel </div>


                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>

                            <div className="schedule-talk">Conceito dos Jogos de Bicicleta</div>
                            <div className="schedule-author">Ana Carboni – Bike Anjo Niterói</div>


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>

                            <div className="schedule-session">O olhar através da bicicleta</div>
                            <div className="schedule-talk">Pedal da ACERGS</div>
                            <div className="schedule-author">Rafael Santos – ACERGS Associação dos Cegos do Estado do Rio Grande do Sul</div>

                            <div className="schedule-talk">ODKV</div>
                            <div className="schedule-author">Maria Aline De Oliveira Gouveia e Barbara de Vasconcelos Barbosa - Bike Anjos Campina Grande e Recife</div>
                        </div>
                    </div>
                </div>
            }
            {this.state.value === 1 &&
                <div>
                    {/*
                    <div className="schedule-date">Sábado dia 9 de junho</div> */}

                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="10:20" data-end="11:10">
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
                            <div className="schedule-moderation">Moderação: Aline Cavalcante - Ciclocidade</div>

                            <div className="schedule-talk">Pedala, mana!</div>
                            <div className="schedule-author">Melissa Noguchi e Lorena Costa– Bike Anjo Belém</div>

                            <div className="schedule-talk">Festival "100Gurias100Medo"</div>
                            <div className="schedule-author">Naone Lopes e Caro Pierro – 100gurias100medo</div>

                            <div className="schedule-talk">Mulheres Caminhantes, auditoria de segurança de gênero e caminhabilidade</div>
                            <div className="schedule-author">Ana Carolina Nunes e Leticia Sabino – SampaPé</div>


                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Contagens de ciclistas: monitoramento do uso de bicicletas em escala municipal</div>
                            <div className="schedule-author">Thiago Benicchio – ITDP Brasil</div>


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Cicloativismo e ações políticas</div>
                            <div className="schedule-moderation">Moderação: Felipe Alves - UCB</div>

                            <div className="schedule-talk">Prefeitura de Curitiba extinguiu infraestruturas "Calçadas Verdes"</div>
                            <div className="schedule-author">Joao Pedro Bazzo Vieira - Cicloiguaçu</div>

                            <div className="schedule-talk">Memória e historia do cicloativismo no Brasil</div>
                            <div className="schedule-author">Fernando Barcellos – UCB GT Pesquisa</div>

                            <div className="schedule-talk">Contexto atual e cicloativismo</div>
                            <div className="schedule-author">Lígia Pereira - AMECICLO</div>


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Como Promover a Mobilidade Ativa nas Eleições de 2018</div>
                            <div className="schedule-author">André Geraldo Soares e Ana Carolina Nunes - UCB e SampaPé</div>
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="11:20" data-end="12:10">
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

                            <div className="schedule-talk">Dificuldades e facilidades de estar a frente de uma diretoria anterior masculina</div>
                            <div className="schedule-author">Aspásia Mariana - UCB GT Gênero / Ciclovida Fortaleza</div>

                            <div className="schedule-talk">Leis que não são em prol da segurança e da vida das mulheres</div>
                            <div className="schedule-author">Aspásia Mariana - UCB GT Gênero / Ciclovida Fortaleza</div>


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Ciclomobilidade na Agenda Politica Niteroi</div>
                            <div className="schedule-author">Fátima Priscila Morela Edra - Universidade Federal Fluminense – UFF e Sérgio Franco – Mobilidade Niterói</div>


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Soluções para a bicicleta</div>
                            <div className="schedule-talk">Bicicletaria Cultural</div>
                            <div className="schedule-author">Patricia Valverde – Bicicletaria Cultural</div>

                            <div className="schedule-talk">Estações de Reparos Rápidos de Bicicleta</div>
                            <div className="schedule-author">Paulo Aguiar – Pedala Manaus</div>
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="12:20" data-end="13:10">
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

                            <div className="schedule-talk">Eu Vou de Bicicleta</div>
                            <div className="schedule-author">Everaldo Moreira Fabrício - BikeMotiva</div>


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Ações de Bike em Pirenópolis</div>
                            <div className="schedule-author">Larissa Cantarelli – Bike Anjo Pirenópolis</div>
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="13:10" data-end="14:30">
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
                        <div className="schedule-timebox--header" data-start="14:30" data-end="15:20">
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


                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Cicloturismo</div>
                            <div className="schedule-moderation">Moderação: Ricardo Martins - RodaMundo</div>

                            <div className="schedule-talk">Equipamentos para Viagens de Bicicleta</div>
                            <div className="schedule-author">Fábio Eduardo da Silva - Clube de Cicloturismo do Brasil</div>

                            <div className="schedule-talk">De ocupação a ocupação uma pedalada Brasília Olinda</div>
                            <div className="schedule-author">Mateus Lima - Bicicentro Comunitário</div>

                            <div className="schedule-talk">Viajar sola</div>
                            <div className="schedule-author">María Paz Castillo - Pedalea x la calle - Chile</div>


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Ativismo e Academia</div>
                            <div className="schedule-moderation">Moderação: Vivan Garelli - PPGA UFF</div>

                            <div className="schedule-talk">Processo de concepção e implementação da ciclovia da Uni.Fed. de Itajubá</div>
                            <div className="schedule-author">Pedro Torres de Melo Pedrosa - UNIFEI</div>

                            <div className="schedule-talk">Movimentos sociais contemporâneos e inclusão: lições do cicloativismo no Rio</div>
                            <div className="schedule-author">Naomi Orton – PUC Rio</div>

                            <div className="schedule-talk">Ciclomobilidade: Avaliação e Qualificação do Prog. Ciclo da RMGV- Vila Velha – ES</div>
                            <div className="schedule-author">Pollyana Martins Rodrigues – Ciclistas Vila-Velhenses</div>

                            <div className="schedule-talk">Ciclorrotas de Aracaju</div>
                            <div className="schedule-author">Sayuri Silva Dantas de Oliveira – Associação Ciclo Urbano</div>


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Indicadores sobre o respeito à faixa de pedestres em Brasília</div>
                            <div className="schedule-author">Jonas Bertucci – Rodas da Paz</div>
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="15:30" data-end="16:20">
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
                            <div className="schedule-moderation">Moderação: Ricardo Martins - RodaMundo</div>

                            <div className="schedule-talk">Análise comparativa entre os estudos internacionais e nacionais Cicloturismo</div>
                            <div className="schedule-author">Fernanda Monteiro Lobão de Deus e Fátima Priscila Edra - UFF</div>

                            <div className="schedule-talk">Papo sobre Circuitos de Cicloturismo</div>
                            <div className="schedule-author">Ivo Leonardo Schmitz - Clube de Cicloturismo do Brasil</div>

                            <div className="schedule-talk">Criação de roteiros de cicloturismo urbano</div>
                            <div className="schedule-author">Gustavo Carvalho - Kuritibike</div>


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Pesquisas Ciclomobilidade</div>
                            <div className="schedule-moderation">Moderação: Rene Fernandes - FGV</div>

                            <div className="schedule-talk">Donde vem, pronde vão - Cruzamento de pesquisas em Recife</div>
                            <div className="schedule-author">Daniel Valença - AMECICLO</div>

                            <div className="schedule-talk">Simulador de vantagens da mobilidade ativa</div>
                            <div className="schedule-author">José Carlos Assunção Belotto – Ciclovida / UFPR</div>

                            <div className="schedule-talk">Como diferentes aspectos da infraestrutura influenciam ciclistas.</div>
                            <div className="schedule-author">Joao Pedro Bazzo Vieira - CicloIguaçu</div>

                            <div className="schedule-talk">Tarauacá Cidade das Bicicletas</div>
                            <div className="schedule-author">Valden Rocha - Bike Anjo Rio Branco</div>

                            <div className="schedule-talk">Analisar a prática cultural do andar de bicicleta na Cidade do Rio de Janeiro</div>
                            <div className="schedule-author">Denise Pinheiro - UFRJ</div>


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Visões sobre a bicicleta</div>
                            <div className="schedule-talk">O uso da bicicleta como transporte em cidades do interior do Ceará.</div>
                            <div className="schedule-author">Clivia Kellen Almeida Silva - Ciclanas Fortaleza</div>

                            <div className="schedule-talk">Pedalino vê o mundo</div>
                            <div className="schedule-author">Claudio de Moura Sobral - Cicloação Recife </div>
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="16:30" data-end="17:00">
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
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="17:00" data-end="17:45">
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
                        <div className="schedule-timebox--header" data-start="10:20" data-end="13:10">
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
                        <div className="schedule-timebox--header" data-start="13:10" data-end="14:30">
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
                        <div className="schedule-timebox--header" data-start="14:30" data-end="15:20">
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


                            <div className="schedule-place place-auditorio">
                                <span className="schedule-place--name">Auditório</span>
                            </div>
                            <div className="schedule-session">Paradigmas do Século XXI</div>
                            <div className="schedule-moderation">Renata Falzoni – André Soares – Zé Lobo. Moderação: Fernando Barcellos</div>


                            <div className="schedule-place place-observatorio">
                                <span className="schedule-place--name">Observatório</span>
                            </div>
                            <div className="schedule-session">Pesquisa Nacional de Avaliação da Ciclabilidade</div>
                            <div className="schedule-author">Gláucia Pereira e Yuriê Baptista</div>


                            <div className="schedule-place place-terreiro">
                                <span className="schedule-place--name">Terreiro</span>
                            </div>
                            <div className="schedule-session">Avaliações Cicloviárias - Resultados</div>

                            <div className="schedule-talk">O Índice de Desenvolvimento Cicloviário IDECiclo Região Metropolitana do Recife</div>
                            <div className="schedule-author">Daniel Valença - AMECICLO</div>


                            <div className="schedule-place place-tenda">
                                <span className="schedule-place--name">Tenda</span>
                            </div>
                            <div className="schedule-session">Mecânica para Mulheres (14:30 — 16:20)</div>
                            <div className="schedule-author">Coordenação Tassia Furtado</div>

                            <div className="schedule-talk">Oficinas de mecânica, problemas cotidianos</div>
                            <div className="schedule-author">Angela Soler</div>

                            <div className="schedule-talk">Troca de dicas sobre mecânica, em uma linguagem de mulher para mulher</div>
                            <div className="schedule-author">Marcella Olinto - Garupa</div>
                        </div>
                    </div>


                    <div className="schedule-timebox">
                        <div className="schedule-timebox--header" data-start="15:30" data-end="16:30">
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
                        <div className="schedule-timebox--header" data-start="16:30" data-end="17:45">
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