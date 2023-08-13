 import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    Sen: require("./Sen-Regular.ttf"),
    "Sen-Regular": require("./Sen-Regular.ttf"),
    "Poppins-Medium": require("./Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./Poppins-Bold.ttf"),
    "Poppins": require("./Poppins-Regular.ttf"),
    "Bitter": require("./Bitter-Bold.ttf"),
    "Bitter-Bold": require("./Bitter-Bold.ttf"),
  })
  //   Montserrat: require("./Montserrat-Regular.ttf"),
  //   "Montserrat-Regular": require("./Montserrat-Regular.ttf"),
  // })
}
