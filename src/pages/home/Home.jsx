import Button from "react-bootstrap/esm/Button"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import "./Home.css"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Container style={{ marginTop: "1em"}}>
            <Row>
                <Col>
                    <h1>O que é ITLog?</h1>
                    <p>O ITLog, um sistema elaborado para o agendamento de serviços no âmbito da Tecnologia da Informação (TI), é concebido com o objetivo primordial de facilitar e acelerar o processo de atendimento e solução de questões enfrentadas pelos professores, proporcionando uma gestão mais eficiente e eficaz das demandas relacionadas à área de TI nas instituições educacionais.
                    </p>
                </Col>
                <Col>
                    <img style={{ borderRadius : "2em"}} src="https://media3.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" />
                </Col>
            </Row>
        </Container>
        <div className="center">
            <div className="line"></div>

        </div>
        <Container>
            <h5 style={{ marginBottom : "1em"}}>Para solicitar é simples! Apenas clique no botão abaixo e preencha o formulário</h5>
            <Link to="/issue/create"><Button style={{ marginBottom : "1em"}}>Solicitar Atendimento.</Button></Link>
            <p><strong>ATENÇÃO!</strong> preencha todas as informaçõs de forma correta.</p>
            <p>É importante para a triagem de problemas</p>
        </Container>

    </div>
  )
}

export default Home