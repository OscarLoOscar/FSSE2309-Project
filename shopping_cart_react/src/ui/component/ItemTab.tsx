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
        <Grid sx={{ textAlign: { xs: 'center', md: 'center' } }}>
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
                  //color: 'white',
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
                  backgroundColor: 'black',
                },
              }}
            />
            <Tab label="母嬰育兒" />
            <Tab label="寵物用品" />
            <Tab label="大腦場" />
            <Tab label="家居電器" />
            <Tab label="家品傢俬" />
            <Tab label="吃喝玩樂" />
            <Tab label="運動旅行" />
            <Tab label="玩具圖書" />
            <Tab label="時尚服飾" />
            <Tab label="保險金融" />
          </Tabs>
        </Grid>
      </Grid>
    </>

  );
}
{/* <div className="container" id="tab">
<ul className="wrapper">
  <li>
    <a
      data-tag="everuts_redirection_tab"
      href="https://www.everuts.com/zh-HK"
      target="_blank"
    >
      <span>Everuts</span>
    </a>
  </li>
  <li>
    <a
      className="thirteenlandmarks"
      data-tag="thirteenlandmarks"
      href="/hktv/zh/thirteenlandmarks"
    >
      <span>13Landmarks</span>
    </a>
  </li>
  <li>
    <a
      className="supermarket"
      data-tag="supermarket"
      href="/hktv/zh/supermarket"
    >
      <span>超級市場</span>
    </a>
  </li>
  <li>
    <a
      className="personalcarenhealth"
      data-tag="personalcare_and_health"
      href="/hktv/zh/personalcarenhealth"
    >
      <span>護理保健</span>
    </a>
  </li>
  <li>
    <a
      className="beautynhealth"
      data-tag="beauty_and_health"
      href="/hktv/zh/beautynhealth"
    >
      <span>護膚化妝</span>
    </a>
  </li>
  <li>
    <a className="macau" data-tag="macau" href="/hktv/zh/macau">
      <span>直送澳門</span>
    </a>
  </li>
  <li>
    <a
      className="mothernbaby"
      data-tag="mother_and_baby"
      href="/hktv/zh/mothernbaby"
    >
      <span>母嬰育兒</span>
    </a>
  </li>
  <li>
    <a className="pets" data-tag="pets" href="/hktv/zh/pets">
      <span>寵物用品</span>
    </a>
  </li>
  <li>
    <a
      className="gadgetsandelectronics active"
      data-tag="gadgets_and_electronics"
      href="/hktv/zh/gadgetsandelectronics"
    >
      <span>大腦場</span>
    </a>
  </li>
  <li>
    <a
      className="homenfamily"
      data-tag="home_and_family"
      href="/hktv/zh/homenfamily"
    >
      <span>家居電器</span>
    </a>
  </li>
  <li>
    <a
      className="housewares"
      data-tag="housewares"
      href="/hktv/zh/housewares"
    >
      <span>家品傢俬</span>
    </a>
  </li>
  <li>
    <a className="deals" data-tag="deals" href="/hktv/zh/deals">
      <span>吃喝玩樂</span>
    </a>
  </li>
  <li>
    <a
      className="sportsntravel"
      data-tag="sports_and_travel"
      href="/hktv/zh/sportsntravel"
    >
      <span>運動旅行</span>
    </a>
  </li>
  <li>
    <a
      className="toysnbooks"
      data-tag="toys_and_books"
      href="/hktv/zh/toysnbooks"
    >
      <span>玩具圖書</span>
    </a>
  </li>
  <li>
    <a className="fashion" data-tag="fashion" href="/hktv/zh/fashion">
      <span>時尚服飾</span>
    </a>
  </li>
  <li>
    <a
      className="finance"
      data-tag="insurance_and_finance"
      href="/hktv/zh/finance"
    >
      <span>保險金融</span>
    </a>
  </li>
</ul>
</div> */}

