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

  headerButtonWrapper: {
    flexDirection: "row",
  },

  headerButton: {
    paddingHorizontal: 15,
    fontSize: 27,
  },

  screenContentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 30,
  },

  screenContentTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },

  screenContentText: {
    fontSize: 22,
    paddingVertical: 15,
  },

  itemDetailNotes: {
    borderTopWidth: 1,
  },

  textInputTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
  },

  textInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2.5,
    paddingHorizontal: 5,
    marginVertical: 15,
  },

  registerLink: {
    fontSize: 17,
    color: "#0000ff",
    textAlign: "center",
    marginVertical: 15,
  },

  loadingText: {
    fontSize: 17,
    textAlign: "center",
    padding: 30,
  },
});