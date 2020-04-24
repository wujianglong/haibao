module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    # Task configuration.
    clean:
      build:
        src: [
          './build/*'
          './build/.*'
          './build/*.*'
        ]
      release:
        src: [
          './dist/*'
          './dist/.*'
          './dist/*.*'
        ]
      map:
        src: [
          './build/assets/js/main.min.js.map'
        ]
      temp:
        src:[
          "./temp"
        ]

    connect:
      server:
        options:
          keepalive: true
          port: 82
          base: 'build'
          open:true
      release:
        options:
          keepalive: true
          port: 80
          base: 'dist'
          open:true



    copy:
      build:
        files: [
          {
            src:'./src/app.config.js',
            dest:'./build/app.config.js'
          }
          {
            expand: true
            cwd: './src/assets'
            src: [
              'img/**/*.*'
              'js/**/*.js'
              'views/**/*.html'
              'template/*.html'
            ]
            dest: './build/assets'
          }
          {
            src: './bower_components/angular/angular.js'
            dest: './build/assets/js/angular.min.js'
          }
          {
            src: './src/assets/lib/jquery.min.js'
            dest: './build/assets/js/jquery.min.js'
          }
          {
            expand: true
            cwd: './bower_components/bootstrap/dist'
            src: [
              'fonts/**/*.*'
            ]
            dest: './build/assets'
          }
          {
            src: './src/index.html'
            dest: './build/index.html'
          }
          {
            src: './src/download/index.html',
            dest: './build/download/index.html'
          }
          {
            expand: true
            cwd: './src/assets/lib'
            src: [
              './*.js'
            ]
            dest: './build/assets/js'
          }
          {
            expand: true
            cwd: './vendor/jqlayer'
            src: [
              './skin/**'
            ]
            dest: './build/assets/js'
          }
        ]
      release:
        files: [
          {
            src:'./src/app.config.js',
            dest:'./dist/app.config.js'
          }
          {
            expand: true
            cwd: './src/assets'
            src: [
              'img/**/*.*'
              'js/**/*.js'
              'views/*.html'
              'template/*.html'
            ]
            dest: './dist/assets'
          }
          {
            src: './bower_components/angular/angular.js'
            dest: './dist/assets/js/angular.min.js'
          }
          {
            expand: true
            cwd: './bower_components/bootstrap/dist'
            src: [
              'fonts/**/*.*'
            ]
            dest: './dist/assets'
          }
          {
            src: './src/index.html'
            dest: './dist/index.html'
          }
          {
            src: './src/download/index.html',
            dest: './dist/download/index.html'
          }
          {
            expand: true
            cwd: './src/assets/lib'
            src: [
              './*.js'
            ]
            dest: './dist/assets/js'
          }
          {
            src: './build/assets/js/jquery.min.js'
            dest: './dist/assets/js/jquery.min.js'
          }
          {
            expand: true
            cwd: './vendor/jqlayer'
            src: [
              './skin/**'
            ]
            dest: './dist/assets/js'
          }
        ]

    concat:
      release:
        files:[
          {
            src:[
              './bower_components/angular-ui-router/release/angular-ui-router.min.js'
              './bower_components/angular-ui-event/dist/event.min.js'
              './bower_components/angular-ui-switch/angular-ui-switch.min.js'
              './bower_components/angular-shims-placeholder/dist/angular-shims-placeholder.min.js'
            ]
            dest:'./dist/assets/js/angular-widget.min.js'
          }
          {
            src:[
              './vendor/jqlayer/layer.min.js'
              './vendor/jqueryrebox/jquery-rebox.js'
            ]
            dest:'./temp/other.js'
          }
          {
            src:[
              './bower_components/bootstrap/dist/css/bootstrap.min.css'
              './bower_components/angular-ui-switch/angular-ui-switch.min.css'
              './vendor/jqueryrebox/jquery-rebox.css'
              './src/assets/css/main.css'
            ]
            dest:'./temp/main.css'
          }
          {
            src: ['./src/assets/css/download.css']
            dest:'./temp/download.css'
          }
        ]
      build:
        files:[
          {
            src:[
              './bower_components/angular-ui-router/release/angular-ui-router.min.js'
              './bower_components/angular-ui-event/dist/event.min.js'
              './bower_components/angular-ui-switch/angular-ui-switch.min.js'
              './bower_components/angular-shims-placeholder/dist/angular-shims-placeholder.min.js'
            ]
            dest:'./build/assets/js/angular-widget.min.js'
          }
          {
            src:[
              './vendor/jqlayer/layer.min.js'
              './vendor/jqueryrebox/jquery-rebox.js'
            ]
            dest:'./build/assets/js/other.min.js'
          }
          {
            src:[
              './bower_components/bootstrap/dist/css/bootstrap.min.css'
              './bower_components/angular-ui-switch/angular-ui-switch.min.css'
              './vendor/jqueryrebox/jquery-rebox.css'
              './src/assets/css/main.css'
            ]
            dest:'./build/assets/css/main.css'
          }
          {
            src: [ './src/assets/css/download.css' ]
            dest:'./build/assets/css/download.css'
          }
        ]

    cssmin:
      release:
        files:[
          {
            src:"./temp/main.css"
            dest:"./dist/assets/css/main.css"
          }
          {
            src: './temp/download.css'
            dest:'./dist/assets/css/download.css'
          }
        ]

    uglify:
      release:
        files:[
          {
            src: './temp/main.js'
            dest: './dist/assets/js/main.min.js'
          }
          {
            src:'./temp/other.js'
            dest:'./dist/assets/js/other.min.js'
          }
        ]


    watch:
      options:
        spawn: false
        livereload: true
      build:
        files: [
          './src/**/*.html'
          './src/**/*.css'
          './src/**/*.js'
          './src/**/*.ts'
        ]
        tasks: [
          'clean:build'
          'copy:build'
          'concat:build'
          'typescript:build'
          'clean:map'
        ]

    typescript:
      build:
        options:
          module: 'amd'
          noImplicitAny: true
          removeComments: true
          sourceMap: true
          suppressImplicitAnyIndexErrors: false
          target: 'es5'
        src: './src/assets/ts/**/*.ts'
        dest:'./build/assets/js/main.min.js'
      release:
        options:
          module: 'amd'
          noImplicitAny: true
          removeComments: true
          sourceMap: false
          suppressImplicitAnyIndexErrors: false
          target: 'es5'
        src: './src/assets/ts/**/*.ts'
        dest: './temp/main.js'

    filerev:
      options:
        algorithm: 'sha1',
        length: 4
      styles:
        src: './dist/assets/css/main.css'
      js:
        src: './dist/assets/js/main.min.js'

    usemin:
      html: 'dist/index.html'

  # These plugins provide necessary tasks.
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-typescript'
  grunt.loadNpmTasks 'grunt-filerev'
  grunt.loadNpmTasks 'grunt-usemin'

  # Build for dev.
  grunt.registerTask 'build', [
    'clean:build'
    'copy:build'
    'concat:build'
    'typescript:build'
    'clean:map'
    'watch:build'
  ]

  # Build for release.
  grunt.registerTask 'release', [
    'clean:release'
    'copy:release'
    'concat:release'
    'typescript:release'
    'cssmin:release'
    'uglify:release'
    'filerev'
    'usemin'
  ]

  grunt.registerTask 'print', ->
     console.log('grunt.filerev.summary:', grunt.filerev.summary)
