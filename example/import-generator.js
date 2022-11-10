/* eslint-disable */
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const extensions = [
  //image
  '3dm',
  '3ds',
  'max',
  'bmp',
  'dds',
  'gif',
  'jpg',
  'jpeg',
  'png',
  'psd',
  'xcf',
  'tga',
  'thm',
  'tif',
  'tiff',
  'yuv',
  'ai',
  'eps',
  'ps',
  'svg',
  'dwg',
  'dxf',
  'gpx',
  'kml',
  'kmz',
  'webp',
  //video
  '3g2',
  '3gp',
  'aaf',
  'asf',
  'avchd',
  'avi',
  'drc',
  'flv',
  'm2v',
  'm4p',
  'm4v',
  'mkv',
  'mng',
  'mov',
  'mp2',
  'mp4',
  'mpe',
  'mpeg',
  'mpg',
  'mpv',
  'mxf',
  'nsv',
  'ogg',
  'ogv',
  'ogm',
  'qt',
  'rm',
  'rmvb',
  'roq',
  'srt',
  'svi',
  'vob',
  'webm',
  'wmv',
  'yuv',
  //audio
  'aac',
  'aiff',
  'ape',
  'au',
  'flac',
  'gsm',
  'it',
  'm3u',
  'm4a',
  'mid',
  'mod',
  'mp3',
  'mpa',
  'pls',
  'ra',
  's3m',
  'sid',
  'wav',
  'wma',
  'xm',
  //text,
  'doc',
  'docx',
  'ebook',
  'log',
  'md',
  'msg',
  'odt',
  'org',
  'pages',
  'pdf',
  'rtf',
  'rst',
  'tex',
  'txt',
  'wpd',
  'wps',
];

glob(`./*.{${[...extensions]}}`, undefined, (err, files) => {
  let imports = ``;
  let exports = ``;

  files.forEach(file => {
    const ext = extensions.find(ext => file.endsWith(`.${ext}`));
    const name = path.basename(file, `.${ext}`);

    const removedSpecialCharactersFromName = name.replace(/[^a-zA-Z ]/g, '');

    imports += `import ${removedSpecialCharactersFromName} from '${file}';\n`;
    exports += `'${name}':${removedSpecialCharactersFromName},\n`;
  });

  let template = `${imports}

export default {
${exports}
}`;

  fs.writeFile('index[import-generator].js', template, () => {});
});
