import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  // css menu
  a.active {
    background: white;
    color: black;
  }
  ul {display: flex;}
  ul li {list-style: none;}
  ul li a {
    padding: 10px 25px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  .MuiToolbar-root.MuiToolbar-regular.menu.MuiToolbar-gutters {
    justify-content: space-between;
    padding: 20px 150px;
}
.menu .MuiTypography-h6 {
  font-weight: 900;
  font-size: 26px;
}
/*content */
section { 
  padding: 30px 150px 50px;
}
.tieude {
  text-align: center;
}
/*contact*/
form {
	text-align: center;
}
span.err {
  font-size: 12px;
  margin: 10px 0 0;
  color: red;
  display: block;
  text-align: left;
}
.form-group {
	padding: 0 230px;
}
.form-group label {
    display: block;
    text-align: left;
    font-weight: bold;
    margin-bottom: 10px
}
.form-group input {
    width: 100%;
    display: block;
    border-radius: 3px;
    border: 1px solid #ff980096;
    padding: 10px;
    margin-bottom: 20px;
}
button.btn {
    background: tomato;
    color: #000000;
    border: none;
    padding: 10px 25px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: .3s ease-in-out;
    position: relative;
    z-index: 1;
    border-radius: 20px;
    display: inherit
    margin: 15px auto 0;
    outline: none;
}
button.btn:after{
	content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 60%;
    height: 100%;
    transform: translateX(-50%);
    background: seagreen;
    visibility: hidden;
    opacity: 0;
    transition: .3s ease-in-out;
    display: block;
    z-index: -1
}
button.btn:hover {
	background: transparent; 
	transition: .3s ease-in-out;
	color: white;
}
button.btn:hover:after{
	width: 100%;
	visibility: visible;
	opacity: 1;

}

/*Footer*/
footer {
    background: seagreen;
    color: white;
    text-align: center;
    word-spacing: 5px;
    padding: 20px 150px;
    margin-top: 30px;
}
.MuiIcon-fontSizeSmall {
  font-size: 2.25rem;
}
td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone {
  width: 90px;
}
a.MuiTypography-root.MuiLink-root.MuiLink-underlineHover.MuiTypography-colorPrimary {
  background: tomato;
  padding: 10px;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  font-size: 12px;
}
`;

export default GlobalStyle;
