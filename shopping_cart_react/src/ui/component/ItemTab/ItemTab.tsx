import Tab from '@mui/material/Tab';
import React from 'react';
import { Grid, Tabs } from '@mui/material';
type Props = {

}

export default function ItemTab(props: Props) {
  const [value, setlabel] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setlabel(newValue);
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid sx={{ width:'90%',
        textAlign: { xs: 'center', md: 'center' } }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            <Tab label="Everuts"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  backgroundColor: 'white',
                },
              }} />
            <Tab label="13Landmarks"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: 'black',
                },
              }}
            />
            < Tab label="超級市場"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'green',
                  backgroundColor: 'lightgreen',
                },
              }}
            />
            <Tab label="護理保健"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  backgroundColor: 'orange',
                },
              }}
            />
            <Tab label="護膚化妝" sx={{
              fontSize: '12px',
              '&:hover': {
                color: 'white',
                backgroundColor: 'pink',
              },
            }}
            />
            <Tab label="直送澳門"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#ab003c',
                },
              }}
            />
            <Tab label="母嬰育兒"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#90caf9',
                },
              }}
            />
            <Tab label="寵物用品"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#f44336',
                },
              }}
            />
            <Tab label="大腦場"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#7e57c2',
                },
              }}
            />
            <Tab label="家居電器"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#80cbc4',
                },
              }}
            />
            <Tab label="家品傢俬"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#d4e157',
                },
              }}
            />
            <Tab label="吃喝玩樂"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#66bb6a',
                },
              }}
            />
            <Tab label="運動旅行"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'grey',
                  backgroundColor: '#eeff41',
                },
              }}
            />
            <Tab label="玩具圖書"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'grey',
                  backgroundColor: '#fff176',
                },
              }}
            />
            <Tab label="時尚服飾"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#9e9e9e',
                },
              }}
            />
            <Tab label="保險金融"
              sx={{
                fontSize: '12px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#ff7043',
                },
              }}
            />
          </Tabs>
        </Grid>
      </Grid>
    </>

  );
}