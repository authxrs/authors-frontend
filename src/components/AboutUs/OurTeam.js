import React, {useEffect} from "react";
import styled from "styled-components";
import cris from '../../assets/Cris_authxrs.jpg';
import sara from '../../assets/Sara_authxrs.jpg';
import saraimg from '../../assets/saraimg.jpg';
import crisimg from '../../assets/crisimg.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function OurTeam() {
  useEffect (() => {
    Aos.init({duration:3000});
}, []);
  return (
    <OurTeamWrapper>
      <StorySection1>
        <StorySection1Img>
          <img  data-aos='fade-up' 
            src={cris}
            alt="portrait"
          />
          <NameSection>
          <h3>Cristina Gonzalez Torello</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          </NameSection>
        </StorySection1Img>
        <StorySection1Img>
          <img  data-aos='fade-up' 
            src={sara}
            alt="portrait"
          />
           <NameSection>
          <h3> Sara Brun Nielsen</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          </NameSection>
        </StorySection1Img>
      </StorySection1>

      <MiddleSection3>
        <MiddleSection3Text>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the wordContrary to popular belief, Lorem Ipsum is not simply
            random text.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the wordContrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, 
          </p>
        </MiddleSection3Text>
      </MiddleSection3>

      <SaraSection>
        <SaraImg>
          <img src={saraimg}  data-aos='fade-up'  alt="sara portrait" />
        </SaraImg>
       <SaraText>
         <h1>
           Sara Brun Nielsen
         </h1>
            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin profes
            </p>    
        </SaraText>
      </SaraSection>
      <CrisSection>
        <CrisText>
        <h1>
        Cristina Gonzalez Torello
         </h1>
            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin profes
            </p>    
        </CrisText>
        <CrisImg>
          <img src={crisimg}  data-aos='fade-up'  alt="Cris Portrait" />
        </CrisImg>
      </CrisSection>
    </OurTeamWrapper>
  );
}
// SECTION 1

const OurTeamWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items:center;
  margin: 0;
  padding: 0;
`;

const StorySection1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  flex-wrap:wrap;

`;

const StorySection1Img = styled.div`
  display:flex;
  flex-wrap:wrap;
  width: 430px;
  height: auto;
  margin: 90px 40px 100px 40px;

  img {
    width: 100%;
    margin-bottom:0
  }

  h3 {
    font-size: 15px;
  }

  p {
    width: 70%;
    font-size: 10px;
  }

  @media(max-width:400px){
  margin-top:50px;
  margin-bottom:0px;
}

  @media (max-width: 800px) {
    width: 90%;

    img {
      margin: 10px;
      width: 70vw;
    }
  }
`;

// SECTION Middle

const MiddleSection3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0px 0 100px 0;
  
  @media(max-width:400px){
 
      margin-bottom:40px;
  }
`;

const MiddleSection3Text = styled.div`
  width: 50%;

  height: auto;
  margin-left: 0;

  p {
    font-size: 17px;
    line-height: 1.8em;
    font-weight:100;
    margin-bottom:50px;
  }

  @media(max-width:600px){
    width:70%;
    margin-top:20px;
    
    p {
      font-size:12px;
      width:100%;
      margin-bottom:30px;
      }
}
`;

// SARA SECTION 

const SaraSection = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-items:flex-start;
text-align:center;
width:100%;
`

const SaraImg = styled.div`

img {
  width:400px;
}
@media(max-width:400px){
  img {width:300px;}
}
`

const SaraText = styled.div`
text-align:left;
width:25%;
margin:20px 40px;
font-size:12px;
@media(max-width:800px){
  width:70%;
}
`

const CrisSection = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap-reverse;
justify-content:center;
align-items:flex-start;
text-align:center;
width:100%;
margin-top:100px;

@media(max-width:400px){
  margin-top:50px;
}
`

const CrisImg = styled.div`

img {
  width:400px;
  margin-right:100px;
}

@media(max-width:800px){
  img {width:400px;
    margin-right:0;
  }
}
`

const CrisText = styled.div`
text-align:left;
justify-content:center;
align-items:center;
width:25%;
margin:20px 40px;
font-size:12px;

@media(max-width:800px){
  width:70%;
}
`


const NameSection = styled.div`
    margin:0;

    @media(max-width:400px){
    margin-left:10px;
}
`