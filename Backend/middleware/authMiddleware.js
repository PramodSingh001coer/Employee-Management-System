import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    // Cookie se token lo
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. Please login.",
      });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // User ID request me save kar do
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

export default verifyToken;