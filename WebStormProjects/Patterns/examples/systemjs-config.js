SystemJS.config({
    map: {
        'plugin-babel': base + '/node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': base + '/node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
    },
    transpiler: 'plugin-babel',
    packages: {
        '.': {
            defaultExtension: 'js'
        }
    }
});
