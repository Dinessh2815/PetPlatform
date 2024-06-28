import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import * as React from 'react';
import { Padding, FontFamily, FontSize, Color, Border } from '../../GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
const AddNewCard = () => {
  return (
    <SafeAreaView style={styles.iphone1415ProMax19}>
        <View style={styles.keyboardBackspaceParent}>
        <Image
          style={styles.keyboardBackspaceIcon}
          contentFit="cover"
          source={require("../../assets/keyboard-backspace.png")}
        />
        <View
          style={[styles.bookAppointmentWrapper, styles.timeslotParentFlexBox]}
        >
          <Text style={[styles.bookAppointment, styles.selectDateFlexBox]}>
            Add New Card
          </Text>
        </View>
        </View>
        <View style={[styles.cardtile, styles.cardtileBg]}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-56.png")}
          />
        </View>
        <Text style={[styles.cardHolderName, styles.cardHolderNameLayout]}>
          Card Holder Name
        </Text>
        <Text style={[styles.xxxxxxxxxxXxxxxx, styles.xxXxTypo]}>
          xxxxxxxxxx xxxxxx
        </Text>
        <Text style={[styles.xxXx, styles.xxXxPosition]}>xx / xx</Text>
        <Text style={[styles.expiryDate, styles.xxXxPosition]}>
          Expiry Date
        </Text>
        <Image
          style={styles.riamazonFillIcon}
          contentFit="cover"
          source={require("../../assets/riamazonfill.png")}
        />
        <Image
          style={styles.cibccMastercardIcon}
          contentFit="cover"
          source={require("../../assets/cibccmastercard.png")}
        />
        <Text style={[styles.debitCard, styles.cardTypo]}>Debit Card</Text>
      </View>
      <View style={[styles.cardHolderNameWrapper, styles.cardWrapperFlexBox]}>
        <Text style={[styles.cardHolderName1, styles.cardTypo]}>
          Card Holder Name
        </Text>
      </View>
      <View style={[styles.cardNumberWrapper, styles.cardWrapperFlexBox]}>
        <Text style={[styles.cardHolderName1, styles.cardTypo]}>
          Card Number
        </Text>
      </View>
      <View style={[styles.expiryDateWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.cardHolderName1, styles.cardTypo]}>
          Expiry Date
        </Text>
      </View>
      <View style={[styles.cvvWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.cardHolderName1, styles.cardTypo]}>CVV</Text>
      </View>
      <View style={[styles.input, styles.inputSpaceBlock]}>
        <TextInput style={[styles.cardHolderName1, styles.cardTypo]}/>
      </View>
      <View style={[styles.dateinput, styles.cvvinputFlexBox]}>
        <TextInput style={[styles.cardHolderName1, styles.cardTypo]}/>
      </View>
      <View style={[styles.cvvinput, styles.cvvinputFlexBox]}>
        <TextInput style={[styles.cardHolderName1, styles.cardTypo]}/>
      </View>
      <View style={[styles.input1, styles.inputSpaceBlock]}>
        <TextInput style={[styles.cardHolderName1, styles.cardTypo]} />
      </View>
      <Pressable onPress={() => router.push('../VetAppointment/CardPayments')}>
            <View style={[styles.nextWrapper, styles.wrapperFlexBox1]}>
            <Text style={[styles.next, styles.nextTypo]}>Add</Text>
            </View>
       </Pressable>
    </SafeAreaView>
  )
}

export default AddNewCard

