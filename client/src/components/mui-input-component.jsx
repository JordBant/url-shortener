import './mui-input-component'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputMUI = () => {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
      '& .MuiFilledInput-root:focus': {
        color: '#ff9500cf'
      },
      '& .MuiInputLabel-root': {
          color: '#221614',
          fontFamily: 'Libre Baskerville'
        }
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="filled-basic" label="Filled" variant="filled" />
  </Box>
  )
}

export default InputMUI