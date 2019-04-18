<template>
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Jokes</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>                    
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/html/find_jokes.html">Find Jokes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/html/login.html">Login</a>
                </li>
            </ul>
        </div>
    </nav>

  <div class="content">
    <router-view />
    <div id="footer">
        Github classroom repository URL: <a
            href="https://github.com/thaitie/creative5/">https://github.com/thaitie/creative5/</a>
    </div>   
  </div>
</div>
</template>

<style>

html {
  height: 100%;
}

body {
  font-family: Helvetica;
  margin: 0;
  height: 100%;
}

img {
  max-width: 100%;
}

#page_content {
  padding: 20px;
  min-height: 100%;
  max-width: 900px;
  text-align: center;
  margin: auto;
}

#joke_setup {
  font-size: 24px;
}

#footer {
  width: 100%;
  clear: both;
  padding: 10px;
  margin: 0;
  /* ATTENTION! The following elements below 
  can be set to whatever your heart desires */
  background: #333;
  color: white;
}

#footer a:link {
  color: white;
}

#footer a:visited {
  color: white;
}

#footer a:hover {
  color: white;
}

.input-username, .input-password, .checkbox_remember, .login-button {
  margin-top:15px;
}

/* Modals */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h1 {
  margin-bottom: 30px;
  font-size: 1.5em;
}

.modal-body {
  margin: 0;
}

.modal-body input {
  margin-bottom: 20px;
  height: 30px;
}

.modal-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.modal-default-button {
  float: right;
}

/*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
