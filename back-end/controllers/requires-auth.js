function requiresAuth(req, res, next) {
  if (req.token) {
    next();
  } else {
    res.status(401).json({
      status: "error",
      message: "Requires a valid token!",
    });
  }
}

export default requiresAuth;