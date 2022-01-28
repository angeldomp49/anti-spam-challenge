let mix = require('laravel-mix');

mix.js('src/index.js', 'dist/anti-spam-challenge.min.js')
        .react()
        .sourceMaps();

mix.copy('src/components/challenge/the-background-292720_1280.png', 'dist');