import { ListItemButton, ListItemText } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

type Props = {

}

export default function TopContainer(props: Props) {
  return (
    <>
        <Grid container   spacing={2} columns={10}>
          <Grid item xs={5} sx={{ textAlign: {xs:'left' , md:'left'} }}>
            <Tooltip title="「全民大派$3000!」使用攻略" placement="top-start" >
              <Button color="success">「全民大派$3000!」使用攻略</Button>
            </Tooltip>
            <Tooltip title="直送海外" placement="top">
              <Button color="success">直送海外</Button>
            </Tooltip>
            <Tooltip title="新手攻略" placement="top">
              <Button color="success">新手攻略</Button>
            </Tooltip>
            <Tooltip title="VIP會員計劃" placement="top">
              <Button color="success">VIP會員計劃</Button>
            </Tooltip>
            <Tooltip title="商店列表" placement="top-end">
              <Button color="success">商店列表</Button>
            </Tooltip>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: {xs:'right' , md:'right'} }}>
            <Tooltip title="常見問題" placement="right-start">
              <Button>常見問題</Button>
            </Tooltip>
            <Tooltip title="O2O自取點" placement="right">
              <Button>O2O自取點</Button>
            </Tooltip>
            <Tooltip title="工作機會" placement="right">
              <Button>工作機會</Button>
            </Tooltip>
            <Tooltip title="商戶加盟" placement="right-end">
              <Button>商戶加盟</Button>
            </Tooltip>
          </Grid>

        </Grid>
            </>
  );
}


{/* < div className = "top container" >
        <div className="bar">
          <div>
            <ul className="nav" id="nav-right">
              <li>
                <a
                  data-tag="常見問題"
                  href="https://www.hktvmall.com/hktv/zh/cs-help"
                >
                  常見問題
                </a>
              </li>
              <li>
                <a
                  data-tag="O2O自取點"
                  href="https://cloud.marketing.hktvmall.com/storelocationzh?footer"
                >
                  O2O自取點
                </a>
              </li>
              <li>
                <a
                  data-tag="工作機會"
                  href="https://www.hktv.com.hk/big5/careers/recruit.php"
                >
                  工作機會
                </a>
              </li>
              <li>
                <a
                  data-tag="商戶加盟"
                  href="https://cloud.marketing.hktvmall.com/applymerchant"
                >
                  商戶加盟
                </a>
              </li>
            </ul>
            <div className="lang">
              <a
                className="btn-function"
                data-tag="english"
                href="javascript:document.changeLanguage.submit()"
              >
                ENG
              </a>
              <form
                action="/hktv/zh/_s/language"
                id="lang-form"
                method="post"
                name="changeLanguage"
                style={{ display: "none" }}
              >
                <input
                  id="lang-code"
                  name="code"
                  type="hidden"
                  defaultValue="en"
                />
                <div>
                  <input
                    name="CSRFToken"
                    type="hidden"
                    defaultValue="0fd93a28-3a7e-4925-9372-00138a2123bb"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="logo" id="topLogo">
          <a href="/hktv/zh/">
            <img
              alt="HKTVmalllogo_20171220.png"
              src="/medias/sys_master/images/images/h86/h57/12110146404382.png"
              title="HKTVmalllogo_20171220.png"
            />
          </a>
        </div>
      </ >
  <div className="container" id="tab">
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
  </div>
               </div >
           </div >
         </div > */}