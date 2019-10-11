import React, { Component } from 'react';
import { Container, Flex } from '../../theme/grid';
import { Title, VideoContainer } from './Resume.style';
import { H1, H2, H3, H4, H5, P, A, } from '../../theme/types';
import pdf from '../../assets/Resume_Site.pdf'
//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

class Resume extends Component {
  render() {
    return (
      <Container>
       <P>&nbsp;</P>

        <Title>KIRAN KUMAR ROY</Title>

        <H1 align="right">Download My <A href={pdf}>Resume</A></H1> 
        
        <P>&nbsp;</P>
        <H1 align="left">FAMILIAR COMPUTER PROGRAMMING LANGUAGES</H1>
        <P align="left">C/C++, Go(Golang), Java, JavaScript, Julia, Kotlin, Python, Rust.</P>
        
        <P>&nbsp;</P>
        <H1 align="left">FAMILIAR TECHNOLOGIES</H1>
        <P align="left">Angular, Celery, Docker, Django, Git, LaTeX, Linux, Machine Learning, OpenCV, PostgreSQL, Redis.</P>

        <P>&nbsp;</P>
        <H1 align="left">Others familiar things</H1>
        <P align="left">Android, Ansible, Augmented Reality, Blockchain, D3.js, Embedded System, ElasticSearch, Flask, Hadoop, HBase, IoT, Kafka, Knime, MapReduce, Microsoft Excel, MongoDB, Node.js, OpenMP, Qt, R, React.js, ROS, Scala, Solr, Spark, Storm, TypeScript, Unreal Engine, Vue.js ...</P>

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

