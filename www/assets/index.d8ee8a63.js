import{c as e,F as i,$ as t}from"./vendor.b8b8b5fb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&i(e)})).observe(document,{childList:!0,subtree:!0})}function i(e){if(e.ep)return;e.ep=!0;const i=function(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?i.credentials="include":"anonymous"===e.crossorigin?i.credentials="omit":i.credentials="same-origin",i}(e);fetch(e.href,i)}}();function a(){return window.addEventListener("load",(function(){const e=["Starting your Garden","Raking Grounds","Planting Trees","Watering Plants","Adjusting Sunlight","Hooray"];let i=1;const t=document.getElementById("loadingScreenMessage");t.innerText=e[0],setInterval((()=>{i<e.length?(t.innerText=e[i],i++):t.innerText=e[e.length-1]}),2500*Math.random()+1e3)})),function(e){e.$;var i=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,i`
  <div class="page" data-name="loadingPage">
    <!-- Scrollable page content-->
    <div class="page-content">

     
      

        <img class="floating loadingScreenCloud" id="loadingScreenCloudLeft" src="../img/cloud-left.svg" alt="cloud-left"/>
        <img class="floating1 loadingScreenCloud" id="loadingScreenCloudRight" src="../img/cloud-right.svg" alt="cloud-right"/>

        <img id="loadingScreenMigrosM" src="../img/migros-m.svg" height="300px" />

        <p id="loadingScreenMessage" class="pixel"></p>


    </div>
  </div>
`}}function n(){return function(e){e.$;var i=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,i`
  <div class="page" data-name="loginPage">
    <div class="page-content">
      <div class="login-screen-title">
        <img src="../img/migros-m.svg" height="100px" />
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
`}}function o(){return function(e){e.$;var i=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,i`
  <div class="page" data-name="homePage">
    <div class="navbar navbar-transparent">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <!-- <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span>Back</span>
          </a> 
        </div>
        <div class="right">
          <a href="#" class="link">
            <i class="icon another-icon"></i>
            <span>Menu</span>
          </a>
        </div>-->
      </div>
    </div>
    <!-- Scrollable page content-->
    <div class="page-content">
      <div class="fab fab-extended fab-left-top">
        <a href="#">
          <img class="img-seed" src="../img/seed.svg" />
          <div class="fab-text">2585</div>
        </a>
      </div>

      <div class="fab fab-right-top">
        <a href=""> <img class="img-info" src="../img/farmer.svg" /></a>
        <a href=""> <img class="img-info" src="../img/watering-can.svg" /></a>
        <a href=""><img class="img-info" src="../img/info.svg" /></a>
      </div>
<div>
      <img class="floating loadingScreenCloud" id="mainScreenCloudLeft" src="../img/cloud-left.svg" alt="cloud-left"/>
      <img class="floating1 loadingScreenCloud" id="mainScreenCloudRight" src="../img/cloud-right.svg" alt="cloud-right"/>
    </div>
      <img class="flowerarea" src="../img/full-plant-l3-day.svg" />

      <div class="block flowerDiv"></div>
    </div>
  </div>
`}}a.id="67b88af3ae",n.id="a3bf663e2d",o.id="78b5b84c86";var r=[{path:"/home",component:n},{path:"/loading",component:a},{path:"/",component:o}];const s=e({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products:({state:e})=>e.products},actions:{addProduct({state:e},i){e.products=[...e.products,i]}}});function l(){return function(e){e.$;var i=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,i`
  <div id="app">

  <!-- Your main view, should have "view-main" class -->
  <div class="view view-main view-init safe-areas" data-url="/"></div>

  </div>
`}}l.id="69e58a62a9";var d=new i({name:"Gardener",theme:"ios",el:"#app",component:l,on:{init:function(){console.log("App initialized")},pageInit:async function(){console.log("Page initialized"),await async function(){var e=d.view.main;d.request.json(`https://api.sunrise-sunset.org/json?lat=${c}&lng=${u}`).then((e=>{var i=e.data.results.sunrise;e.data.results.sunset,e.data.results.sunset,console.log(i)})),t(".convert-form-to-data").on("click",(async function(){if(document.querySelector(".input-invalid")||""==document.querySelector("input[name=username]").value||""==document.querySelector("input[name=password]").value)d.dialog.alert("Please provide correct data","Invalid Input(s)");else{var i=d.form.convertToData(".login-form");console.log("Logged in as "+i.username),e.router.navigate({name:"home"})}}))}()}},store:s,routes:r,serviceWorker:{path:"/service-worker.js"}}),c=46.743552,u=9.5551488;"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((e=>{c=e.coords.latitude,u=e.coords.longitude}));
