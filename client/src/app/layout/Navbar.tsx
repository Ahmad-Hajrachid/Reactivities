import { Box, AppBar, Toolbar, Container, Typography, Button, MenuList } from '@mui/material';
import { Group } from '@mui/icons-material';
import { NavLink } from 'react-router';
import MenuItemLink from '../shared/components/MenuItemLink';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'}}>
        <Container maxWidth ='xl'>
          <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
              <Group fontSize='large'/>
              <Typography component={NavLink} to='/' variant="h4" sx={{
                 fontWeight: 'bold',
                 color:'inherit',
                 textDecoration:'none' }}>Reactivities</Typography>
            </Box>
            <MenuList sx={{ display: 'flex' }}>
              <MenuItemLink to='/activities'>Activities</MenuItemLink>
              <MenuItemLink to='/createActivity'>Create Activity</MenuItemLink>
            </MenuList>
            {/* <Button onClick={()=>{}} size='large' variant='contained' color='warning'>Create Activity</Button> */}
            <Button onClick={()=>{}} size='large' variant='contained' color='warning'>User Menu</Button>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
