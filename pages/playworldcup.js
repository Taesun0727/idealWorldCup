import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import WorldcupItem from "../components/playworldcup/WorldcupItem";

const playworldcup = () => {
  return (
    <AppLayout>
      <div style={{marginTop: '10px'}}>
      <div style={{backgroundColor: '#B4AEE8', textAlign: 'center'}}>
        <label style={{color: 'white', fontSize: '25px'}}>아이돌 이상형 월드컵 (!@#)강</label>
      </div>
      <div style={{height: '100%'}}>
        <WorldcupItem></WorldcupItem>
        <WorldcupItem></WorldcupItem>
      </div>
      </div>
    </AppLayout>
  )
}

export default playworldcup;