'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  modules: ['UPLOAD', 'UPLOADED_IMAGES', 'ICONS_GALLERY', 'IMAGES_GALLERY'], // 'UPLOAD', 'UPLOADED_IMAGES', 'ICONS_GALLERY', 'IMAGES_GALLERY'
  folders: [{ dir: '/', label: 'All' }],
  initialTab: 'UPLOAD',
  airstoreUploadKey: '',
  container: 'example',
  uploadParams: {},
  onUpload: function onUpload() {},
  imageOnly: true,
  openpixKey: null,
  language: 'en',
  tagging: {
    active: false,
    provider: 'google',
    confidence: 80,
    limit: 10
  }
};
var DEFAULT_ICON_SIZE = exports.DEFAULT_ICON_SIZE = 100;

var COLORS = exports.COLORS = ['#96dc52', '#016df0', '#943dc5', '#feda48', '#d90028', '#ffffff', '#000000'];

var DEFAULT_TAGS = ['accessibility', 'arrows', 'Audio & Video', 'Business', 'Charity', 'Chat', 'Chess', 'Code', 'Communication', 'Computers', 'Currency', 'Date & Time', 'Design', 'Editors', 'Files', 'Genders', 'Hands', 'Health', 'Images', 'Interfaces', 'Logistics', 'Maps', 'Medical', 'Moving', 'Objects', 'Payments & Shopping', 'Shapes', 'Spinners', 'Sports', 'Status', 'Users & People', 'Vehicles', 'Writing'];