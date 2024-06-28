import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Padding, FontFamily, FontSize, Color, Border} from '../GlobalStyles'


const CustomButton = () => {
  return (
    <View>
      <View style={[styles.nextWrapper, styles.wrapperFlexBox]}>
      <Text style={[styles.next, styles.nextTypo]}>Book Appointment</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    nextWrapper: {
        top: 750,
        margin:20,
        borderRadius: Border.br_52xl,
        width: 350,
        height: 70,
        paddingHorizontal: Padding.p_151xl,
        backgroundColor: Color.colorRoyalblue_300,
        paddingVertical: Padding.p_xl,
        position: "absolute",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        }
      },
      wrapperFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      },
      nextTypo: {
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_5xl,
        textAlign: "center",
        width:300
      },
      next: {
        color: Color.colorWhite,
        textAlign: 'center',
      },
})
export default CustomButton;