const styles = StyleSheet.create({
    keyboardBackspaceParent: {
        top: 25,
        width: 430,
        paddingHorizontal: Padding.p_11xl,
        paddingVertical: Padding.p_xl,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        left: -15,
        overflow: "hidden",
      },
      keyboardBackspaceIcon: {
        width: 30,
        height: 30,
        overflow: "hidden",
      },
      bookAppointmentWrapper: {
        marginLeft: 10,
        padding: Padding.p_3xs,
      },
      timeslotParentFlexBox: {
        justifyContent: "center",
        padding: Padding.p_3xs,
        alignItems: "center",
        flexDirection: "row",
      },
      bookAppointment: {
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_5xl,
      },
      selectDateFlexBox: {
        textAlign: "left",
        color: Color.colorBlack,
      },
      cardWrapperFlexBox: {
        padding: Padding.p_3xs,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      },
      cardtileBg: {
        backgroundColor: Color.colorRoyalblue_300,
        position: "absolute",
      },
      frameLayout: {
        height: 8,
        width: 8,
      },
      cardHolderNameLayout: {
        height: 16,
        width: 113,
        left: 29,
        fontFamily: FontFamily.interRegular,
        color: Color.colorWhite,
        textAlign: "left",
        position: "absolute",
      },
      xxXxTypo: {
        fontSize: FontSize.size_3xs,
        top: 152,
      },
      xxXxPosition: {
        left: 183,
        height: 16,
        width: 113,
        fontFamily: FontFamily.interRegular,
        color: Color.colorWhite,
        textAlign: "left",
        position: "absolute",
      },
      cardTypo: {
        fontSize: FontSize.size_xl,
        textAlign: "left",
      },
      wrapperFlexBox: {
        top: 651,
        padding: Padding.p_3xs,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
      },
      wrapperFlexBox1: {
        top: 750,
        padding: Padding.p_3xs,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
      },
      inputSpaceBlock: {
        paddingVertical: Padding.p_3xs,
        height: 50,
        backgroundColor: Color.colorAliceblue,
        borderRadius: Border.br_mid,
        paddingHorizontal: Padding.p_11xl,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        width:350
      },
      cvvinputFlexBox: {
        justifyContent: "flex-end",
        width: 160,
        top: 713,
        paddingVertical: Padding.p_3xs,
        height: 50,
        backgroundColor: Color.colorAliceblue,
        borderRadius: Border.br_xl,
        paddingHorizontal: Padding.p_11xl,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
      },
      keyboardBackspaceIcon: {
        width: 30,
        height: 30,
        overflow: "hidden",
      },
      addNewCard: {
        textAlign: "left",
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_5xl,
        color: Color.colorBlack,
      },
      addNewCardWrapper: {
        marginLeft: 10,
      },
      keyboardBackspaceParent: {
        top: 50,
        left: 0,
        width: 430,
        paddingVertical: Padding.p_xl,
        paddingHorizontal: Padding.p_11xl,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
      },
      next: {
        color: Color.colorWhite,
        textAlign: "center",
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_5xl,
        width:100,
        left:25
      },
      nextWrapper: {
        top: 800,
        left: 25,
        borderRadius: Border.br_52xl,
        width: 350,
        height: 70,
        paddingHorizontal: Padding.p_151xl,
        justifyContent: "center",
        backgroundColor: Color.colorRoyalblue_300,
        paddingVertical: Padding.p_xl,
        alignItems: "center",
        flexDirection: "row",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
      },
      frameItem: {
        marginLeft: 5,
      },
      ellipseParent: {
        top: 80,
        left: 23,
        paddingHorizontal: 7,
        paddingVertical: 6,
        flexDirection: "row",
        position: "absolute",
        overflow: "hidden",
      },
      cardHolderName: {
        fontSize: FontSize.size_xs,
        top: 128,
      },
      xxxxxxxxxxXxxxxx: {
        height: 16,
        width: 113,
        left: 29,
        fontFamily: FontFamily.interRegular,
        color: Color.colorWhite,
        textAlign: "left",
        position: "absolute",
      },
      xxXx: {
        fontSize: FontSize.size_3xs,
        top: 152,
      },
      expiryDate: {
        fontSize: FontSize.size_xs,
        top: 128,
      },
      riamazonFillIcon: {
        top: 20,
        left: 330,
        width: 24,
        height: 24,
        position: "absolute",
        overflow: "hidden",
      },
      cibccMastercardIcon: {
        top: 160,
        left: 322,
        width: 32,
        height: 32,
        position: "absolute",
        overflow: "hidden",
      },
      debitCard: {
        top: 26,
        left: 31,
        width: 111,
        height: 27,
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_xl,
        color: Color.colorWhite,
        position: "absolute",
      },
      cardtile: {
        top: 139,
        borderRadius: 30,
        width: 380,
        height: 200,
        left: 5,
        overflow: "hidden",
      },
      cardHolderName1: {
        fontWeight: "600",
        fontFamily: FontFamily.interSemiBold,
        fontSize: FontSize.size_xl,
        color: Color.colorBlack,
      },
      cardHolderNameWrapper: {
        top: 383,
        left: 17,
        position: "absolute",
      },
      cardNumberWrapper: {
        top: 512,
        left: 17,
        position: "absolute",
      },
      expiryDateWrapper: {
        left: 17,
      },
      cvvWrapper: {
        left: 223,
      },
      input: {
        top: 435,
        left: 27,
        width: 356,
        backgroundColor:Color.colorAliceblue
      },
      dateinput: {
        left: 25,
      },
      cvvinput: {
        left: 223,
      },
      input1: {
        top: 583,
        width: 352,
        left: 25,
      },
      iphone1415ProMax19: {
        flex: 1,
        width: "100%",
        height: 932,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        marginTop:-20
      },
      nextTypo: {
        textAlign: "left",
        fontSize: FontSize.size_5xl,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
      },
})