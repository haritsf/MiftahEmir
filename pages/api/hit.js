// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const tryHit = (req, res) => {
  res.statusCode = 200;
  req.hitReq = "You're Successfully Hit Boilerplate API";
  res.status(200).json({ statusCode: res.statusCode, message: req.hitReq });
};

export default tryHit;
