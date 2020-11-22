import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import SignUpVolunteer from './SignUpVolunteer/sign-up-volunteer';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';
import SignUpOng from './SignUpOng/sign-up-ong';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';


// import { Container } from './styles';

// export function Rtif({boolean, ...props}) {
//   const { children } = props;
//   if (boolean)
//       return (
//               {...children}
//       );
//   return null;
// }

// export function BtnAltera() {
//   const mostraOng = (event) => {
//     setAlignment(newAlignment);
//   };
// }

// export default function SignUp() {
//   return (
//     <div>
//         <Navbar />
//         <LabelWelcome labelTitle="Bem vindo ao Compass.io" labelText="Preencha o formulário para realizar o cadastro"/>
//         <ToggleButtonGroup exclusive>
//           <ToggleButton>Sou Voluntário</ToggleButton>
//           <ToggleButton>Sou uma ONG</ToggleButton>
//         </ToggleButtonGroup>
//         {/* <Rtif boolean={true}>
//           <SignUpVolunteer />
//         </Rtif>
//         <Rtif boolean={false}>
//           <SignUpOng />
//         </Rtif> */}

//       </div>
//   );
// };

// const useStyles = makeStyles({
//   signUpView:{
//     marginTop: '1rem'
//   }
// });


// export default function Teste() {
//   const classes = useStyles();
//   return(
//     <div className="signUpView">
//         {this.state.isOng ? <SignUpVolunteer /> : <SignUpOng />}
//     </div>  
//   );
// };

const useStyles = makeStyles({
      btnToggle: {
        backgroundColor: '#1975FF', 
        color: '#fff', 
        alignContent: 'center'
      },
    })



export default class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isOng: false,
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState(prevState => ({
      isOng: !prevState.isOng
    }));
    
  }

  



  render(){
    // const useStyles = makeStyles({
    //   btnToggle: {
    //     backgroundColor: '#1975FF', 
    //     color: '#fff', 
    //     alignContent: 'center'
    //   },
    // })
    const classes = useStyles;

    return(
      <div>
         <Navbar />
         <LabelWelcome labelTitle="Bem vindo ao Compass.io" labelText="Preencha o formulário para realizar o cadastro"/>
         <ToggleButtonGroup>
           <ToggleButton className={classes.btnToggle} style={{
        backgroundColor: '#1975FF', 
        color: '#fff', 
        alignContent: 'center',
        marginTop: '1rem',
        marginBottom: '1rem'
      }} id="btnToggle" onClick={this.handleClick}>{this.state.isOng ? 'Sou uma ONG' : 'Sou Voluntário'}</ToggleButton>
         </ToggleButtonGroup>
         {/* <ToggleBtn onClick={this.handleClick}>{this.state.isOng ? 'Sou uma ONG' : 'Sou Voluntário'}</ToggleBtn> */}
         <div className="signUpView">
          {this.state.isOng ? <SignUpVolunteer /> : <SignUpOng />}
         </div>

      </div>
    )
  }
}
