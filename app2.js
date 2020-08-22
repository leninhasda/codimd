var ejs = require('ejs')

var express = require('express')

var app = express()
var server = require('http').createServer(app)

app.set('views', './public/views')
// set render engine
app.engine('ejs', ejs.renderFile)
// set view engine
app.set('view engine', 'ejs')
var i18n = require('i18n')
var path = require('path')

i18n.configure({
  locales: ['en', 'zh-CN', 'zh-TW', 'fr', 'de', 'ja', 'es', 'ca', 'el', 'pt', 'it', 'tr', 'ru', 'nl', 'hr', 'pl', 'uk', 'hi', 'sv', 'eo', 'da', 'ko', 'id', 'sr'],
  cookie: 'locale',
  directory: path.join(__dirname, '/locales'),
  updateFiles: false,

})
app.use(i18n.init)
app.use('/', express.static(path.join(__dirname, '/public'), { maxAge: 1 * 24 * 60 * 60 * 1000, index: false }))

app.get('/', (req, res) => { res.render('codimd', {
  title: "hello now",
  serverURL: "http://localhost:5000",
  useCDN: true,
  enableGitHubGist: false,
  enableDropBoxSave: false,
  enableGitlabSnippets: false,
  permission: ['freely'],
  authProviders: {
    facebook: false,
    twitter: false,
    github: false,
    bitbucket: false,
    gitlab: false,
    mattermost: false,
    dropbox: false,
    google: false,
    ldap: false,
    ldapProviderName: false,
    saml: false,
    oauth2: false,
    oauth2ProviderName: false,
    openID: false,
    email: false,
    allowEmailRegister: false
  }
})})

// address =  'localhost:5000'
server.listen('5000', '127.0.0.1', () => {console.log('started') } )
