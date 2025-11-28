import jwt from "jsonwebtoken";
import User from "../models/User.js";

// authorization - xác mình người dùng là ai
export const protectedRoute = (req, res, next) => {
    try {
        // lấy token từ header
        const authHeaders = req.headers["authorization"];
        const token = authHeaders && authHeaders.split(" ")[1]; //Bearer <token>

        if (!token) {
            return res.status(401).json({ message: "không tìm thấy access token" })
        }
        // xác nhận token hợp lệ
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decodedUser) => {
            if (err) {
                console.error(err);
                return res.status(403).json({ message: "Access token hết hạn hoặc không hợp lệ" });
            }
            // tìm user
            const user = await User.findById(decodedUser.userId).select("-hashedPassword");

            if (!user) {
                return res.status(404).json({ message: "Người dùng không tồn tại." });

            }
            // trả user về trong req
            req.user = user;
            next();
        })

    }
    catch (error) {
        console.error("lỗi khi xác minh jwt ở Middlewares", error);
        return res.status(500).json({ message: "lỗi hệ thống" });
    }
}