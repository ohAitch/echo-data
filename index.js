let {default:decode} = require("data-uri-to-buffer")
module.exports = (req,res) => {
  let buf = decode(req.url.slice(1))
  res.setHeader("content-type", buf.type)
  return buf
}
