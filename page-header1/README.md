# Page Header 1
A full page header built with HTML5 and CSS3 with a menu on the bottom right. The menu is animated on hover and the 
active and not active pages are easily separable. There's a possibility to add more pages by only adding the new links 
in the HTML code.

SASS is used for the CSS and common variables are configurable.

A sample main content is added to show how the header is integrated with the page. A small 
JavaScript/[jQuery](https://jquery.com/) code is used on page load and menu button click to simulate content change.

### Install

You need [npm](https://www.npmjs.com), [gulp](http://gulpjs.com/) and jQuery to work with this project:

    npm install -g gulp
    npm install
    
Npm installs `gulp`, `gulp-sass`, `gulp-clean` and `jQuery` in `node_modules/`. Gulp is used to build and watch the 
changes in the files. 
Running `gulp build` will create the CSS file and copy jQuery next to the `index.html` for easier visibility and 
portability:

    gulp build
    
After the `gulp build` is finished open [index.html](index.html) to see the final result.
    
### Additional commands
    
Running `gulp` only will build the files and start watching for changes:

    gulp
    
`Gulp build` and `gulp` commands are running the `clean` task automatically but you can run it directly with:

    gulp clean
    
It deletes the css and jQuery files and leaves the project with the default structure. Only the `node_modules` dir stays.
