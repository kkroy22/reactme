import React, { Component } from 'react';
import { Container, Flex } from '../../theme/grid';
import { Title, VideoContainer } from './Resume.style';
import { H1, H2, H3, H4, H5, P, A, } from '../../theme/types';
import pdf from '../../assets/Resume.pdf'
//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

class Resume extends Component {
  render() {
    return (
      <Container>
       <P>&nbsp;</P>

        <Title>KIRAN KUMAR ROY</Title>

        <P align="right">Download My <A href={pdf}>Resume</A></P>      

        <P>&nbsp;</P>
        <H1 align="left">COMPUTER PROGRAMMING LANGUAGES I KNOW</H1>
        <P align="left">C/C++, Go(Golang), Java, JavaScript, Julia, Python, Rust.</P>
        
        <P>&nbsp;</P>
        <H1 align="left">TECHNOLOGIES I USE</H1>
        <P align="left">Angular, Celery, Docker, Django, Git, LaTeX, Linux, Machine Learning, OpenCV, PostgreSQL, Redis.</P>

        <P>&nbsp;</P>
        <H1 align="left">Others familiar things</H1>
        <P align="left">Android, Ansible, Blockchain, D3.js, ElasticSearch, Flask, Hadoop, HBase, Kafka, Knime, MapReduce, Microsoft Excel, MongoDB, Node.js, OpenMP, Qt, R, React.js, Scala, Solr, Spark, Storm, TypeScript, Unreal Engine, Vue.js ...</P>

        <P>&nbsp;</P>
        <H1 align="left">Professional Experience</H1>
        <P align="left">
        <ul>  

        <li><H2>Nielsen (Global Information, Data and Measurement Company)</H2>
        <u>Developer</u>
        <ul>
        <li><P>Applying a supervised classification algorithm on the data provided by retailers of various countries.</P></li>
        <li><P>Analysis of data with an unsupervised learning algorithm.</P></li>
        <li><P>cleaning of retailer data.</P></li>

        </ul></li>

        <li><H2>Lucida Technologies Pvt Ltd (Technology Services, Digital Services and Analytics)</H2>
        <u>Machine Learning Team</u>
        <ul>
        <li><P>Building a computer vision API for correctly counting of the class of vehicle.</P></li>
        </ul></li>        

        <li><H2>YottoLabs (Digital Commerce and Digital Transformations)</H2>
        <u>Team Member</u>
        <ul>
        <li><P>Involved in solving problems in the food and beverage sector.</P></li>
        <li><P>Item report generation API.</P></li>
        <li><P> Time series analysis of item.</P></li>
        </ul></li> 

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

