import './Form.css';
import { Box, Button, TextField, Typography } from "@mui/material"

export const Contact = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <Typography variant='h3' id="contacto">Contacto</Typography>
            <form action="/" method="post" className='form-container'>
                <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255)', padding: '10px'}}>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        margin="normal"
                        required
                        sx={{ backgroundColor: 'white', borderRadius: '12px' }}
                        />
                    <TextField
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        required
                        sx={{ backgroundColor: 'white', borderRadius: '12px' }}
                        />
                    <TextField
                        label="Mensaje"
                        variant="outlined"
                        multiline
                        rows={4}
                        margin="normal"
                        required
                        sx={{ backgroundColor: 'white', borderRadius: '12px' }}
                        />
                    <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '16px' }}>
                        Enviar
                    </Button>
                </Box>
            </form>
        </div>
    )
}
