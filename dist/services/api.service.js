'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListFiles = exports.uploadFiles = exports.send = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var independentProtocolRegex = /^[https|http]+\:\/\//g;
var getBaseUrl = function getBaseUrl(container) {
  return 'https://' + container + '.api.airstore.io/v1/';
};

var send = exports.send = function send(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var responseType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "json";
  return (0, _axios2.default)({
    url: url,
    method: method,
    data: data,
    responseType: responseType,
    headers: headers,
    timeout: 30000
  }).then(function (_ref) {
    var _ref$data = _ref.data,
        data = _ref$data === undefined ? {} : _ref$data;
    return data;
  }, function (_ref2) {
    var _ref2$data = _ref2.data,
        data = _ref2$data === undefined ? {} : _ref2$data;
    return data;
  });
};

/**
 * Send files to airstore storage.
 * We can send 2 types of files:
 *  - files from <input type="file"/>
 *  - files from urls
 * Method understand what files we give via "data_type" attribute.
 *
 * @param uploadPath    {string}  Airstore upload url (like: "//jolipage001.api.airstore.io/upload") or custom handler
 * @param uploadParams  {object}  Params which we need to send to uploadPath
 * @param files         {array}   Array with files
 * @param uploadKey     {string}  = secret key
 * @param data_type     {string}  Available values: "files[]", "files_url[]" (or another if you use custom handler
 *   uploadPath)
 * @param dir     {string}  = directory to upload files
 * @returns {Promise}
 */
var uploadFiles = exports.uploadFiles = function uploadFiles() {
  var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _ref3 = arguments[1];
  var _ref3$uploadPath = _ref3.uploadPath,
      uploadPath = _ref3$uploadPath === undefined ? '' : _ref3$uploadPath,
      _ref3$uploadParams = _ref3.uploadParams,
      uploadParams = _ref3$uploadParams === undefined ? {} : _ref3$uploadParams,
      _ref3$uploadKey = _ref3.uploadKey,
      uploadKey = _ref3$uploadKey === undefined ? '' : _ref3$uploadKey;
  var data_type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'files[]';
  var dir = arguments[3];

  var url = uploadPath || ''; // use independent protocol
  var ajaxData = new FormData();
  var jsonData = { files_urls: [] };
  var isJson = data_type === 'application/json';

  uploadParams = Object.assign({}, _config2.default.UPLOAD_PARAMS = {}, uploadParams, { dir: dir || uploadParams.dir });

  // generate params string
  var paramsStr = Object.keys(uploadParams).filter(function (paramName) {
    return uploadParams[paramName] !== null;
  }) // do not use params with NULL value
  .map(function (paramName) {
    return paramName + '=' + uploadParams[paramName];
  }).join('&');

  if (paramsStr) url += '?' + paramsStr;

  if (files && isJson) {
    [].concat(_toConsumableArray(files)).forEach(function (file) {
      jsonData.files_urls.push(file);
    });
  } else if (files) [].concat(_toConsumableArray(files)).forEach(function (file) {
    return ajaxData.append(data_type, file);
  }); // fill FormData

  return new Promise(function (resolve, reject) {
    send(url, 'POST', isJson ? jsonData : ajaxData, { 'X-Airstore-Secret-Key': uploadKey || _config2.default.AIRSTORE_UPLOAD_KEY,
      'Content-Type': isJson ? 'application/json' : 'multipart/form-data'
    }).then(function (response) {
      var _response$status = response.status,
          status = _response$status === undefined ? 'success' : _response$status,
          _response$files = response.files,
          files = _response$files === undefined ? [] : _response$files,
          file = response.file;


      if (status === 'success' && file) {
        //file.public_link = file.public_link.replace(independentProtocolRegex, '//');

        resolve([file]);
      } else if (status === 'success' && files) {
        resolve(files);
      } else reject(response);

      //if (status === 'success' && files && files.length)
      //  resolve(
      //    files
      //      .filter(file => file.status !== 'error')
      //      .map(file => {
      //        file.public_link = file.public_link.replace(independentProtocolRegex, '//');
      //
      //        return file;
      //      })
      //  );
      //else
      //  reject(response);
    }, function (error) {
      if (error.code === 'ECONNABORTED') console.warn('Network seems not good :(');

      reject(error);
    });
  });
};

var getListFiles = exports.getListFiles = function getListFiles(_ref4) {
  var _ref4$dir = _ref4.dir,
      dir = _ref4$dir === undefined ? '' : _ref4$dir,
      _ref4$container = _ref4.container,
      container = _ref4$container === undefined ? '' : _ref4$container;

  var baseUrl = getBaseUrl(container);
  var apiPath = 'list?';
  var directoryPath = dir ? 'dir=' + dir : '';
  var url = [baseUrl, apiPath, directoryPath].join('');

  return send(url).then(function () {
    var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return response.files;
  });
};