import { Flex } from 'antd'
export default function Footer() {
  return (
    <div style={{padding:"1rem",borderTop:".2px solid rgba(120, 120, 120, .2)"}}>
    <Flex justify={"center"} align={"center"}>
    <span style={{fontSize:"14px",color:"rgba(120, 120, 120, 1)"}}>Powered by <a style={{color:"rgba(0, 33, 113, 1)",borderBottom:"1px solid rgba(0, 33, 113, 1)"}}> Iknology</a>, version 1.4.12</span>
    </Flex>
    </div>
  )
}
