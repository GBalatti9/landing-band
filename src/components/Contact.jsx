import './Form.css';
import { Box, Button, TextField, Typography } from "@mui/material"

export const Contact = ({ handleInput, reset, state }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        reset();
    }

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        handleInput( name, value )
    }

    return (
        <div style={{ backgroundColor: 'black' }}>
            <Typography variant='h3' id="contacto">Contacto</Typography>
            <form action="/" method="post" className='form-container' onSubmit={ handleSubmit }>
                <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: '5px', padding: '10px',backgroundColor: 'rgba(255, 255, 255)'}}>
                    <TextField
                        label="Nombre"
                        name="name"
                        variant="outlined"
                        margin="normal"
                        required
                        value={ state.name }
                        onChange = { onInputChange }
                        sx={{ backgroundColor: 'white', borderRadius: '12px' }}
                        />
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        required
                        value={ state.email }
                        onChange = { onInputChange }
                        sx={{ backgroundColor: 'white', borderRadius: '12px' }}
                        />
                    <TextField
                        label="Mensaje"
                        name="message"
                        variant="outlined"
                        multiline
                        rows={4}
                        margin="normal"
                        required
                        value={ state.message }
                        onChange = { onInputChange }
                        sx={{ backgroundColor: 'white', borderRadius: '12px' }}
                        />
                    <Button type="submit" variant="contained" color="primary" sx={{ width: '50%', margin: '10px auto' }}>
                        Enviar
                    </Button>
                </Box>
            </form>
        </div>
    )
}
