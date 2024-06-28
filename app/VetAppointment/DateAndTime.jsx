import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Padding, FontFamily, FontSize, Color, Border } from '../../GlobalStyles';
import Calendar from '../../components/Calendar'; // Default import, no curly braces
import TimeSlots from '../../components/TimeSlots'; // Default import, no curly braces
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router'
import CalendarSet from '../../components/CalendarSet';


const DateAndTime = () => {
  return (
    <SafeAreaView style={styles.iphone1415ProMax18}>
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
            Book Appointment
          </Text>
        </View>
      </View>
      <View style={[styles.selectDateWrapper, styles.selectWrapperFlexBox]}>
        <Text style={[styles.selectDate, styles.selectDateFlexBox]}>
          Select Date
        </Text>
      </View>
      <CalendarSet style={styles.CalendarLayout}/>
      <View style={[styles.selectHourWrapper, styles.selectWrapperFlexBox]}>
        <Text style={[styles.selectDate, styles.selectDateFlexBox]}>
          Select Hour
        </Text>
      </View>
      <View style={[styles.timeslotGroup, styles.timeslotLayout]}>
        <View style={[styles.timeslotParent, styles.timeslotLayout]}>
          <TimeSlots
            aM="09:00 AM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#fff"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#246bfd"
          />
          <TimeSlots
            aM="09:30 AM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#fff"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#246bfd"
          />
          <TimeSlots
            aM="10:00 AM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#fff"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#246bfd"
          />
          <TimeSlots
            aM="10:30 AM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#fff"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#246bfd"
          />
          <TimeSlots
            aM="11:00 AM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#fff"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#246bfd"
          />
          <TimeSlots
            aM="09:00 AM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#fff"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#246bfd"
          />
          <TimeSlots
            aM="12:00 PM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#fff"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#246bfd"
          />
          <TimeSlots
            aM="12:30 PM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#fff"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#246bfd"
          />
          <TimeSlots
            aM="03:00 PM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#fff"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#246bfd"
          />
          <TimeSlots
            aM="05:30 PM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#246bfd"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#fff"
          />
          <TimeSlots
            aM="06:00 PM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#fff"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#246bfd"
          />
          <TimeSlots
            aM="06:30 PM"
            property1Variant2Position="unset"
            property1Variant2BackgroundColor="#fff"
            property1Variant2Width={102}
            property1Variant2Height={42}
            property1Variant2MarginLeft={10}
            aMColor="#246bfd"
          />
        </View>
      </View>
      <Pressable onPress={() => router.push('../VetAppointment/Payments')}>
            <View style={[styles.nextWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.next, styles.nextTypo]}>Book Appointment</Text>
            </View>
       </Pressable>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  timeslotParentFlexBox: {
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  selectDateFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  datesFlexBox: {
    backgroundColor: Color.colorRoyalblue_300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  moClr: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  selectWrapperFlexBox: {
    left: 30,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  timeslotLayout: {
    height: 260,
    width: 380,
    position: "absolute",
  },
  keyboardBackspaceIcon: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  bookAppointment: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  bookAppointmentWrapper: {
    marginLeft: 10,
    padding: Padding.p_3xs,
  },
  keyboardBackspaceParent: {
    top: 30,
    width: 430,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    left: -10,
    overflow: "hidden",
  },
  next: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  nextButtons: {
    top: 832,
    left: 15,
    borderRadius: Border.br_52xl,
    width: 400,
    height: 70,
    paddingHorizontal: Padding.p_151xl,
    paddingVertical: Padding.p_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  selectDate: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  selectDateWrapper: {
    top: 105,
  },
  selectHourWrapper: {
    top: 520,
  },
  timeslotParent: {
    top: 0,
    borderRadius: Border.br_5xl,
    flexWrap: "wrap",
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    height: 260,
    width: 380,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  timeslotGroup: {
    top: 555,
    left: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  mo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  dates: {
    top: 300,
    left: 143,
    borderRadius: Border.br_95xl,
    width: 36,
    height: 36,
    padding: Padding.p_3xs,
  },
  iphone1415ProMax18: {
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
  },
  CalendarLayout:{
  },
  nextWrapper: {
    top: 710,
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
});

export default DateAndTime;
