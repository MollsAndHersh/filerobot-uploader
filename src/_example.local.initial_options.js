/**
 * Copy this file to ./local.initial_options.js!
 *
 * Local initial options.
 * When you are developing and work on localhost:8080 you can manage options here
 */
export default {
  modules: ['USER_UPLOAD', 'ICONS'],
  on_upload_src: null,
  on_upload: null,
  image_only: true,
  settings:   {
    uploadPath: null,
    uploadParams: { opt_auth_upload_key: null }
  }
}