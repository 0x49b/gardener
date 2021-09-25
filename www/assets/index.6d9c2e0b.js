import{c as e,F as t,$ as i}from"./vendor.b8b8b5fb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function a(){return window.addEventListener("load",(function(){const e=["Starting your Garden","Raking Grounds","Planting Trees","Watering Plants","Adjusting Sunlight","Hooray"];let t=1;const i=document.getElementById("loadingScreenMessage");i.innerText=e[0],setInterval((()=>{t<e.length?(i.innerText=e[t],t++):i.innerText=e[e.length-1]}),2500*Math.random()+1e3)})),function(e){e.$;var t=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,t`
  <div class="page" data-name="loadingPage" id="page_">
    <!-- Scrollable page content-->
    <div class="page-content">
      <img
        class="floating loadingScreenCloud"
        id="loadingScreenCloudLeft"
        src="../assets/img/cloud-left.svg"
        alt="cloud-left"
      />
      <img
        class="floating1 loadingScreenCloud"
        id="loadingScreenCloudRight"
        src="../assets/img/cloud-right.svg"
        alt="cloud-right"
      />

      <img
        id="loadingScreenMigrosM"
        src="../assets/img/migros-m.svg"
        height="300px"
      />

      <p id="loadingScreenMessage" class="pixel"></p>
    </div>
  </div>
`}}function s(){return function(e){e.$;var t=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,t`
  <div class="page" data-name="loginPage" id="page_">
    <div class="page-content">
      <div class="login-screen-title">
        <img src="../assets/img/migros-m.svg" height="100px" />
      </div>
      <form class="login-form">
        <div class="list inset no-hairlines">
          <ul>
            <li class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input
                    required
                    validate
                    type="text"
                    name="username"
                    placeholder="USERNAME"
                  />
                </div>
              </div>
            </li>
            <li class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input
                    type="password"
                    name="password"
                    required
                    validate
                    placeholder="PASSWORD"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="list inset" id="loginBtnParentDiv">
          <div>
            <a
              id="loginBtn"
              class="button button-large button-fill convert-form-to-data"
              href="#"
              >LOGIN</a
            >
          </div>
          <div></div>
          <div class="block-footer">
            <p>
              Gardener. <br />A project realised by Florian, Prasun and Jeremiah
              at HackZurich 2021
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
`}}function n(){return window.addEventListener("load",(()=>{const e=document.querySelectorAll(".count");e.forEach((e=>{const t=()=>{const i=parseInt(e.getAttribute("data-target")),a=parseInt(e.innerText),s=Math.trunc(i/500);a<i?(e.innerText=a+s,setTimeout(t,1)):e.innerText=i};t()}))})),function(e){e.$;var t=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,t`
  <div class="page" data-name="homePage" id="page_">
    <div class="navbar navbar-transparent">
      <div class="navbar-bg"></div>
      <div class="navbar-inner"></div>
    </div>
    <!-- Scrollable page content-->
    <div class="page-content">
      <div class="block-title greeting" style="text-align: center"></div>
      <div class="fab fab-extended fab-left-top">
        <a href="#">
          <img class="img-seed" src="../assets/img/seed.svg" />
          <div class="fab-text count pixel" data-target="2585">0</div>
        </a>
      </div>

      <div class="fab fab-right-top">
        <a href=""> <img class="img-info" src="../assets/img/farmer.svg" /></a>
        <a href="">
          <img class="img-info" src="../assets/img/watering-can.svg"
        /></a>
        <a href=""><img class="img-info" src="../assets/img/info.svg" /></a>
      </div>
      <div>
        <img
          class="floating loadingScreenCloud"
          id="mainScreenCloudLeft"
          src="../assets/img/cloud-left.svg"
          alt="cloud-left"
        />
        <img
          class="floating1 loadingScreenCloud"
          id="mainScreenCloudRight"
          src="../assets/img/cloud-right.svg"
          alt="cloud-right"
        />
      </div>
      <img class="flowerarea" src="../assets/img/full-plant-l3-day.svg" />

      <div class="block flowerDiv"></div>
    </div>
  </div>
`}}a.id="18e206f724",s.id="a4faeb1637",n.id="1ac9650580";var o=[{path:"/",name:"login",component:s},{path:"/loading",name:"loading",component:a},{path:"/home",name:"home",component:n}];const r=e({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products:({state:e})=>e.products},actions:{addProduct({state:e},t){e.products=[...e.products,t]}}});function l(){return function(e){e.$;var t=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,t`
  <div id="app">

  <!-- Your main view, should have "view-main" class -->
  <div class="view view-main view-init safe-areas" data-url="/"></div>

  </div>
`}}l.id="48a9bd8875";var d=new t({name:"Gardener",theme:"ios",el:"#app",component:l,on:{init:function(){console.log("App initialized")},pageInit:async function(){console.log("Page initialized"),await async function(){var e,t,a,s,n=d.view.main,o="Good ";const r=i(".greeting");d.request.json(`https://api.sunrise-sunset.org/json?lat=${c}&lng=${u}&date=today&formatted=0`).then((n=>{var l=n.data.results.sunrise,d=n.data.results.sunset,c=n.data.results.solar_noon;e=new Date(d),t=new Date(c),a=new Date(l);const u=new Date(c).getTime()-new Date(l).getTime();new DataTransfer(a.getTime()+u/3),s=new Date(e.getTime()-u/3);const g=new Date;g>=s?(console.log("nsdnvfklassas"),o+=" Evening!",r.text(o),i("#page_").css("background-image","url(../assets/img/sky-night.svg)")):g>=t?(console.log("asasasass"),o+=" Afteroon!",r.text(o),i("#page_").css("background-image","url(../assets/img/sky-day.svg)")):g>=datetime?(console.log("nsdnvfkl"),o+=" Morning!",r.text(o),i("#page_").css("background-image","url(../assets/img/sky-day.svg)")):g>=a?(console.log("nsdnvfkl"),o+=" Morning!",r.text(o),i("#page_").css("background-image","url(../assets/img/sky-night.svg)")):g<a&&(console.log("nsdnvfkl"),o+=" Night!",r.text(o),i("#page_").css("background-image","url(../assets/img/sky-night.svg)"))})),i(".convert-form-to-data").on("click",(async function(){if(document.querySelector(".input-invalid")||""==document.querySelector("input[name=username]").value||""==document.querySelector("input[name=password]").value)d.dialog.alert("Please provide correct data","Invalid Input(s)");else{var e=d.form.convertToData(".login-form");console.log("Logged in as "+e.username),n.router.navigate({name:"home"})}}))}()}},store:r,routes:o,serviceWorker:{path:"/service-worker.js"}}),c=46.743552,u=9.5551488;"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((e=>{c=e.coords.latitude,u=e.coords.longitude}));
