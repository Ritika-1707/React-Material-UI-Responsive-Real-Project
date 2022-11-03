import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{ xs: "none", sm: "block"  }}}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={9}>
          <Avatar 
            alt="Remy Sharp" 
            src="/static/images/avatar/1.jpg" 
          />
          <Avatar 
            alt="Travis Howard" 
            src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?cs=srgb&dl=pexels-myicahel-tamburini-1553783.jpg&fm=jpg" 
          />
          <Avatar 
            alt="Cindy Baker" 
            src="https://images.pexels.com/photos/1315741/pexels-photo-1315741.jpeg?cs=srgb&dl=pexels-ali-madad-sakhirani-1315741.jpg&fm=jpg" 
          />
          <Avatar 
            alt="Agnes Walker" 
            src="https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?cs=srgb&dl=pexels-simon-robben-977796.jpg&fm=jpg" 
          />
          <Avatar 
            alt="Trevor Henderson" 
            src="/static/images/avatar/5.jpg" 
          />
          <Avatar 
            alt="Agnes Walker" 
            src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1391498.jpg&fm=jpg" 
          />
          <Avatar 
            alt="Agnes Walker" 
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg" 
          />
          <Avatar 
            alt="Trevor Henderson" 
            src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?cs=srgb&dl=pexels-helena-lopes-708440.jpg&fm=jpg" 
          />
          <Avatar 
            alt="Trevor Henderson" 
            src="https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?cs=srgb&dl=pexels-simon-robben-977796.jpg&fm=jpg" 
          />
          <Avatar 
            alt="Trevor Henderson" 
            src="/static/images/avatar/5.jpg" 
          />
          <Avatar 
            alt="Trevor Henderson" 
            src="/static/images/avatar/5.jpg" 
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}  >
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/2035735/pexels-photo-2035735.jpeg?cs=srgb&dl=pexels-cats-coming-2035735.jpg&fm=jpg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/834894/pexels-photo-834894.jpeg?cs=srgb&dl=pexels-jeshootscom-834894.jpg&fm=jpg'
              alt=''
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?cs=srgb&dl=pexels-myicahel-tamburini-1553783.jpg&fm=jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?cs=srgb&dl=pexels-simon-robben-977796.jpg&fm=jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar;