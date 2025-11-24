import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // nghĩa là bắt buộc phải có
        unique: true,   // nghĩa là không được trùng lặp
        trim: true,      // nghĩa là bỏ khoảng trắng thừa
        lowercase: true  // nghĩa là chuyển về chữ thường
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,     // bắt buộc phải có
        unique: true,   // không được trùng lặp
        trim: true,     // bỏ khoảng trắng thừa
        lowercase: true     // chuyển về chữ thường
    },
    displayName: {
        type: String,
        required: true,
        trim: true,
    },
    avatarUrl: {
        type: String,   // lưu đường dẫn ảnh
    },
    avatarId: {
        type: String,   // lưu id ảnh trên cloudinary để xóa hình
    },
    bio: {
        type: String,
        maxlength: 600,  // giới hạn 600 ký tự
    },
    phone: {
        type: String,
        sparse: true,  // cho phép trùng lặp giá trị null, nhưng không được trùng
    }
},
    {
        timestamps: true, // tự động tạo createdAt và updatedAt
    }
);

const User = mongoose.model("User", userSchema);    // tạo model User từ schema userSchema
export default User;                                // xuất model User để sử dụng ở nơi khác