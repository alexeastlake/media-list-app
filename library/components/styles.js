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

  itemDetail: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 30,
  },

  itemDetailTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },

  itemDetailText: {
    fontSize: 22,
    paddingVertical: 15,
  },

  itemDetailNotes: {
    borderTopWidth: 1,
  },
});