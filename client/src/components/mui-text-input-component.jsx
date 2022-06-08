import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextInputMUI = ({ label, type, uniqueID: id }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        '& .MuiInputLabel-root': {
            fontFamily: 'Libre Baskerville',
            color: '#ff9500cf'
          },
        '& .MuiOutlinedInput-root': {
        fontFamily: 'Libre Baskerville',
        color: '#ff9500cf'
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id= { id } 
      type = { type }
      label = {label} 
      variant="standard" 
      />
    </Box>
  );
}

export default TextInputMUI