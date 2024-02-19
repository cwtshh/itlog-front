import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './CreateIssue.css'

const CreateIssue = () => {
    const [ title, setTitle ] = useState("");
    const [ requester, setRequester ] = useState("");
    const [ description, setDescription ] = useState("");

    const handleSubmit = async() => {
        

    }

    return (
        <div className='center' style={{marginTop : "2em"}}>
            <h1>Criar Agendamento</h1>

            <div className='form-div'>
                <Form onSubmit={handleSubmit} style={{width : "20em"}}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Título do agendamento:</Form.Label>
                        <Form.Control onChange={e => setTitle(e.target.value)} type='text' placeholder='Digite o título do agendamento' />
                        <Form.Text className='text-muted'>Resuma em poucas palavras o problema</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Solicitante:</Form.Label>
                        <Form.Control onChange={e => setRequester(e.target.value)} type='text' placeholder='Digite seu nome' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Descrição:</Form.Label>
                        <Form.Control onChange={e => setDescription(e.target.value)} as='textarea' placeholder='Descreva detalhadamente o problema' />
                    </Form.Group>

                    <Button variant='primary' type='submit'>Criar Agendamento</Button>
                </Form>
            </div>
        </div>
    )
}

export default CreateIssue