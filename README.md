### Welcome to the Unofficial EasyBacklog Mobile App

With this project I want to learn how to create apps using [PhoneGap](http://phonegap.com/).

### Build:
[![Build Status](https://travis-ci.org/gabbersepp/unofficial-easy-backlog-mobile.png)](https://travis-ci.org/gabbersepp/unofficial-easy-backlog-mobile)

### Libraries
The project uses CSS Styles from [Zurb Foundation](http://foundation.zurb.com).
As test framework i decided to go with [Jasmine](http://pivotal.github.io/jasmine/).
With [Jasmine-jQuery](https://github.com/velesin/jasmine-jquery) we can extend the functionallity of Jasmine with fixtures loading and much more.

### How to start with the App?
You can download the App by using the [Adobe Build Service](https://build.phonegap.com/apps/699181/builds) (currently no IOS App is available, also i have only tested the Android App).
Or setup PhoneGap on your local environment and build the App on your own.

### How to start with the tests?
Checkout the repo and call _projectroot/www/spec.html_ 

If you like to execute the test for the real easybacklog api also, then create a file named 'user.conf.js' in _projectroot/www_ with following content:
```javascript
var conf_apiKey = "<your easybacklog api key>";
var conf_accountId = <your easybacklog account id>;
```

In some browsers you have to ensure that Cross-Origin-Requests are allowed.
If you use FireFox you can use an addon called "Force CORS" which will do that for you.

Then call _projectroot/www/spec.html_

You also can download [PhantomJS](http://phantomjs.org/download.html), add the folder to your %PATH% and call the Script "pjs.bat" within the project root

_Notice:_
The _specconsole.html_ is needed for travis-ci.org

