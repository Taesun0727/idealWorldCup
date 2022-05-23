import styled from "styled-components";
import noimg from "../../assets/img/noimage.jpg"

const WorldcupItemWrap = styled.div`
  display: inline-block;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%
  }
`;

const WorldcupItem = () => {
  return (
    <WorldcupItemWrap>
      <div>
        <img src={noimg.src} style={{width: "100%"}}></img>
      </div>
      <div style={{backgroundColor: '#B4AEE8', textAlign: 'center'}}>
        <label style={{color: 'white'}}>asd</label>
      </div>
    </WorldcupItemWrap>
  )
}

export default WorldcupItem;