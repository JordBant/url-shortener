import './mui-input-component'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputMUI = ({label, type, stateValue, handleChange, updateParentState}) => {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 0, width: '100%'  },
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
    <TextField
    stateValue = { stateValue }
    type = {type} 
    label = {label}
    updateParentState =  { updateParentState }
    onChange = {(event) => {
      updateParentState(handleChange(stateValue, event))
    }}
    className='text-field'
    variant = 'filled' />
  </Box>
  )
}

export default InputMUI