import { Box, Button, Container, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';


function App() {
  const [counter, setCounter] = useState(0)
  const  handleIncrement = () => setCounter(counter+1);
  const  handleIDecrement = () => setCounter(counter-1);
  return (

<>
<Container 
sx={{
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
    height:"100vh"
    }}>
  <Box
  sx={{
    backgroundColor:"#030005",
    color:"white",
    width:"300px",
    height:"400px",
    textAlign:"center",
    padding:"20px",
    borderRadius:"90px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    boxShadow: "rgb(0, 0, 0) 0px 22px 70px 4px;",
  }}
  >
  <Typography variant="h1" gutterBottom>
        {counter}
  </Typography>

    <Stack direction={'row'} spacing={8} justifyContent={'center'}  >
      {counter === 0 ? <></>:
      <Button 
      sx={{ 
        color:"white",
        background:"red",
        ":hover":{  },
        borderRadius:"20px",
        }} 
      onClick={ handleIDecrement}> 
      <RemoveIcon /></Button>}

      <Button variant="contained" color="success" onClick={ handleIncrement}
       sx={{ 
        color:"white",
        borderRadius:"20px"
        }} 
      > <AddIcon /> </Button>

    </Stack>
  </Box>
</Container>
</>
  );
}






export default App;
