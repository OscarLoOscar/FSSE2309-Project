<div className="account">
<a className="btn-login" data-tag="login" href="/hktv/zh/login">
  登入
</a>
<a
  className="btn-register"
  data-tag="register"
  href="javascript: void(0)"
  onclick="if(typeof registerColorbox === 'function')registerColorbox();"
>
  登記
</a>
<div>
  <a className="btn-msgCenter">訊息</a>
  <ul className="mymessage list" id="messagePopup">
    <li className="msgBoxHeader">
      <span className="title">訊息</span>
    </li>
    <li className="messageWrapper">
      <div
        className="noMessageOverlay"
        style={{ display: "block" }}
      >
        <div className="icNomsgSmall"></div>
        <div className="nomsg">沒有訊息</div>
        <a
          className="greenButton"
          href="/hktv/zh/login"
          onclick="analytics.trackEventV2('header', 'message_center_login');"
        >
          登入
        </a>
      </div>
      <div className="msgContainer"></div>
    </li>
  </ul>
</div>
<div>
  <a
    className="btn-mylist"
    data-tag="mylist"
    href="/hktv/zh/mylist"
  >
    我的清單
  </a>
</div>
<a
  className="btn-cart"
  data-restricted="false"
  data-tag="shopping_cart"
  href="/hktv/zh/cart/checkout/select-flow?flow=express&pci="
  onclick="ACC.common.buttonToCheckoutExpress();applyCheckoutRestrictions(event);"
>
  購物車
  <span className="cart-number-label">0</span>
</a>
</div>
</div>
</div>
