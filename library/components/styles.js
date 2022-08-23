import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },

  listItemTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },

  listItemText: {
    fontSize: 17,
  },

  headerButtons: {
    flexDirection: "row",
  },

  headerButton: {
    paddingHorizontal: 15,
    fontSize: 27,
  },
});