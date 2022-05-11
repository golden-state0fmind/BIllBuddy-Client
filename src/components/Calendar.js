// import React, { Component, useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';

// export default class Calendar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStartDate: null,
//       selectedEndDate: null,
//       setShow: false
//     };
//     this.onDateChange = this.onDateChange.bind(this);
//   }

//   onDateChange(date, type) {
//     if (type === 'END_DATE') {
//       this.setState({
//         selectedEndDate: date,
//       });
//     } else {
//       this.setState({
//         selectedStartDate: date,
//         selectedEndDate: null,
//       });
//     }
//   }

//   onPressModal() {
//     const { selectedStartDate, selectedEndDate } = this.state;
//     const minDate = new Date(); // Today
//     const maxDate = new Date(2017, 6, 3);
//     const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
//     const endDate = selectedEndDate ? selectedEndDate.toString() : '';
//     this.onPressModal = this.onPressModal.bind(this);

//     <Modal>
//                     <View style={styles.container}>
//                         <CalendarPicker
//                         startFromMonday={true}
//                         allowRangeSelection={true}
//                         minDate={minDate}
//                         maxDate={maxDate}
//                         todayBackgroundColor="#f2e6ff"
//                         selectedDayColor="#7300e6"
//                         selectedDayTextColor="#FFFFFF"
//                         onDateChange={this.onDateChange}
//                         />
//                         <View>
//                             <Text>SELECTED START DATE:{ startDate }</Text>
//                             <Text>SELECTED END DATE:{ endDate }</Text>
//                         </View>
//                     </View>
//                 </Modal>
//   }

//   render() {

//     return (
//                 <Button onPress={this.onPressModal} title="Pick a date" />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     marginTop: 100,
//   },
// });