import React, { Component } from 'react';
import { Container, Flex } from '../../theme/grid';
import { Title, VideoContainer } from './AboutMe.style';
import ReactPlayer from 'react-player';
import { H1, H2, P, A } from '../../theme/types';

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

class AboutMe extends Component {
  render() {
    return (
      <Container>

	<P>&nbsp;</P>

        <Title>MoreAboutMe</Title>
        <H2 align="right">Kiran Kumar Roy</H2>
        <Flex>
          <VideoContainer>
            <ReactPlayer
              width="100%"
              controls
              url={require('../../assets/video.mp4')}/>
          </VideoContainer>
        </Flex>

        
	<P>&nbsp;</P>
        <H1 align="left">Year 2017</H1>
        <H1 align="right">Big Data Analytics</H1>
        <H1 align="right">प्रगत संगणन विकास केंद्र (सी-डैक)</H1>
        <H1 align="right">Ministry of Electronics & Information Technology</H1>

        <P align="left">Set up in 1988, Centre for Development of Advanced Computing (C-DAC) is a scientific society of the Ministry of Electronics & Information Technology, Government of India, carrying out Research and Development (R&D) in IT, electronics and associated areas. </P>

        <P>&nbsp;</P>
        <H1 align="left">Year 2012 - 2016</H1>
        <H1 align="right">Computer Science and Engineering</H1>
        <H1 align="right">Govind Ballabh Pant Engineering College, Pauri-Garhwal</H1>
        <H1 align="right">(An Autonomous College Of Government of Uttarakhand)</H1>
      <P align="left">I did my engineering from Govind Ballabh Pant Engg. College, Ghurdauri. It is located in Garhwal region of Uttarakhand. The institute is located in serenity and purity of Garhwal Himalayas, at a height of 1800m (approx 5905 ft.) above the sea level. What is it like to be living in heaven? I think all GBPECians have an answer to this very question for they have spent their most beautiful 4 years of hostel life in natures lap. Studying in one of the premier Engineering Colleges of Uttarakhand was like having a long vacation on a hill station.</P>

        <P>&nbsp;</P>
        <H1 align="left">Year 2000 - 2012</H1>
        <H1 align="right">Army Public School (APS)</H1>
      <P align="left">I studied in Army school from different regions: Bhatinda Cantt, Ambala Cantt, Chandigarh, Jodhpur, Kota, Hissar, Roorkee. The schools are generally managed by the army regional commands following the CBSE pattern of education. With over 130 schools throughout the country, it is one of the largest chain of schools in India that is controlled by the AWES (Army Welfare Education Society, which was established in 1983, has over the years established more than 135 Army Public Schools and 249 Army Pre-primary Schools across India, and also several institutions of higher education)</P>

      <P>&nbsp;</P>
      <H1 align="left">Year 1994</H1>
      <H1 align="right">I was Born on November</H1>
      <P align="left"></P>

      </Container>
    );
  }
}

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

export default AboutMe;
