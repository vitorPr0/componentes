import { Box, Checkbox, TextField, FormControlLabel, Button, Typography, Grid, Link, Container } from '@mui/material';
import React from 'react';

function Formulario() {
  return (
    <>
    <Container component="main" maxWidth="sx">
        <Box 
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
        <Typography component="h2" variant="h5">
            Formulario de Login
        </Typography>
            <Box component="form" sx={{mt:1}}>
                <TextField fullWidth margin="normal" label="Email" name="email" variant="filled" />
                <TextField fullWidth margin="normal" label="Senha" type="password" variant="filled" />
                <FormControlLabel
                control={<Checkbox value="remember" color="primary"/>}
                label="Lembrar-me" 
                />
                <Button fullWidth type="submit" variant="contained" sx={{mt:4, mb: 2}}>Login</Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#">Esqueci minha senha</Link>
                    </Grid>
                    <Grid item>
                    <Link href="#">Cadastre-se</Link>
                    </Grid>
                </Grid>
            </Box>

        </Box>
        </Container>
    </>
  )
}

export default Formulario;
