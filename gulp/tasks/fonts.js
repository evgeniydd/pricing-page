import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import fontfacegen from 'gulp-fontfacegen';
import { deleteAsync } from 'del';

export const otfToTtf = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/*.otf`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'FONTS',
					message: 'Error <%= error.message %>',
				})
			)
		)
		.pipe(
			fonter({
				formats: ['ttf'],
			})
		)
		.pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const ttfToWoff = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'FONTS',
					message: 'Error <%= error.message %>',
				})
			)
		)
		.pipe(
			fonter({
				formats: ['woff'],
			})
		)
		.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
		.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const fontsStyle = () => {
	return deleteAsync(['./src/scss/fonts.scss']).then(() => {
		return app.gulp.src(`${app.path.buildFolder}/font/*.woff`).pipe(
			fontfacegen({
				filepath: './src/scss',
				filename: 'fonts.scss',
				formats: ['woff2'],
			})
		);
	});
};
