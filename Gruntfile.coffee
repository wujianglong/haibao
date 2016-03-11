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
          port: 8181
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
            src: './bower_components/jquery/dist/jquery.js'
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
            expand: true
            cwd: './src/assets/lib'
            src: [
              './*.js'
            ]
            dest: './dist/assets/js'
          }
          {
            src: './bower_components/jquery/dist/jquery.min.js'
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
            src:['./src/app.config','./temp/main.temp.js']
            dest:'./temp/main.js'
          }
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
              './vendor/qiniu/qiniu.js'
              './vendor/qiniu/plupload.min.js'
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
        ]
      build:
        files:[
          {
            src:['./src/app.config','./temp/main.temp.js']
            dest:'./build/assets/js/main.min.js'
          }
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
              './vendor/qiniu/qiniu.js'
              './vendor/qiniu/plupload.min.js'
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
        ]

    cssmin:
      release:
        files:[
          {
            src:"./temp/main.css"
            dest:"./dist/assets/css/main.css"
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

    karma:
      unit:
        configFile: 'karma.conf.coffee'

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
        dest:'./temp/main.temp.js'
      release:
        options:
          module: 'amd'
          noImplicitAny: true
          removeComments: true
          sourceMap: false
          suppressImplicitAnyIndexErrors: false
          target: 'es5'
        src: './src/assets/ts/**/*.ts'
        dest: './temp/main.temp.js'

  # These plugins provide necessary tasks.
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-typescript'

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
  ]
