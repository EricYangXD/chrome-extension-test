import styled from "styled-components"

export const Container = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  .text {
    width: 360px;
    padding: 12px;
    background: #fff;
  }
  .title {
    background: #efefef;
    font-size: 12px;
  }
  .clickable {
    cursor: pointer;
  }
  .clickable:hover {
    background: aquamarine;
    text-decoration: underline;
    color: #3079ed;
  }
  .plugin_search {
    margin: 15px 30px 15px 30px;
  }
  .plugin_search_bar {
    margin: 8px 0 16px 0;
  }
  #plugin_search_inp {
    font-size: 14px;
    margin: 2px;
    height: 23px;
    width: 70%;
  }
  #plugin_search_but {
    box-shadow: none;
    background-color: #4d90fe;
    background-image: -webkit-linear-gradient(top, #4d90fe, #4787ed);
    border: 1px solid #3079ed;
    color: #fff;
    border-radius: 2px;
    cursor: default;
    font-size: 11px;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    margin-right: 16px;
    height: 27px;
    line-height: 27px;
    width: 54px;
    outline: 0px;
    padding: 0 8px;
    box-sizing: content-box;
  }
  .plugin_span {
    color: #4285f4;
  }
  .plugin_footer {
    background-color: #f0f0f0;
    color: #636363;
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    margin-top: 9px;
    padding: 10px;
    text-align: center;
    width: 400px;
  }
  .plugin_footer a {
    color: #4285f4;
  }
`
