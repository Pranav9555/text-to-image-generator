import UserModel from "../models/user.models.js";
import FormData from "form-data"
import axios from "axios";

export const generateImage = async (req, res) => {

  try {
    const { userId } = req.user;
    const {prompt} = req.body;
    console.log(userId)
    console.log(prompt)
    const user = await UserModel.findById(userId)

    if (!user || !prompt) {
      return res.json({ success: false, message: "missing details" })
    }
    if (user.creditBalance === 0 || UserModel.creditBalance < 0) {
      return res.json({ success: false, message: "No credit balance", creditBalance: user.creditBalance })
    }

    const formData = new FormData();
    formData.append('prompt', prompt)

    const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1',formData, {
      headers: {
        'x-api-key': process.env.CLIPDROP_API,
      },
      responseType: 'arraybuffer'
    })

    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    await UserModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })

    res.json({ success: true, message: "congratulations! image generated", creditBalance: user.creditBalance - 1, resultImage })

  }
  catch (error) {
      console.log(error);
      res.json({success:true,message: error.message})
  }

}