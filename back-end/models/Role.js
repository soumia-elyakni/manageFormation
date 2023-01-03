import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

export default RoleSchema