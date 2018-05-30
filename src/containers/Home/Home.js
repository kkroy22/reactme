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
           <h3>Observer of Wisdom</h3>
         </Artk>
         <WhenInView>
           {({ isInView }) =>
           <RevealPc hide={!isInView}>
           <P align="">My friends call me "KK", my mother calls me "Bikky" I belong to a Bengali family. I was born in Jammu and brought up in Northen region of India. I am Computer Science Engineer and i love building things. I enjoy learning multiple languages (Programming , Foreign and language of string i.e. Guitar).</P>
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
           <P align="left"></P>

           </RevealPl>
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
           <P align="left"></P>

           </RevealPl>
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
           <H1 align="left">Skype | WeChat | fb | twitter</H1>
           </RevealPl>
           }
         </WhenInView>
         <WhenInView>
           {({ isInView }) =>
           <RevealPr hide={!isInView}>
           <H3 align="right">My All profile has the Same ID (whisper: including gmail)</H3>
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
           <P align="left">I play Games specially dota2 and Mobile Legends: Bang Bang. I also play paladin, BombSquad, Age of Empire Castle Siege, Counter-Strike: Global Offensive Steam.</P>

           </RevealPl>
           }
         </WhenInView>
         <WhenInView>
           {({ isInView }) =>
           <RevealPl hide={!isInView}>
           <P align="left">Did I mention that I enjoy to learn String language? beacuse I also love to Play it.</P>

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

       </Container>
    );
  }
}
//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/
