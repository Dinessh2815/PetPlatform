import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, Border, Padding, FontFamily } from "../GlobalStyles";

const Calendar = () => {
  return (
    <View style={styles.calendar}>
      <View style={styles.datesFlexBox}>
        <Text style={[styles.mo, styles.moTypo]}>Mon</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo, styles.moTypo]}>Tue</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo, styles.moTypo]}>Wed</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo, styles.moTypo]}>Thu</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo, styles.moTypo]}>Fri</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo, styles.moTypo]}>Sat</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo, styles.moTypo]}>Sun</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>1</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>2</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>3</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>4</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>5</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>6</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>7</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>8</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>9</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>10</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>11</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>12</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>13</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>14</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>15</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>16</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>17</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>18</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>19</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>20</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>21</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>22</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>23</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>24</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>25</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>26</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>27</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>28</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>29</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>30</Text>
      </View>
      <View style={[styles.moWrapper, styles.datesFlexBox]}>
        <Text style={[styles.mo7, styles.moTypo]}>31</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moTypo: {
    textAlign: 'auto',
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    marginLeft:0
  },
  datesFlexBox: {
    justifyContent: 'flex-start',
    height: 36,
    width: 36,
    borderRadius: Border.br_95xl,
    padding: Padding.p_3xs,
    alignItems: 'flex-start',
    flexDirection: "row",
    backgroundColor: Color.colorAliceblue,
    marginRight:1
  },
  mo: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width:30
  },
  moWrapper: {
    marginLeft: 10,
  },
  mo7: {
    fontFamily: FontFamily.interRegular,
  },
  calendar: {
    position: "absolute",
    top: 198,
    left: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_5xl,
    width: 350,
    overflow: "hidden",
    flexWrap: "wrap",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorAliceblue,
  },
});

export default Calendar;