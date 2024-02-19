import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/esm/Container'

const Footer = () => {
  return (
    <footer style={{ marginTop: "1em",padding: "10px",backgroundColor : "#121212", height: "50vh"}}>
        <Container>

            <h5>Desenvolvido por: <a href="https://github.com/cwtshh">Gustavo Costa de Jesus</a></h5>

        </Container>
    </footer>
  )
}

export default Footer