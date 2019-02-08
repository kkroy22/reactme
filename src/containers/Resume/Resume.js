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

        <H1 align="right">Download My <A href={pdf}>Resume</A></H1> 

        <P>&nbsp;</P>
        <H1 align="left">Summary</H1>
        <P align="left">I have <b>One Year Experience</b> in working on building machine learning models with Python and data analysis and cleaning with Java. I was also involved in building web API pipeline for machine learning task using Django and Flask web framework and Model deployment with Docker containerization.</P>
     

        <P>&nbsp;</P>
        <H1 align="left">FAMILIAR COMPUTER PROGRAMMING LANGUAGES</H1>
        <P align="left">C/C++, Go(Golang), Java, JavaScript, Julia, Python, Rust.</P>
        
        <P>&nbsp;</P>
        <H1 align="left">FAMILIAR TECHNOLOGIES</H1>
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
        <P align="left">Worked with a team responsible for </P>
        <ul>
        <li><P>Reducing the manual processing time of two to three months to a week.</P></li>
        <li><P>Speed up the onboarding process of retailers to Nielsen.</P></li>

        </ul></li>

        <li><H2>Lucida Technologies Pvt Ltd (Technology Services, Digital Services and Analytics)</H2>
        <u>Machine Learning Team</u>
        <P align="left">Worked with a team of three member for NH1 project where I was responsible for</P>
        <ul>
        <li><P>building the initial video driver using python and OpenCV</P></li>
        <li><P>Building a computer vision API with flask web framework for correctly counting of the class of vehicle.</P></li>
        </ul></li>        

        <li><H2>YottoLabs (Digital Commerce and Digital Transformations)</H2>
        <u>Team Member</u>
        <P align="left">Involved  with the team which was responsible for solving problems in the food and beverage sector where i was responsible for:</P>        
        <ul>
        <li><P>Making item report generation API using flask web framework and PostgreSQL in Linux server</P></li>
        <li><P>Time series analysis of item.</P></li>
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

