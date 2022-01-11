/**
 * 存储LocalStorage
 */

const TokenKey = 'test_token'
const LangKey = "test_language";

export function getToken () {
  return localStorage.getItem(TokenKey)
}

export function setToken (token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken () {
  return localStorage.removeItem(TokenKey)
}

export function getLang() {
  return localStorage.getItem(LangKey);
}

export function setLang(lang) {
  return localStorage.setItem(LangKey, lang);
}

export function removeLang() {
  return localStorage.removeItem(LangKey);
}