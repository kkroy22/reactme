import React, { Component } from 'react';
import { Container, Flex } from '../../theme/grid';
import { Title, VideoContainer } from './Resume.style';
import ReactPlayer from 'react-player';
import { H1, H2, H3, H4, H5, P, A, } from '../../theme/types';

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

class Resume extends Component {
  render() {
    return (
      <Container>
       <P>&nbsp;</P>

        <Title>KIRAN KUMAR ROY</Title>
        
        <P>&nbsp;</P>
        <H1 align="left">COMPUTER PROGRAMMING LANGUAGES I KNOW</H1>
        <P align="left">C/C++, Go, Java, Javascript, Julia, Python, Rust.</P>
        
        <P>&nbsp;</P>
        <H1 align="left">TECHNOLOGIES I USE</H1>
        <P align="left">Docker, Flask, Git, Linux, Machine Learning, OpenCV, PostgreSQL, vuejs.</P>

        <P>&nbsp;</P>
        <H1 align="left">Others familiar things</H1>
        <P align="left">Ansible, Blockchain, D3.js, Django, Elasticsearch, Hadoop, HBase, Jenkins, Kafka, MapReduce, Microsoft Excel, MongoDB, Node.js, OpenMP, Openstack, R, React, Scala, Spark.</P>

        <P>&nbsp;</P>
        <H1 align="left">WORK EXPERIENCE</H1>
        <P align="left">
        <ul>  

        <li><H2>Nielsen (Consultant)</H2>
        <u>Developer</u>
        <ul>
        <li><P>Item Char Validation: Characteristic validation with Text processing and Machine learning</P></li>
        <li><P>X-coding: Based on Raw Description Machine will predict the Characteristic</P></li>
        </ul></li>

        <li><H2>Lucida Technologies Private Limited (Bengaluru)</H2>
        <u>Developer</u>
        <ul>
        <li><P>Video Annotation Tool to Annote Vehicles</P></li>
        </ul></li>        

        <li><H2>Yottolabs Private Limited (Bengaluru)</H2>
        <u>Python Developer</u>
        <P>Itemwise report generation</P></li>

        </ul>
        </P>

        <P>&nbsp;</P>
        <H1 align="left">ACADEMIC PROJECTS AND PRESENTATION</H1>
        <P align="left"><ul>
        <li><u>TEXT SYNTHESIS FROM TEXT WITH DEEP LEARNING</u>
        <H2>PYTHON AND DEEP NEURAL NETWORK</H2>
        <P>This project will generate new text sequence with the help of existing text sequence. It uses character-level model (RNN - LSTM) to predict the next character in the sequence.</P></li>
        <li><u>ILLEGAL BOWLING ACTION DETECTION WITH IMAGE PROCESSING</u>
        <H2>EMBEDDED C++ AND MATLAB</H2>
        <P>This project will reduce the time taken and cut short the cost to detect the bowling flaw as compared to the methods which are currently in use. It can be used either in live matches and training environments. This technique gives 80% - 90% accurate elbow angle measures with the advantage of automatic detection.</P></li>
        <li><H2>NODE.JS - EMERGING TECHNOLOGY</H2></li>
        <li><H2>DEAR-DIARY - SIMPLE NOTE TAKING APP WITH ANDROID</H2></li>
        </ul></P>
      </Container>
    );
  }
}
export default Resume;

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

