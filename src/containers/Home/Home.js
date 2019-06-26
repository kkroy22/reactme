import React, { Component, PropTypes } from 'react';
import {Container} from '../../theme/grid';
import { H3, H2, H1, P, A } from '../../theme/types';
import { Title, Artk, RevealPl, RevealPr, RevealPc} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView'

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
       <Container>
         <Artk>
           <h1>Kiran Kumar Roy </h1>
           <h3>Art of Observation</h3>
         </Artk>

         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
           <P align="left"></P>

           </RevealPl>
           }
         </WhenInView>

         <WhenInView>
           {({ isInView }) =>
           <RevealPc hide={!isInView}>
           <P align="">It fascinate me how mathematics proves statement and that you can predict future with numbers. Download my <A href = "/Resume">Resume</A></P>
           </RevealPc>
           }
         </WhenInView>
         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
             <Title>A Little bit of Social</Title>
           </RevealPl>
           }
         </WhenInView>


         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
           <H1 align="left">LinkedIN</H1>
           </RevealPl>
           }
         </WhenInView>
         <WhenInView>
           {({ isInView }) =>
           <RevealPr hide={!isInView}>
           <H1 align="right"><A href = "https://www.linkedin.com/in/kkroy22/"> My LinkedIn Profile </A></H1>
           </RevealPr>
           }
         </WhenInView>

         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
             LinkedIn ID : kkroy22
           </RevealPl>
           }
         </WhenInView>
         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
           <H1 align="left">Repository</H1>
           </RevealPl>
           }
         </WhenInView>
         <WhenInView>
           {({ isInView }) =>
           <RevealPr hide={!isInView}>
           <H1 align="right"><A href = "https://www.github.com/bikky22/"> My GitHub Profile </A></H1>
           </RevealPr>
           }
         </WhenInView>

         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
             GitHub ID : bikky22
           </RevealPl>
           }
         </WhenInView>

         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
           <H1 align="left">Micro Blog</H1>
           </RevealPl>
           }
         </WhenInView>
         <WhenInView>
           {({ isInView }) =>
           <RevealPr hide={!isInView}>
           <H1 align="right"><A href = "http://kirankumarroy.tumblr.com/"> tumblr </A></H1>
           </RevealPr>
           }
         </WhenInView>

         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
             Tumblr : kirankumarroy
           </RevealPl>
           }
         </WhenInView>

         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
           <H1 align="left">All other social Platform</H1>
           </RevealPl>
           }
         </WhenInView>
         <WhenInView>
           {({ isInView }) =>
           <RevealPr hide={!isInView}>
           <H3 align="right">My All profile has the Same ID</H3>
           <P align="left">
           Skype | WeChat | fb | twitter | twitch | Reddit | Kaggle | Hackerearth | UpVerter | Soundcloud | Deviantart | Patreon | PayPal (whisper: including G+ and Yahoo)
           </P> 
           </RevealPr>
           }
         </WhenInView>

         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
           <P align="left"></P>

           </RevealPl>
           }
         </WhenInView>
         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
             IM : kkroy22
           </RevealPl>
           }
         </WhenInView>


         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
           <H1 align="left">Gamings</H1>
           </RevealPl>
           }
         </WhenInView>
         <WhenInView>
           {({ isInView }) =>
           <RevealPr hide={!isInView}>
           <H1 align="right">Dota2, Mobile Legends: Bang Bang</H1>
           </RevealPr>
           }
         </WhenInView>

         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
           <P align="left">I play Games specially dota2 and Mobile Legends: Bang Bang. I also play paladin, BombSquad, Age of Empire Castle Siege, Counter-Strike: Global Offensive.</P>

           </RevealPl>
           }
         </WhenInView>
         
         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
             Steam | Xbox | Google Play Games : bikky22
           </RevealPl>
           }
         </WhenInView>

<WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
             League of Legends : 22roy
           </RevealPl>
           }
         </WhenInView>
         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
             PUBG mobile : kroy
           </RevealPl>
           }
         </WhenInView>


       </Container>
    );
  }
}
//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/
